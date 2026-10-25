# Mobile performance

The scene automatically selects a lighter renderer for touch devices, phones, iPads, small viewports, and low-memory/low-core devices. `?quality=mobile&profile=1` forces this path for repeatable local QA. The hidden `#performance-report` output reports read-only diagnostics; it does not send telemetry.

## Changes

- Mobile artwork canvases are drawn at a bounded size instead of allocating full-resolution desktop canvases. Label images are resized before GPU upload. Noise maps use 128 px; general artwork uses 256 px.
- Rigid hoist, wheel, bone, and scenery parts are batched within their independently moving parents. Mobile palette batching retains vertex colours and raycast/interaction boundaries. Small batches use 16-bit indices.
- Mobile uses diffuse materials, five practical/ambient lights, inexpensive floor-contact shadows, fewer water particles, and simpler curved geometry. Desktop retains PBR lighting and real-time shadows.
- The framebuffer is capped at 520,000 pixels, with a 30 FPS target and adaptive resolution. Hidden tabs stop rendering. Slow devices do not slow down animation time to 25 FPS.
- Mobile renders the opening view without compiling every hidden skeleton, trap, and effect first. Construction yields between room sections so progress can paint.
- WebGL context loss pauses rendering and restores the same game state at a lower resolution. It no longer automatically reloads. A failed restoration offers an explicit lightweight retry.
- Touch users can pinch to zoom and expand a small movement pad. Pointer cancellation releases held movement inputs.
- The bundled Gothic font is a Latin/punctuation subset of the existing licensed font (59,708 bytes rather than 101,632).

## Local comparison, 2026-10-25

Measured in the same desktop browser at 854 × 480, forcing the mobile quality path. These are local browser measurements, **not physical-phone benchmarks**. Startup includes scene construction, compilation and the first frame, but not network transfer. Texture memory is an estimate of texture pixel storage including mipmaps, not a whole-process memory measurement. Driver caching and lighting-animation timing can affect results.

| Metric | Previous source | Optimized source |
| --- | ---: | ---: |
| Texture storage estimate | 271 MB | 25.8 MB |
| First rendered frame | 13.5 s | 7.0–7.1 s |
| Render calls in default view | 1,331 | about 652 |
| Submitted triangles | 633,411 | about 381,648 |
| Sampled frame CPU cost | 7.4 ms | 3.4–3.6 ms |
| Active lights | 19 | 5 |

A simulated WebGL context loss/restoration preserved the running countdown without reloading. The key pickup, shackle detach, laptop opening, charger drawer, charger collection, power strip, and MacBook connection were then verified in the recovered scene. A 390 × 844 iframe exercises the actual portrait layout/device budget. Physical iOS Safari and Android GPU testing remains necessary for device-specific assurance.

Run `npm test` for the existing gameplay regression suite plus mobile budgets, palette batching, material fade/clipping references, context recovery, and touch navigation tests. Run `npm run build` after source edits. Temporary browser QA pages are not shipped.
