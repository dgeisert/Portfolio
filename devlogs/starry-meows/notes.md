# Starry Meows: interview talk track

**Angle (from CASE_STUDIES.md):** for Maggie. Art direction made of moving brush strokes; No Text means teaching through layout, camera and feedback. Proves aesthetic sensibility, craftsmanship, intuitive UX, creative to constraint, and directing generative AI.

Links to have open: [case study](https://portfolio.geisert.me/project.html?p=starry-meows) · [play](https://dgeisert.itch.io/starry-meows) · [playthrough](https://youtu.be/lqWL0GZpnzE) · [jam](https://itch.io/jam/jamference-ai-game-jam-hack-3)

---

## 5-minute walkthrough

**0:00 Hook (20 s).** "This is Starry Meows, which came 1st of 27 at Jamference #3 and won Use of AI and Polish. It's a 3D platformer where you play an orange cat inside The Starry Night. There are no textures or images. Everything is a simple shape covered in about 600,000 moving brush strokes. I directed it, and an AI agent wrote every line of code." *Show the cover GIF.*

**0:20 Brief (30 s).** Jamference #3, the jam I run. Theme Great Works of Art, restriction No Text. Two days, 34 prompts for the jam version. Me: design, art direction, playtesting, music. Claude in Cowork: code, rendering, sound, docs.

**0:50 Design goal (30 s).** Feel like you've stepped inside the painting, but stay readable enough to platform in. The swirl has to move. And with no text, the controls have to feel like Mario 64 in the first ten seconds.

**1:20 The look (60 s).** First prompt set the system: base mesh plus brush-stroke particles, and "iterate until you're satisfied it looks like The Starry Night". *Show first render vs. eight passes later.* Key idea: every stroke has a designed paint direction. Sky strokes follow a flow field with a vortex at every star; cypresses curl like flames; fur runs nose to tail. Cool blue shadows, never black. Then my critique: cat-sized cat, faster sky, everything else drifts at 25%, orange tabby so the cat pops against the blue.

**2:20 No Text (60 s).** Teach with the world: painted keyboard that only advances on the lit key, a guide arrow that faces the screen (the 3D one was unreadable), the camera turns to whatever you switched on, a sound for every interaction, colour-coded checkpoints, a settings menu that's just icons. *Show tutorial sequence.* Puzzles never make you restart.

**3:20 Feel and measurement (40 s).** The camera used to snap in behind walls. Now it searches 28 angles and only zooms slowly. Hidden-cat frames 5.5% → 0%. Firefly timer 80 → 24 → 28 s, checked by a bot speed-run. The pattern: I judge the feel, the agent measures it.

**3:55 Result (15 s).** 1st overall (4.229 from 222 ratings), won Use of AI and Polish, 2nd Theme, 3rd Fun. Fun was its lowest placing, so that's what the post-jam work went after first: mouse look, ledge assists, harder courses.

**4:10 After the jam (40 s).** Gallery overworld with 20 portal paintings. First pass: same layouts re-dressed. *Show before sheet.* My critique turned them into bespoke levels: lily lake, gravity-flipping Escher hall, a giant flying machine. The wave foam: three iterations, three options, I rejected all of them and asked for fractal triangles. *Show options sheet → final wave.* Rules: styles not artist names, original compositions, never copies.

**4:50 Close (10 s).** "What I'd bring: setting a clear creative bar, writing it down so it sticks, and critiquing a generative system until it gets there."

---

## Likely questions

### Maggie (art direction, craft, directing AI art)
- **How did you direct the AI's art?** Plain-language critique after playing each build, references for every style before iterating, side-by-side options, and a rules file (palette, scale, motion speeds) the agent reads every session so decisions stick.
- **What did you reject?** First-render "confetti" ground; sun-ray stars (too graphic); Voronoi cubism (read as crazy paving); four Great Wave foam looks; 19 worlds that were the same layout re-dressed.
- **How did you keep it readable?** Contour outlines, a cream belly and orange fur against the blues, a painted landing shadow under the cat, stroke density thinned with distance, strokes on collectibles kept distinct from lights (Renoir lanterns vs. the collectible).
- **Copyright and living artists?** No painting images used. The Starry Night is public domain. For artists in copyright: original compositions from recurring motifs, references linked not copied, and the game names styles and media, not people.
- **How would you work with an art team on this?** The rules file is effectively a style guide; the screenshot history and option sheets are review artefacts. I'd use the same loop: set the bar, generate options, critique, lock it in writing.

### Ollie (mechanics, loops, feel, process)
- **What's the core loop?** Explore, spot a star, read the course, climb. Seven short courses paced introduce, develop, twist, test, from an analysis of Mario 64 / Galaxy / 3D World / Wonder.
- **How do you teach without text?** Forced-sequence painted keyboard, focus camera on activations, sound for every interaction, guide arrow, colour-coded checkpoints.
- **Game feel decisions?** Floatier held jump; double/triple jump; dive in air and on ground; ledge teeter and jump magnet; camera that avoids walls instead of zooming.
- **How did you playtest?** Played every build; bots for reachability, camera, ledges and fall-through; jam entrants rate every game and I play each entry on video.
- **Why only 3rd for Fun when it won overall?** The art and polish carried it; the platforming had rough edges (camera, generous timer, walk-offs). The scores pointed straight at what to fix, and the post-jam updates went there first.
- **You run the jam: isn't winning your own jam awkward?** Every entry, mine included, is rated by the other entrants; I don't judge. (Be ready for this one.)
- **What would you change?** Playtest the gallery with new players; check the later rooms' longer courses are fun, not just long; worlds now have no enemies or hazards beyond falling.
- **How would you prototype with our team?** Same loop: a short written brief and rules file, an agent building fast, me playing and critiquing, tests for anything that has to stay true.

### Either
- **What did the AI do well / badly?** Well: rendering techniques, systems, fast variations, self-checking with screenshots and tests. Badly: judging feel and taste. It accepted its own looks too readily; that's where I stepped in.
- **How long did it take?** Jam version 2 days, 34 prompts. Polish a week later. Gallery expansion over two more days. 56 prompts total.

---

## Gaps to fill before the interview
- Player quotes from the Jamference #3 ratings/comments (optional, would strengthen "Player testing").
- Is the gallery build live on itch? The last itch zip in the project is from entry 043 (jam version + mouse look + ledge assists). If not, either upload it or say "in development".
- Music: confirm how it was made, so the "I made the music" line is accurate.
