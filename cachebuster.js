(() => {
    "use strict";

    const PARAM = "cachebuster";
    const url = new URL(location.href);

    const isCacheBust = url.searchParams.has(PARAM);

    if (isCacheBust) {
        url.searchParams.delete(PARAM);
        history.replaceState(null, "", url);
    }

    window.cachebuster = {
        clearCache() {
            const nextUrl = new URL(location.href);
            nextUrl.searchParams.set(PARAM, crypto.randomUUID());
            location.replace(nextUrl);
        }
    };

    if (!isCacheBust && document.querySelector("script[autoclear]")) {
        cachebuster.clearCache();
    }
})();
