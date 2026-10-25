# Figsaw

A full-window Three.js scene of Figsaw on his red tricycle inside an abandoned technology office. Damaged modern widescreen monitors, open computer cases, overturned chairs, loose circuit boards, paper, cables, and damaged ceiling panels fill the room. A shattered glass partition has a jagged opening, scattered shards, and more than 30 curled sticky notes. Two whiteboards show mobile wireframes and dashboard layouts. A detailed space-gray MacBook Pro sits open on a desk directly in front of the viewer. A neglected coffee station includes an espresso machine, cups, spills, refrigerator and water cooler. The foosball table sags sideways on a snapped support, with a splintered rail, bent rods, missing players, and the detached leg on the floor. The room is very dim, with weak fluorescent light, cool light through bent blinds, and a faint laptop-screen glow.

All models and wear textures are generated locally, with no remote asset dependencies. There are no interface overlays. The visual references are [dasy444’s abandoned office](https://sketchfab.com/3d-models/office-is-old-abandoned-free-3977a108b2304b85a698f3dda1777015) and the [Neo apartment recreation](https://www.reddit.com/r/ClaudeAI/comments/1x6x6x7/3d_recreation_of_neo_apartment_from_the_matrix/); their model and texture files are not bundled.

Figsaw retains his thick black outline, shallow marionette jaw, narrow rough lipstick, tight spirals on raised cheeks, small round black eyes with red irises, moss markings, and red bow tie. His eyes follow the camera and never blink. Mouth travel is limited to 0.12 local units with a recessed cavity. The rock sits directly on the seat without a body or limbs.

The tricycle wheels rotate at a shared rolling speed. Its front-wheel cranks carry pedal platforms that remain level. Automatic cycling respects reduced-motion preferences.

Drag or use arrow keys to look around, scroll to move closer, hold Space to open the mouth, tap Figsaw for a short mouth animation, and press R to reset. Camera movement stays within the office. Portrait framing uses a wider field of view.

Serve `dist` with any static HTTP server:

```sh
python3 -m http.server 5173 --directory dist --bind 127.0.0.1
```

Three.js 0.169.0 is bundled under `dist/vendor` with its MIT license. No build step, external fonts, or API key is required.
