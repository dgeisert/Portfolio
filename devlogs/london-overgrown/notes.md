# London Overgrown: interview talk track

**Use it for:** the "how far can one designer go with AI in a week" story. It's the strongest example of *directing* AI at scale (creative direction, art direction in words, QA), and of turning a brief and a restriction into systems. Pair it with Kitty Kingdom (constraint → mechanic) or Severed Heads (live AI agents) depending on who's asking.

**Proves:** creative direction to a brief · rapid prototyping with generative AI · game vision & mechanics · player-centric UX (first 5 minutes, transparent odds) · data-driven design decisions (the gap analysis) · aesthetic sensibility (art direction without a single painted asset).

---

## 5-minute walkthrough

**0:00 Hook (20 s).** "This is London Overgrown. It's the real Zone 1, every street from OpenStreetMap, 24 years after a solar flare, gone green. You're a bike courier carrying post between walled factions. I made it alone in five days for my own jam, Jamference #4, with Claude writing the code." *(Show the title tour: deer in Hyde Park.)*

**0:20 The brief (40 s).** Theme Solarpunk, restriction Hidden Lucky Cat. "I wanted a gritty but optimistic future, inspired by the Monk and Robot books, and a map where every inch of London feels alive and worth exploring. I love these museums and places in person and wanted that to show. Solarpunk is about an optimistic, eco-friendly future, so the story is everyone coming together: the factions live behind walls built out of fear, and you're the one person everyone trusts to cross."

**1:00 Process (75 s).** Early vs late screenshot. Day 1 the city pipeline (OSM → tiles, wave function collapse facades); evening, the world bible. Day 2 systems; day 3 interiors; day 4 side activities; day 5 feel and clarity. "Claude checkpointed before every risky change, 62 of them, so experiments were cheap."

**2:15 How I worked with AI (75 s).** Three roles for me:
1. **Director.** I set the premise, factions, wants, tone and rules, and played every build. Claude drafted code and dialogue against that.
2. **Art director in words.** No textures, no painted sprites. Every model is code. I turned street photos of ~40 neighbourhoods into style rules. That's directing a generative system through language, which is exactly the job.
3. **QA designer.** "When AI writes code this fast, checking is the bottleneck, so I had it build the checkers": a story bot that plays the whole story hundreds of times, reachability audits, mini-game bots.

**3:30 One decision in depth (60 s).** The gap analysis. "Playing, the map felt empty. Instead of guessing, I had Claude grid the map at 25 m: 70% of the land was over 500 m from anything to do. That became a ranked build list of real landmarks; the furthest gap went from 3.5 km to about 1.3 km." Then the lucky cats: restriction → system. 100 cats at real cat spots, each +1 Luck on every roll, so exploration feeds the social game.

**4:30 Results & learning (30 s).** Friends and the Jamference Discord played the earliest builds; ratings come in after 20 November *(update before the interview)*. "The tutorial is where I iterated hardest, because the AI can't see the game through a new player's eyes." "The lesson: with AI, scope stops being the limit. The hard questions become: is the first five minutes fun, and does it hang together? That's a UX problem, and it's where I spent my time."

---

## Likely questions

### Maggie (art & creative direction)
- **How do you art-direct when there are no art assets?** Through rules and references: per-neighbourhood style mixes from street photos, a fixed palette and pixel scale, then reviewing in game at the real camera. I pinned pixel size and colour grade so the look couldn't drift.
- **What did the AI get wrong visually?** Things defaulted to generic: samey characters (fixed on day 5 with more detailed faces), empty lots that read as holes (became overgrown rubble), landmarks that clipped or z-fought (audited by script). *Add one specific example you remember.*
- **How do you keep a consistent look across ~100 landmarks?** One shared building kit and conventions, one material/colour pipeline, and a preview page for each landmark at the game's pixel scale.
- **Where's the human taste?** The tone (comic quirk on top, human want underneath), the solarpunk palette, the 3:07 clocks as a visual through-line that only move in the best ending.
- **The logo?** Made with Gemini (Nano Banana): the only painted image in the project. Claude then made the animated itch cover and header by layering the logo over gameplay footage. Good example of picking the right tool per job: an image model for a single hero image, code for everything that has to stay consistent across a whole city.

### Ollie (mechanics, loop, process)
- **What's the core loop?** Pick up → ride across the real city → talk through a gate (Fate Reels check) → deliver → standing and story unlock new jobs. Lucky cats and bikes are the long-term progression.
- **How did you tune the chase?** Raider bikes are faster than cruising, slower than sprinting, so escape is skill and attention, not luck. The first chase can't be lost badly; ambushes spawn up the road you're riding so you see them coming.
- **How do you stop failure being frustrating?** Odds and costs shown before you commit; failure takes the long way round instead of closing a door; capture sends the parcel to the King's drawer, recoverable at the Nest.
- **Why no live LLM, given Severed Heads?** The story needs setups and payoffs planted hours apart and testable by a bot; and live AI only makes sense for a game that will be supported for a long time. Next step I'd try: free-text townsfolk grounded in the codex, with Severed Heads' guardrails.
- **How would you prototype with our team?** Same rhythm: world bible and player fantasy first, rough playable on day 1, checkpoint before risky changes, and build the verification tools alongside the game.
- **How big is it really?** ~38k lines JS, 3.7k lines tools, 12 factions, 26 named characters + 49 loners, 15 quest lines, ~45 bikes, 6 races, 100 lucky cats, ~2,000 map tiles.
- **What would you cut?** *(Answer honestly after watching the playthroughs. A good candidate: the long tutorial, 22 lessons.)*

### Either
- **Isn't this just the AI's game?** No: the AI could build anything I asked for, which made deciding what to ask for the whole job. Every system here exists because of a design decision (the restriction as a system, non-violent conflict, transparent odds), and the things I cut or pinned matter as much as what went in.
- **Harm and fairness?** The slingshot only stuns and costs you standing with people; kindness is rewarded; there are no villains to defeat, only people to bring together; the raiders are victims of a past injustice. Real-world data is credited (OSM, ODbL) and all characters at real places are invented.

---

## Before the interview
- [ ] Confirm the itch URL (used `https://dgeisert.itch.io/london-overgrown`) and the dev log URL.
- [ ] Add Jamference #4 ratings, rank and two player quotes to the case study, dev log and this file.
- [ ] Have the 90-second promo ready (`Claude outputs/LondonOvergrown_promo_90s.mp4` in the game repo); consider uploading to YouTube and embedding.
- [ ] Load the game in a tab, past the tutorial (`?notut`), next to a Magpie chase.
