# Kingmaker — The Duel demo

A local singleplayer chess duel: you play Elliot Castle against Count Verness / Stockfish.
Press a key or tap after the studio Ident, choose Play the Duel!, select difficulty and start.
Default time control is Untimed (∞); optional clocks and player color are under Advanced.
Options contain independent music/SFX controls, PGN/FEN/replay tools and Open Source Licenses.
Escape skips cinematics; click/touch or Enter/Space/Escape skips the Ident.

This directory is a compiled static runtime, not the private application source repository.
Production JavaScript is minified, not encrypted or protected against reverse engineering.
No accounts, backend, multiplayer or external CDN are required. Online play is planned.
Serve at `/kingmaker-demo/`, including the Worker and WASM with correct MIME types.
GitHub Pages may serve this folder from the public repository's main branch/root only after
separate approval by the project owner. Preparation is not publication.

See THIRD_PARTY_NOTICES.md, engine/COPYING.txt and engine/SOURCE.txt for full notices,
GPLv3 and exact corresponding-source/network/build directions for Stockfish.js 19.0.1.
Stockfish is free software under GPLv3; proprietary project assets/application rights are separate.
The project owner must resolve the documented GPL work-separation question before release.

RELEASE_MANIFEST.json inventories the runtime and identifies its immutable build revision.
The prepared archive's SHA-256 is recorded in the separately approved private release envelope,
not inside the archive itself (which would create a circular hash).
Whole music pieces are not certified seamless loops. Offline-after-first-visit/PWA is not promised.
