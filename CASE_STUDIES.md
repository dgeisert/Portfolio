# Game Case Studies & Dev Logs: Working Brief

The reference doc for writing detailed walkthroughs of David's games. We work on **one game per thread**. Each walkthrough is written once and published in three places, and one or two of them become the main walkthrough for the Google interview (details below).

---

## 1. What each game gets

For every game we produce:

1. **Portfolio case study.** Update the game's entry in `js/data.js`: the `body` HTML, plus `caseOrder`, `company`, `role`, `team`, `timeline` and `outcome` where they apply. It renders at `https://portfolio.geisert.me/project.html?p=<slug>`.
2. **itch.io dev log.** A post on the game's itch.io page. Saved as `devlogs/<slug>/devlog.html`.
3. **Interview talk track.** Short notes on how to walk through the game out loud in about 5 minutes, and the likely follow-up questions. Saved as `devlogs/<slug>/notes.md`.

The portfolio case study and the dev log tell the same story. The dev log can be longer and more behind-the-scenes; the case study is tighter and written for hiring managers.

---

## 2. Folder & image conventions

```
devlogs/
  <slug>/
    devlog.html      itch.io dev log body (paste into itch's HTML editor)
    notes.md         interview talk track + Q&A prep
    img/             all images/GIFs for this game's case study & dev log
```

- **One folder per game**, named with the same `slug` used in `js/data.js` (e.g. `kitty-kingdom`).
- **Images are hosted on the portfolio site** (GitHub Pages), so every image in the dev log uses an absolute URL:
  `https://portfolio.geisert.me/devlogs/<slug>/img/<file>`
- The portfolio case study (`data.js` body) can use the same URLs, or the relative path `devlogs/<slug>/img/<file>`.
- File names: lowercase, hyphenated, descriptive (`day-night-loop.gif`, `early-prototype-rectangles.png`). Keep GIFs under about 5 MB and PNG/JPG under 1 MB, and size them for an itch column about 900px wide.
- **Images only work after the repo is pushed** and Pages has deployed. Check each URL in a browser before posting the dev log.

Folders already created: `kitty-kingdom`, `severed-heads-united-hearts`, `hexagon-tactics`, `starry-meows`, `cursor-party`, `flicksync`, `jamference`, `london-overgrown`. Add more as needed.

### itch.io dev log format rules
- **Body HTML only.** No `<html>`, `<head>`, `<body>`, `<style>` or `<script>` tags. itch supplies the page and strips anything else.
- Stick to simple tags: `h2`, `h3`, `p`, `ul/ol/li`, `strong/em`, `a`, `img`, `blockquote`, `hr`, and `iframe` for YouTube.
- Don't rely on CSS classes (itch ignores them). Use `<img src="..." alt="...">` with a meaningful alt.
- Put a short summary paragraph at the top. itch shows it in the post preview.
- Link back to the portfolio case study, and to Jamference where relevant.

---

## 3. Case study structure (use for every game)

1. **Hook.** One or two sentences: what it is, and why it's interesting.
2. **The brief / constraint.** The jam theme, restriction, time box, team and role.
3. **Design goal.** The player experience we were aiming for.
4. **Process.** How it came together, step by step: first prototype, playtests, what changed and why. Show early and late builds side by side where possible.
5. **How AI was used.** Be specific:
   - *In the making:* which tools did code, art, audio and balancing, and what each was good or bad at.
   - *In the game:* any AI agents or generation in the gameplay, and how their behaviour was tuned.
   - *Where a human had to step in:* game feel, balance, the first 30 seconds, art direction.
6. **Key design decisions.** Two to four decisions, each with its rationale and the alternatives considered.
7. **Player testing & results.** Ratings, rankings, player quotes, metrics, and what feedback changed.
8. **What I'd do next / what I learned.** Include a "then vs. now" for older (2023) projects: what's different with today's models.
9. **Links.** Play, original jam entry, related projects.

---

## 4. The job & interview

### Role
**User Experience (UX) Designer at Google.** The role combines a senior UX Designer job description with an AI-games prototyping team (it reads like Google DeepMind or Labs work on AI-native games).

**Core UX expectations**
- Own outcomes for an emerging area with limited precedent. Define long-term UX and product strategy.
- Be the expert on UX principles, user-centred methods, design systems and research tools.
- Communicate and negotiate design intent with engineers, and write design specs and prototypes.
- Use and propose data and metrics to evaluate impact. Do competitive and industry analysis.
- Iterate based on UX testing and stakeholder input. Build consensus across teams.
- Drive a holistic design process, system or language. Guide other designers and run research.
- Explore innovative solutions that consider and mitigate unintentional harm.
- Minimum proficiencies: data analysis and synthesis, product design, interactive technology, UX research, product development lifecycle, aesthetic sensibility, user behaviour, presentations, storytelling, systems thinking, craftsmanship.

**Key responsibilities (games/AI part, weight these most)**
- **Inspire creative direction:** strong creative work that meets the constraints of a brief.
- **Rapid gameplay prototyping:** build, playtest and iterate on proofs-of-concept using game engines *and* generative AI.
- **Collaborative problem solving** with researchers, engineers and designers.
- **Creative facilitation:** lead workshops and brainstorms to find new uses for AI across genres, from sandbox simulation to emergent narrative.
- **Drive game vision & mechanics:** turn high-level AI capabilities into elegant mechanics, intuitive player loops and compelling systems.
- **AI behaviour tuning:** analyse, critique and direct AI agents and generative models from a game-balance and player-experience perspective.

**They look for**
- A proven game design track record: shipped titles, concept → iteration → player testing.
- A player-centric mindset: UX, game feel, intuitive controls, player agency.
- Creative thinking and willingness to experiment.
- Hands-on prototyping in Unity, Unreal, Godot or scripting environments.

### Interviewers
- **Maggie Tran, Senior Art Manager.** Expect focus on creative direction, aesthetic sensibility, visual craft, how you direct AI-generated art, and working with art teams.
- **Ollie Purkiss, Designer.** Expect focus on mechanics, loops, game feel, process, playtesting, and how you'd prototype with their team.

### Interview note (from the recruiter)
The candidate should be prepared to:
- **Walk both interviewers through a specific project** that best showcases their skills or one they are particularly proud of.
- **Clearly articulate their creative process and overall workflow, including how they integrated AI tools into their designs.**
- **Answer specific, on-the-spot questions about their portfolio and CV** throughout the session.

So every case study must make the **process** and the **AI workflow** explicit. That's what they're grading.

---

## 5. Game priority & interview angle

| Priority | Game | Slug | Interview angle | Job description items it proves |
|---|---|---|---|---|
| **Main walkthrough** | Kitty Kingdom: And the Robot Menace | `kitty-kingdom` | Constraint → mechanic ("Movement Input Only" makes position the build decision). Rated Most Fun by players. Jam entry → roguelite with a campaign. | Creative direction to a brief; game vision & mechanics; rapid prototyping; player testing; iteration |
| Backup / AI depth | Severed Heads, United Hearts | `severed-heads-united-hearts` | LLM courtiers as the core mechanic. Tuning rules: goals not just personalities, hard but beatable, guardrails. | **AI behaviour tuning**; emergent narrative; harm mitigation (guardrails) |
| Backup / gen content | Hexagon Tactics: The Expanding Arena | `hexagon-tactics` | Real-time generated units and art (7th, Hugging Face jam). Designing around generation latency. | Translating AI capability into mechanics; UX for latency; Unity |
| For Maggie | Starry Meows | `starry-meows` | **1st overall at Jamference #3 (of 27), won Use of AI and Polish.** Van Gogh art direction made of moving brush strokes. No Text means teaching through layout, camera and feedback. | Aesthetic sensibility; craftsmanship; intuitive UX; creative to constraint |
| Speed | Cursor Party | `cursor-party` | 2.5-hour hackathon, 4th place. Had the AI build a sprite editor, then use it to make the sprites. | Rapid prototyping with generative AI; experimentation |
| Scale / AI direction | London Overgrown: The Pigeon Post | `london-overgrown` | Jamference #4 (Solarpunk / Hidden Lucky Cat). Real Zone 1 from OpenStreetMap, built solo in 5 days directing Claude. Art directed in words (no textures), AI-built QA bots, gap analysis that drove the landmark build list, 100 lucky cats as a Luck system. | Creative direction to a brief; rapid prototyping with generative AI; data-driven design; game vision & mechanics |
| Origin story | Flicksync | `flicksync` | 2018 voice-driven AI cast in VR. Double award winner, recently revived. | Long track record in AI × play; interactive tech |

**Have ready but not as a full walkthrough:** Jamference (creative facilitation, rubric design, playtesting at scale), Ninja Legends ($1M+ shipped title on Quest, Rift, Steam and PSVR), Meta object locking and Orion messaging (UX research, latency design, specs for engineering).

### Gaps to close while writing
- ~~**Kitty Kingdom's AI workflow isn't documented yet.**~~ Done: Claude for code and code-drawn art, Suno for music, autoplayer for balance (see `devlogs/kitty-kingdom/`).
- ~~**Then vs. now** for the 2023 games (Severed Heads, Hexagon Tactics).~~ Done for both.
- **Evidence:** early-prototype screenshots, playtest feedback, ratings and rankings, before/after GIFs.
- **itch page visibility.** Make sure Kitty Kingdom, Starry Meows, Downriver and Tea Party Defense are public and pinned near the top of dgeisert.itch.io.
- **Link the dev logs from the portfolio and the portfolio from the dev logs**, so interviewers can move between them easily.

---

## 6. Status

| Game | Case study (`data.js`) | Dev log HTML | Images | Talk track | Posted to itch |
|---|---|---|---|---|---|
| Kitty Kingdom | ☑ | ☑ | ☑ | ☑ | ☐ |
| Severed Heads, United Hearts | ☑ | ☑ | ☑ | ☐ | ☑ |
| Hexagon Tactics | ☑ | ☑ | ☑ | ☐ | ☑ |
| Starry Meows | ☑ | ☑ | ☑ | ☑ | ☐ |
| Cursor Party | ☐ | ☐ | ☐ | ☐ | ☐ |
| Flicksync | ☑ | ☐ | ☑ | ☐ | ☐ |
| London Overgrown | ☑ (ratings TBC) | ☑ | ☑ | ☑ | ☐ |
| Jamference | ☑ | ☑ | ☑ | ☑ | ☐ |

## 7. Per-thread workflow
1. David shares the project's material: builds, screenshots, notes, jam pages, feedback.
2. Draft the case study using the structure in section 3, tailored to the interview angle in section 5.
3. Pick the images and save them to `devlogs/<slug>/img/`.
4. Write `devlog.html` (body only, absolute image URLs) and update the game's `body` in `js/data.js`.
5. Write `notes.md` with a 5-minute talk track and likely questions from Maggie and Ollie.
6. Push, check the image URLs work, then post the dev log on itch.io.
7. Update the status table above.
