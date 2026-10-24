# Rocky

A self-contained, interactive WebGL rock puppet garden, built with Three.js. The character is modeled with procedural geometry: a stone shell, separate hinged jaw, recessed mouth, lipstick, raised spiral cheeks, black eyes with red irises, and moss patches.

Serve `dist` with any static HTTP server. For example:

```sh
python3 -m http.server 5173 --directory dist --bind 127.0.0.1
```

Drag to orbit, scroll to zoom, hold Space to move the mouth, or use the mouth slider. The interface also offers four expressions, day and dusk lighting, optional generated garden audio, a reset control, and PNG snapshots.

Three.js 0.169.0 is bundled locally under `dist/vendor` (MIT license). Google Fonts enhances typography when available; system sans-serif fonts are used otherwise. No build step, account, or API key is required.
