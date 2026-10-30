# Mobile performance

The scene automatically selects a lighter renderer for touch devices, phones, iPads, small viewports, and low-memory/low-core devices. `?quality=mobile` forces this path for repeatable local QA. Production has no profiling or diagnostic controls.

## Rendering refactor, 2026-10-29

- Desktop now batches compatible scenery colours as well as identical materials, preserving separately moving and interactive parts.
- Surface foam uses one instanced draw per tank, retaining the same bubble count, positions and animation.
- Invisible click volumes have a raycast-only layer. Pointer tests skip hidden subtrees while preserving visible walls and existing interaction priorities.
- The two desktop shadow maps refresh on alternating updates instead of both rendering in the same recurring frame.
- Startup overlaps document loading with room construction. Both graphics modes compile only the opening view, avoiding whole-scene precompilation of unused shader variants.
- Inventory retains the previous room frame and renders only uncached model previews. Countdown and hazard logic still run; the room resumes rendering immediately when inventory closes.

Comparison with commit `60a58f3`, using a fixed 853 × 480 browser viewport and desktop DPR 1.5. Samples cover 360 opening frames, discarding the first 30 for CPU measurements. This is a local browser comparison, not a physical-phone or network-loading benchmark. Frame pacing, driver caches and animation timing introduce variability, so these numbers are observations rather than guaranteed FPS.

| Metric | Before | After |
| --- | ---: | ---: |
| Draw calls at sample end | 903 | 761 |
| GPU shader programs | 195 | 95 |
| Uploaded geometries | 1,028 | 882 |
| Mean frame CPU cost | 6.52 ms | 6.08 ms |
| 95th-percentile frame CPU cost | 8.8 ms | 7.4 ms |
| Scene construction and first frame | 2.225 s | 2.183 s |

Forced mobile mode at the same viewport used 585 draw calls versus 613 before. Its first frame measured about 1.0 s versus 1.1 s before. The inventory check reduced frame CPU work to about 0.95 ms after thumbnails were cached. Acid, fire and sprinkler transitions were also exercised in this mode. Physical iOS Safari and Android GPU validation remains outstanding.

The regression suite includes click-layer/occlusion behavior, hidden-branch pruning, staggered shadow initialization and clock resets, and instanced foam following the liquid level. Temporary instrumentation and test controls stay outside the repository and production package.

## Changes

- Mobile artwork canvases are drawn at a bounded size instead of allocating full-resolution desktop canvases. Label images are resized before GPU upload. Noise maps use 128 px; general artwork uses 256 px.
- Rigid hoist, wheel, bone, and scenery parts are batched within their independently moving parents. Mobile palette batching retains vertex colours and raycast/interaction boundaries. Small batches use 16-bit indices.
- Mobile uses diffuse materials, five practical/ambient lights, inexpensive floor-contact shadows, fewer water particles, and simpler curved geometry. Desktop retains PBR lighting and real-time shadows.
- The framebuffer is capped at 520,000 pixels, with a 30 FPS target and adaptive resolution. Hidden tabs stop rendering. Slow devices do not slow down animation time to 25 FPS.
- Mobile renders the opening view without compiling every hidden skeleton, trap, and effect first. Construction yields between room sections so progress can paint.
- WebGL context loss pauses rendering and restores the same game state at a lower resolution. It no longer automatically reloads. A failed restoration offers an explicit lightweight retry.
- Touch users can pan and pinch to zoom. Pointer cancellation releases held inputs.
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
