<p align="center">
  <a href="https://github.com/AetherCodez/CacheBuster.js">
    <img src="logo.png" alt="CacheBuster.js Logo" width="200"/>
  </a>
</p>

<p align="center">
  Instantly bust your website's cache with a fresh URL, without creating any new browser history entries.
</p>

<br>

## What is CacheBuster.js?

CacheBuster.js is a tiny, zero-dependency JavaScript utility that forces a fresh page load by temporarily adding a unique cache-busting query parameter to the URL.

Once the page reloads, CacheBuster.js automatically removes the parameter without causing another reload or adding anything to the browser history.

## The Problem

Browsers aggressively cache websites and their resources, which can cause:

* New updates to appear outdated
* Old JavaScript and CSS files to remain cached
* Users to see stale versions of your website
* Manual hard refreshes to be required

## The Solution

CacheBuster.js forces a fresh page load by:

* **Generating a unique cache-busting value** - Uses a cryptographically secure UUID
* **Reloading the current page** - Temporarily adds `?cachebuster=<UUID>`
* **Leaving no history entries** - Uses `location.replace()` and `history.replaceState()`
* **Cleaning up automatically** - Removes the cache-busting parameter after the reload
* **Requiring zero configuration** - Just include one script

## Features

* **One-Line Cache Busting** - Instantly force a fresh page load
* **Unique Cache-Busting Values** - Uses `crypto.randomUUID()` for an effectively unique value
* **Zero History Entries** - Cache-busting never pollutes the browser's Back button history
* **Automatic Cleanup** - Removes the temporary query parameter after reloading
* **Automatic Mode** - Add the `autoclear` attribute to trigger automatically
* **Zero Dependencies** - Pure vanilla JavaScript
* **Tiny Footprint** - Designed to be extremely lightweight

## Quick Start

### CDN

```html
<script src="https://cdn.jsdelivr.net/gh/AetherCodez/CacheBuster.js/cachebuster.min.js"></script>
```

### Local Installation

```bash
# Download to your project
curl -O https://raw.githubusercontent.com/AetherCodez/CacheBuster.js/main/cachebuster.min.js
```

### Usage

Add one line to any webpage:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>
    <!-- Your existing content -->

    <script src="cachebuster.min.js"></script>
</body>
</html>
```

Then call:

```js
cachebuster.clearCache();
```

**That's it!** The page reloads with a unique cache-busting value and then silently cleans the URL back up.

## Automatic Mode

Want CacheBuster.js to run automatically? Add the `autoclear` attribute to any script tag:

```html
<script
    src="https://cdn.jsdelivr.net/gh/AetherCodez/CacheBuster.js/cachebuster.min.js"
    autoclear>
</script>
```

CacheBuster.js will automatically perform the cache-busting reload when the page loads.

## How It Works

CacheBuster.js uses a simple two-step process:

1. **Unique URL Generation** - Generates a unique UUID and adds it as the `cachebuster` query parameter
2. **History-Free Reload** - Reloads the page using `location.replace()`
3. **Automatic Detection** - Detects the cache-busting parameter after the reload
4. **URL Cleanup** - Removes the parameter using `history.replaceState()` without another page reload

The result?

```text
https://example.com/
        ↓
https://example.com/?cachebuster=<unique-uuid>
        ↓ reload
https://example.com/
```

The browser's history remains clean throughout the entire process.

## Use Cases

### Force Fresh Website Updates

* Ensure users receive the newest version of your website
* Bust stale browser caches after deployments
* Force updated JavaScript and CSS files to load

### Developer Tools

* Development and testing workflows
* Deployment update systems
* Website administration panels
* Static website update tools

### When to Use CacheBuster.js

* You need to force a fresh page load
* You want to bypass stale browser caching
* You do not want to create a new browser history entry
* You want a tiny utility without a framework or backend

## Browser Support

* Chrome 92+
* Edge 92+
* Firefox 95+
* Safari 15.4+

Requires support for `crypto.randomUUID()`, `location.replace()`, and the History API.

## API

### `cachebuster.clearCache()`

Forces a fresh page load using a unique cache-busting UUID.

```js
cachebuster.clearCache();
```

The temporary `cachebuster` query parameter is automatically removed after the reload.

## Security

CacheBuster.js does not collect, transmit, or store any data.

The generated UUID is only used as a temporary cache-busting value in the page URL.

## Understanding the Code

Want to see how the magic works? Check out the **non-minified version**:

* **[cachebuster.js](https://raw.githubusercontent.com/AetherCodez/CacheBuster.js/main/cachebuster.js)** - Full source code
* **[cachebuster.min.js](https://raw.githubusercontent.com/AetherCodez/CacheBuster.js/main/cachebuster.min.js)** - Production-ready minified version

The source code is intentionally tiny and easy to understand.

## Development

```bash
git clone https://github.com/AetherCodez/CacheBuster.js.git
cd CacheBuster.js

# Source: cachebuster.js (readable)
# Production: cachebuster.min.js (minified)
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your improvement (`git commit -m 'Add improvement'`)
4. Push your branch (`git push origin feature/improvement`)
5. Open a Pull Request

## License

MIT License - see [LICENSE](https://github.com/AetherCodez/CacheBuster.js/blob/main/LICENSE) for details.

## Support

* **Issues**: [GitHub Issues](https://github.com/AetherCodez/CacheBuster.js/issues)
* **Discussions**: [GitHub Discussions](https://github.com/AetherCodez/CacheBuster.js/discussions)
* **Star this repo** if it helped you!

---

Force a fresh page load in seconds, without leaving a trace in browser history.
