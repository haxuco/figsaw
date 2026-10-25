# Figsaw

A full-window Three.js scene of Figsaw on his red tricycle inside an abandoned technology office. Damaged modern widescreen monitors, open computer cases, broken Aeron-style mesh chairs, loose circuit boards, paper, cables, and damaged ceiling panels fill the room. A freestanding planning whiteboard holds weathered sticky notes with missing patches, adhesive ghosts, and partly erased interface sketches, with markers and an eraser on its tray. Two wall whiteboards show dirty, partly erased mobile wireframes and dashboard layouts. A detailed space-gray MacBook Pro starts closed directly on the floor in front of the viewer; its charging cable lies along the floor. A neglected coffee station includes an espresso machine, cups, spills, refrigerator and water cooler. The foosball table sags sideways on a snapped support, with a splintered rail, bent rods, missing players, and the detached leg on the floor. The room is very dim, with weak fluorescent light and cool light through bent blinds. Clicking or tapping the MacBook lifts its lid smoothly and wakes the display with a faint screen glow; Enter opens it when the scene has keyboard focus. Dragging over the laptop only looks around. The lid stays open until the page reloads, and reduced-motion preferences skip the lid animation.

All models and wear textures are generated locally, with no remote asset dependencies. A small Copy view button in the top-right exports the current camera as a paste-ready prompt. The visual references are [dasy444’s abandoned office](https://sketchfab.com/3d-models/office-is-old-abandoned-free-3977a108b2304b85a698f3dda1777015) and the [Neo apartment recreation](https://www.reddit.com/r/ClaudeAI/comments/1x6x6x7/3d_recreation_of_neo_apartment_from_the_matrix/); their model and texture files are not bundled. The chairs use [wearexyz’s Aeron model](https://sketchfab.com/3d-models/herman-miller-aeron-chair-low-poly-transparency-b28343475d154cb8ba40066b83e28f7f) as a shape reference; the chair geometry and woven textures are original procedural assets. Five damaged chairs have transparent torn mesh, curved frames, lumbar supports, adjustable arms and caster bases, with snapped arms, a loose backrest and a detached base scattered across the floor.

Figsaw retains his thick black outline, shallow marionette jaw, narrow rough lipstick, tight spirals on raised cheeks, small round black eyes with red irises, moss markings, and red bow tie. His eyes follow the camera and never blink. Mouth travel is limited to 0.12 local units with a recessed cavity. The rock sits directly on the seat without a body or limbs.

Figsaw and his tricycle are half their previous size. After a short pause, he rides from the shadowed coffee corner along a curved path to the aisle beside the laptop, then stops. Wheel and pedal rotation follow the distance traveled; pedal platforms remain level. Reduced-motion preferences show the final resting position immediately.

Use WASD to move relative to the viewing direction, E to raise the camera, and Q to lower it. Drag or use arrow keys to look around freely; scroll to zoom. The default eye position is 0.26 units above the floor, behind the MacBook. Movement stays inside the room and clears on focus loss. Press R to restore the default position, direction and zoom, and replay the entrance. Hold Space to open the mouth or tap Figsaw for a short mouth animation.

Copy view exports the rendered camera position, look-at point, and vertical field of view as JSON prefaced with a request to set that view as the default. The copied values include zoom and portrait framing. Paste the text into the chat to request a new default. If clipboard access is unavailable, a small selectable text panel provides the same prompt. Portrait framing keeps both the MacBook and Figsaw visible.

Serve `dist` with any static HTTP server:

```sh
python3 -m http.server 5173 --directory dist --bind 127.0.0.1
```

Three.js 0.169.0 is bundled under `dist/vendor` with its MIT license. No build step, external fonts, or API key is required.
