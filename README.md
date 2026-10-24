# Rocky

A self-contained, interactive WebGL rock puppet garden, built with Three.js. The character has a rounded procedural stone shell with a thick black silhouette, a shallow rounded jaw with vertical puppet motion, gently curved unstitched mouth seams, flat hand-drawn lipstick and spiral cheeks, black eyes with red irises, moss patches, and a red bow tie. The lipstick is a grainy pigment texture applied directly to the stone, with no raised makeup geometry. The eyes never blink or close.

A short lipstick stroke caps the narrow movable jaw, while a wide black mouth line extends across the stone on both sides. The mouth opens into a recessed dark cavity, with vertical travel limited to 0.12 scene units (one quarter of its original range) across the slider, keyboard, and reactions.

The default camera matches the elevated side view of the reference. The wide mouth line curls around the lower face, while the side seams descend vertically beneath the lip corners. A separate green moss spot sits near the lower center. The low-set, always-open eyes track the camera while orbiting.

Rocky sits directly on a vintage red tricycle's black saddle, with no body or limbs. The tricycle follows the supplied front and side references: one large front wheel, two much smaller rear wheels, slender steel spokes and black tires, a broad arched red frame, and raised silver handlebars with burgundy grips swept back toward the saddle. It also has pedals, a bell, and a narrow rear standing platform. All wheels turn at a shared rolling speed; the pedals rotate with the front wheel while their platforms stay level. Automatic cycling respects reduced-motion preferences. The orbit view frames the full rider and tricycle.

Serve `dist` with any static HTTP server. For example:

```sh
python3 -m http.server 5173 --directory dist --bind 127.0.0.1
```

Drag to orbit, scroll to zoom, hold Space to move the mouth, or use the mouth slider. The interface also offers four expressions, day and dusk lighting, optional generated garden audio, a reset control, and PNG snapshots.

Three.js 0.169.0 is bundled locally under `dist/vendor` (MIT license). Google Fonts enhances typography when available; system sans-serif fonts are used otherwise. No build step, account, or API key is required.
