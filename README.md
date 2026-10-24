# Figsaw

A full-window Three.js viewer showing only the rock and its red tricycle against a plain background. There is no page interface, logo, text overlay, scenery, platform, foliage, particle effect, or audio.

The rock has a thick black outline, a shallow marionette jaw with gently curved seams, narrow rough lipstick, tightly wound spirals on subtly raised cheeks, small round black eyes with red irises, moss markings, and a red bow tie. Its eyes follow the camera and never blink. Mouth travel is limited to 0.12 scene units, opening into a recessed cavity.

The tricycle has raised silver handlebars, burgundy grips, an arched red frame, one large front wheel and two small rear wheels, thin steel spokes, and a black seat. The rock sits directly on the seat without a body or limbs. Wheels rotate at a shared rolling speed, and the front-wheel cranks carry pedal platforms that remain level. Automatic cycling respects reduced-motion preferences.

Drag or use arrow keys to orbit, scroll to zoom, hold Space to open the mouth, tap the rock for a short mouth animation, and press R to reset the default side view. Camera framing adapts to the viewport.

Serve `dist` with any static HTTP server:

```sh
python3 -m http.server 5173 --directory dist --bind 127.0.0.1
```

Three.js 0.169.0 is bundled under `dist/vendor` with its MIT license. No build step, external fonts, or API key is required.
