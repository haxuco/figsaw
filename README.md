# Rocky

A self-contained, interactive WebGL rock puppet garden, built with Three.js. The character has a rounded procedural stone shell with a thick black silhouette, a large projecting jaw with vertical puppet motion, curved unstitched mouth seams, flat hand-drawn lipstick and spiral cheeks, fixed black eyes with red irises, moss patches, and a red bow tie. The initial camera shows a slight side view with the lower jaw projecting to the left. The lipstick is a grainy pigment texture applied directly to the stone, with no raised makeup geometry. The eyes never blink or close.

Raised white brow ridges sit above the closely spaced eyes. A short lipstick stroke caps the narrow movable jaw, while a wide black mouth line extends across the stone on both sides. The mouth opens into a recessed dark cavity, with vertical travel limited to 0.12 scene units (one quarter of its original range) across the slider, keyboard, and reactions.

Serve `dist` with any static HTTP server. For example:

```sh
python3 -m http.server 5173 --directory dist --bind 127.0.0.1
```

Drag to orbit, scroll to zoom, hold Space to move the mouth, or use the mouth slider. The interface also offers four expressions, day and dusk lighting, optional generated garden audio, a reset control, and PNG snapshots.

Three.js 0.169.0 is bundled locally under `dist/vendor` (MIT license). Google Fonts enhances typography when available; system sans-serif fonts are used otherwise. No build step, account, or API key is required.
