# Mobile performance

The scene automatically selects a lighter renderer for touch devices, phones, iPads, small viewports, and low-memory/low-core devices. `?quality=mobile` forces this path for repeatable local QA. Production has no profiling or diagnostic controls.

## Startup and transition work, 2026-10-30

- Wall posters and notes use committed WebP previews, with separate detail images for inspection. Initial static-wall artwork is 76,682 bytes on mobile and 253,566 bytes on desktop, down from 1,148,392 bytes of SVG source (93% and 78% smaller respectively, before HTTP compression). The randomized org chart retains its editable SVG and correct per-game roles. Its fetch now overlaps the other artwork requests.
- Visible room materials compile asynchronously during loading. Texture uploads run in small batches while those programs link, instead of all landing in the first rendered frame. Hidden branches and raycast-only volumes are excluded; offscreen room surfaces are prepared for panning.
- Common acid, fire, sprinkler, mobile and laptop materials prepare in small background batches after first paint, keeping their first-use compilation out of the action. Dynamic stream geometry still initializes when a valve opens, but it borrows a prepared material. Newly created valve and breach jets now retain the mobile material simplification rather than silently reverting to the original physical material.
- Inventory thumbnails use async GPU readback with one job in flight. Preview materials and completed thumbnails are reused. Renderer state is restored before every async wait, and stale jobs cannot replace new inventory cards.
- Detail textures use a bounded cache: one poster on mobile, two on desktop. Reopening a cached poster avoids decoding and uploading it again; leaving inspection restores its ordinary material. Role changes invalidate the org chart by source URL.
- Poster and mobile inspection share one light. Its intensity/position changes without adding or removing a light from the shader configuration.

Compared with `b405d69` in the local in-app browser, using the same viewport and explicit desktop/mobile graphics settings. The transition samples below cover five seconds per view. Scene startup begins at module initialization and excludes network transfer. CPU measurements cover the animation loop; async work can run between frames. Driver caches, thermals, randomized roles and animation timing affect individual runs, so these are observations, not device-wide FPS guarantees.

| Metric | Before | After |
| --- | ---: | ---: |
| Desktop scene startup | 1.82 s | 1.52 s |
| Mobile scene startup | 1.02 s | 0.83 s |
| Desktop first-frame CPU stall | 776 ms | 205 ms |
| Mobile first-frame CPU stall | 277 ms | 72 ms |
| Desktop first inventory view, worst animation-loop CPU work | 44.6 ms | 3.9 ms |
| Mobile first inventory view, worst animation-loop CPU work | 28.7 ms | 3.3 ms |
| Desktop room, worst frame interval | 61.2 ms | 24.1 ms |

The desktop room stayed near 59 FPS and mobile near its 30 FPS cap in this check. Cached inventory views and returning to the room were checked as well. A separate 853 × 480 smoke run covered laptop opening, mobile inspection/repair, fire, sprinklers, acid and reset. The final mobile run stayed at 29–30 FPS through those phases with no runtime errors; its shader-program count stayed constant across all of them. An extended desktop browser session showed intermittent GPU stalls; a fresh-tab repeat recovered, so these tests do not establish lag-free behavior on every device or session. These are desktop-browser mobile settings, not a physical iOS/Android device benchmark. Physical device and throttled-network testing remain separate validation work.

Regressions cover asynchronous preview cancellation, rapid close/reopen, GPU readback failure, renderer-state restoration, limited poster caching, stale image decodes, randomized chart refresh, stable inspection lighting, warmup visibility and bounded background batches and mobile materials on dynamic streams. Profiling harnesses are temporary and excluded from production.

To regenerate wall previews after changing authored SVG artwork, install the existing Payload dependencies and run `node scripts/rasterize-wall-previews.mjs` from the repository root. Commit the generated assets; ordinary builds do not require image processing.

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
