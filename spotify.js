/* =========================================================
   SPOTIFY DASHBOARD — PKCE
========================================================= */

const SPOTIFY_CLIENT_ID = "2869777f104147f5bc319b6ebeb8601b";
const SPOTIFY_REDIRECT_URI =
    "https://svulz.github.io/svulzhu/";

const SPOTIFY_SCOPE = "user-read-recently-played";

const SPOTIFY_API =
    "https://api.spotify.com/v1";

const SPOTIFY_AUTH =
    "https://accounts.spotify.com/authorize";

const SPOTIFY_TOKEN =
    "https://accounts.spotify.com/api/token";


const spotifyLogin =
    document.getElementById("spotifyLogin");

const spotifyRefresh =
    document.getElementById("spotifyRefresh");

const spotifyMessage =
    document.getElementById("spotifyMessage");

const spotifyTracks =
    document.getElementById("spotifyTracks");

const spotifyStatus =
    document.getElementById("spotifyStatus");


function spotifyText(key) {
    return getTranslation(`spotify.${key}`);
}


/* ---------------------------------------------------------
   PKCE HELPERS
--------------------------------------------------------- */

function randomString(length = 64) {
    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz" +
        "0123456789-._~";

    const bytes =
        crypto.getRandomValues(
            new Uint8Array(length)
        );

    return Array.from(
        bytes,
        byte => chars[byte % chars.length]
    ).join("");
}


function base64UrlEncode(buffer) {
    return btoa(
        String.fromCharCode(...new Uint8Array(buffer))
    )
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
}


async function createCodeChallenge(verifier) {
    const data = new TextEncoder().encode(verifier);

    const digest = await crypto.subtle.digest(
        "SHA-256",
        data
    );

    return base64UrlEncode(digest);
}


/* ---------------------------------------------------------
   TOKEN STORAGE
--------------------------------------------------------- */

function getSpotifyToken() {
    try {
        return JSON.parse(
            localStorage.getItem("spotifyToken") || "null"
        );
    } catch {
        return null;
    }
}


function saveSpotifyToken(token) {
    localStorage.setItem(
        "spotifyToken",
        JSON.stringify(token)
    );
}


function clearSpotifyToken() {
    localStorage.removeItem("spotifyToken");
}


/* ---------------------------------------------------------
   LOGIN
--------------------------------------------------------- */

async function loginSpotify() {
    if (
        SPOTIFY_CLIENT_ID.startsWith("IDE_") ||
        SPOTIFY_REDIRECT_URI.includes("FELHASZNALO")
    ) {
        spotifyMessage.textContent =
            "Állítsd be a Client ID-t és a Redirect URI-t!";
        return;
    }

    const verifier = randomString(64);
    const challenge = await createCodeChallenge(verifier);
    const state = randomString(32);

    sessionStorage.setItem(
        "spotify_code_verifier",
        verifier
    );

    sessionStorage.setItem(
        "spotify_state",
        state
    );

    const params = new URLSearchParams({
        client_id: SPOTIFY_CLIENT_ID,
        response_type: "code",
        redirect_uri: SPOTIFY_REDIRECT_URI,
        scope: SPOTIFY_SCOPE,
        code_challenge_method: "S256",
        code_challenge: challenge,
        state
    });

    window.location.assign(
        `${SPOTIFY_AUTH}?${params.toString()}`
    );
}


/* ---------------------------------------------------------
   AUTHORIZATION CODE -> TOKEN
--------------------------------------------------------- */

async function exchangeSpotifyCode(code) {
    const verifier = sessionStorage.getItem(
        "spotify_code_verifier"
    );

    if (!verifier) {
        throw new Error("Missing PKCE verifier.");
    }

    const response = await fetch(SPOTIFY_TOKEN, {
        method: "POST",
        headers: {
            "Content-Type":
                "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            client_id: SPOTIFY_CLIENT_ID,
            grant_type: "authorization_code",
            code,
            redirect_uri: SPOTIFY_REDIRECT_URI,
            code_verifier: verifier
        })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.error_description || data.error ||
            "Token exchange failed."
        );
    }

    saveSpotifyToken({
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        expires_at: Date.now() + data.expires_in * 1000
    });

    sessionStorage.removeItem("spotify_code_verifier");
    sessionStorage.removeItem("spotify_state");
}


/* ---------------------------------------------------------
   REFRESH TOKEN
--------------------------------------------------------- */

async function refreshSpotifyToken(token) {
    if (!token?.refresh_token) {
        clearSpotifyToken();
        throw new Error("Spotify login required.");
    }

    const response = await fetch(SPOTIFY_TOKEN, {
        method: "POST",
        headers: {
            "Content-Type":
                "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            client_id: SPOTIFY_CLIENT_ID,
            grant_type: "refresh_token",
            refresh_token: token.refresh_token
        })
    });

    const data = await response.json();

    if (!response.ok) {
        clearSpotifyToken();
        throw new Error(
            data.error_description || "Token refresh failed."
        );
    }

    saveSpotifyToken({
        access_token: data.access_token,
        refresh_token:
            data.refresh_token || token.refresh_token,
        expires_at: Date.now() + data.expires_in * 1000
    });
}


async function getValidSpotifyToken() {
    let token = getSpotifyToken();

    if (!token?.access_token) {
        return null;
    }

    if (Date.now() >= token.expires_at - 60000) {
        await refreshSpotifyToken(token);
        token = getSpotifyToken();
    }

    return token.access_token;
}


/* ---------------------------------------------------------
   API REQUEST
--------------------------------------------------------- */

async function spotifyFetch(endpoint, retry = true) {
    const accessToken = await getValidSpotifyToken();

    if (!accessToken) {
        throw new Error("Spotify login required.");
    }

    const response = await fetch(
        `${SPOTIFY_API}${endpoint}`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
    );

    if (response.status === 401 && retry) {
        const token = getSpotifyToken();

        if (token?.refresh_token) {
            await refreshSpotifyToken(token);
            return spotifyFetch(endpoint, false);
        }

        clearSpotifyToken();
        throw new Error("Spotify login required.");
    }

    if (!response.ok) {
        throw new Error(`Spotify API error: ${response.status}`);
    }

    return response.json();
}


/* ---------------------------------------------------------
   RECENTLY PLAYED
--------------------------------------------------------- */

async function loadSpotifyTracks() {
    if (!spotifyTracks || !spotifyMessage) return;

    spotifyMessage.textContent = spotifyText("loading");

    spotifyTracks.replaceChildren();

    try {
        const data = await spotifyFetch(
            "/me/player/recently-played?limit=10"
        );

        if (!data.items?.length) {
            spotifyMessage.textContent = spotifyText("empty");
            return;
        }

        spotifyMessage.textContent = "";

        data.items.forEach(item => {
            const track = item.track;

            const row = document.createElement("article");
            row.className = "spotify-track";

            const image = document.createElement("img");
            image.className = "spotify-track-cover";
            image.alt = "";
            image.loading = "lazy";
            image.src = track.album?.images?.[0]?.url || "";

            const details = document.createElement("div");
            details.className = "spotify-track-details";

            const title = document.createElement("p");
            title.className = "spotify-track-title";

            // Eredeti cím, fordítás nélkül.
            title.textContent = track.name;

            const artist = document.createElement("p");
            artist.className = "spotify-track-artist";

            artist.textContent = (track.artists || [])
                .map(a => a.name)
                .join(", ");

            const played = document.createElement("p");
            played.className = "spotify-track-time";

            played.textContent =
                `${spotifyText("playedAt")}: ` +
                new Intl.DateTimeFormat(getLocale(), {
                    dateStyle: "short",
                    timeStyle: "short"
                }).format(new Date(item.played_at));

            const link = document.createElement("a");
            link.href = track.external_urls?.spotify || "#";
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = spotifyText("openTrack");

            details.append(title, artist, played, link);
            row.append(image, details);
            spotifyTracks.append(row);
        });

        spotifyStatus.textContent = spotifyText("connected");
        spotifyLogin.hidden = true;
        spotifyRefresh.hidden = false;

    } catch (error) {
        console.error("Spotify error:", error);

        spotifyMessage.textContent =
            error.message === "Spotify login required."
                ? spotifyText("connectFirst")
                : spotifyText("unavailable");

        spotifyLogin.hidden = false;
        spotifyRefresh.hidden = true;
    }
}


/* ---------------------------------------------------------
   CALLBACK
--------------------------------------------------------- */

async function initializeSpotify() {
    const params = new URLSearchParams(
        window.location.search
    );

    const code = params.get("code");
    const returnedState = params.get("state");
    const oauthError = params.get("error");

    if (oauthError) {
        spotifyMessage.textContent = spotifyText("error");
        window.history.replaceState(
            {},
            document.title,
            window.location.pathname
        );
        return;
    }

    if (code) {
        const savedState = sessionStorage.getItem(
            "spotify_state"
        );

        if (!savedState || returnedState !== savedState) {
            spotifyMessage.textContent = spotifyText("error");
            return;
        }

        try {
            await exchangeSpotifyCode(code);

            window.history.replaceState(
                {},
                document.title,
                window.location.pathname
            );
        } catch (error) {
            console.error(error);
            spotifyMessage.textContent = spotifyText("error");
            return;
        }
    }

    if (getSpotifyToken()) {
        await loadSpotifyTracks();
    } else {
        spotifyMessage.textContent = spotifyText("connectFirst");
        spotifyLogin.hidden = false;
        spotifyRefresh.hidden = true;
    }
}


/* ---------------------------------------------------------
   EVENTS
--------------------------------------------------------- */

if (spotifyLogin) {
    spotifyLogin.addEventListener("click", loginSpotify);
}

if (spotifyRefresh) {
    spotifyRefresh.addEventListener(
        "click",
        loadSpotifyTracks
    );
}

initializeSpotify();
