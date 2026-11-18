# Kitty Kingdom: interview talk track

**Role in the interview:** the main walkthrough. Angle: a constraint becomes a mechanic, then players' feedback and AI tooling turn a jam entry into a full roguelite.
**Proves:** creative direction to a brief · game vision and mechanics · rapid prototyping with game code *and* generative AI · playtesting and iteration · tuning an AI agent from a player-experience view.

Links to have open: the [case study](https://portfolio.geisert.me/project.html?p=kitty-kingdom), the [full game](https://dgeisert.itch.io/kittykingdom) (have a save on the map screen, and one mid-battle), the [jam entry](https://dgeisert.itch.io/kitty-kingdom).

---

## The 5-minute walkthrough

**0:00 · The hook (20 s)**
"Kitty Kingdom started with a jam rule that said Movement Input Only: no attack button, no menus. I turned that into the mechanic. Where you stand *is* the build decision. Players voted it the most fun game of the jam, and in the month after I rebuilt it into a roguelite with an 18-land campaign. I directed; Claude wrote the code and drew the art in code; Suno made the music."

**0:20 · The brief and the idea (40 s)**
- Jamference #1, the AI game jam I run. One week, theme Cat and Robot, 37 entries, rated by the other entrants.
- If moving is the only verb, what can moving mean? Position. Walk to a glowing spot and stand still to build. Stand on a numbered circle to pick an upgrade. Stand on the Night Bell to start the night.
- *Show:* the jam GIF.

**1:00 · What players told me (40 s)**
- Most Fun (4.43), #4 overall, #3 Use of AI.
- Three themes: too long (100 nights), standing on circles limited the choices, "I'd like it without the movement-only hindrance."
- Nobody complained about the loop. So: keep the loop, rebuild everything around it.

**1:40 · Process (1 min)**
- Research first: Claude wrote up ten competitors, and I took learnings and the best systems from each (Thronefall's walking builder, Loop Hero's adjacency, Against the Storm's draft). I also pulled out the complaints that recur across games and made them rules: show the threat before it arrives, short runs with a save every dawn, draft with control not luck, unlocks that widen choices.
- First campaign build five days after the jam closed, then near-daily updates for three weeks. Play in the evening, describe the change in the morning, play it by lunch.
- *Show:* the jam-vs-campaign image.

**2:40 · Three design decisions (1 min)**
1. **Keep the walk, drop the restriction.** The rule went, but you still walk to a hex to build. Click-to-build would have made it generic.
2. **The deck decides what you can build.** In the jam every building was there from day one, so the best plan was always the same. Now it's 80 cards, draft 1 of 3 each night, and the draft never offers something you can't use.
3. **Adjacency is the puzzle.** Farms per open field, Cottages per neighbouring Cottage, Enchanters give their element to neighbouring towers. Position is still the whole game.

**3:40 · AI: how it was used and where I stepped in (1 min)**
- Art direction by option sheets: ten icon concepts, three fixes for the unreadable Grime. *Show the Grime sheet.* (Good moment for Maggie.)
- A headless autoplayer plays every land, scores each night 0 to 1, and tunes waves to a curve I set. (Good moment for Ollie.)
- But the AI player isn't the player: it loves Archer Towers, so its curve is a baseline. The hero tool found Mittens' Meteor doing most of the damage; what each hero should *feel* like was my call. And cheap content means too much content: I cut 36 lands to 18 because half played the same.

**4:40 · Close (20 s)**
"The lesson I'd bring to your team: when AI makes building cheap, the bottleneck moves to judgement. My job became choosing between options, deciding what to cut, and knowing when the numbers were missing what players feel."

---

## Likely questions

### From Maggie (art, creative direction)

**How do you direct art when there's no artist and no image model?**
I ask for options, not answers. Claude renders the same thing several ways side by side (ten icon concepts, three map-edge treatments, three walkability fixes) and I pick, combine or send it back with a note on why. Because the art is code, a change of palette or proportion lands in minutes, so I can iterate on direction rather than on files.

**Why code-drawn art rather than generated images?**
Consistency and animation. 35-plus robots, 80 cards and dozens of buildings all need to read as one world, animate, recolour for elite robots and the Grime, and change when a design changes. Generated images would have drifted in style and been static. The trade-off: code art is simpler and flatter, so the style was chosen to suit it (bold outlines, flat colour, a "Cat Tower" storybook look).

**What was a visual decision driven by usability?**
The Grime. Blocked and walkable hexes looked the same under it, so players walked into walls. I had all three fixes drawn on the same map and compared them in play. A related terrain pass grouped scattered rocks and trees into outlined clusters, so you read the shape of an obstacle, not each hex. *(Before the interview: check which Grime option shipped and name it.)*

**How did you keep the tone consistent?**
A design review pass: the robots became household gadgets with personalities (Robo-Poodle, Toaster Bomb, Whistling Kettle), and terminology was fixed everywhere ("the Grime", "night" not "wave"). One voice across UI, barks and the intro.

**How would you work with a real art team?**
Same method, better inputs: option sheets as a shared language, a written direction (tone, palette, readability rules), and early greybox-to-art passes so artists see the gameplay constraints before they paint.

### From Ollie (mechanics, process, playtesting)

**Why drop the movement-only rule if it was the hook?**
Because players asked, and because what made it fun wasn't the restriction, it was physical placement. I kept the walk and removed the friction (standing on circles to choose).

**How did you know the autoplayer's difficulty was right?**
I didn't treat it as right. It's a consistent baseline that makes the curve smooth and catches spikes. Real players and telemetry correct it: the first five lands were hand-trimmed, and the long eastern lands are next to tune against real play.

**What did telemetry change?**
It showed players skipping the old welcome page. The tutorial became fully hands-on: a walking-only first step, then three guided builds on glowing hexes with tonight's robot path drawn on the map, spread over three days.

**What would you cut if you started again?**
I'd prototype the campaign at 10 to 12 lands from the start instead of 36. Variety per land mattered more than count.

**How do you avoid "solved" runs?**
The deck and draft (different buildings each run), layouts and portal counts unique to each land, portals that open in different combinations each night, and heroes with risky oaths that change how you play.

**How would you prototype with our team?**
Start from a constraint, get the loop playable in days, put it in front of players early, and build tools (autoplayers, option sheets, telemetry) so the team spends its time on judgement rather than production.

### Either

**What did the AI get wrong?**
Sameness (too many near-identical lands and upgrades), over-trusting its own balance numbers, and generic naming until directed. All judgement problems, not capability problems.

**How long did it take?**
One week for the jam. Then a first campaign build five days later, and about three weeks of near-daily updates to the current version.

**What's your role versus the AI's?**
I own the design, direction, playtesting and every cut. Claude produced the code and art to my brief; Suno produced the music.

---

## Numbers to have ready
- Jam: 37 entries, 349 ratings. Kitty Kingdom: Most Fun 4.43, #4 overall (4.262), #3 Use of AI.
- 18 lands (cut from 36), 6 to 30 nights each. 80 cards in 5 families. 35-plus robot types. 6 heroes. 48 Town buildings.
- Platforms: browser (desktop and phone in landscape), Windows, Mac, Steam Deck, full gamepad support.
