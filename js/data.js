/* All portfolio content lives here. Edit this file to add or change projects.
   kind: "game" | "pro" | "product" | "film"
   image: local path (assets/img/...) or remote URL. "fallback" is used if the image fails to load.
   body: optional HTML for the project page. links: buttons shown on cards and project pages. */

const LOVABLE = "https://dgeisert-portfolio.lovable.app/assets/";
const ITCH = "https://img.itch.zone/";

window.PORTFOLIO = {
  recognition: [
    { title: "Digital Champion of the Year 2026", by: "Camden Digital Inclusion", note: "For my AI talks to the Camden community." },
    { title: "Winner, Multimodal AI", by: "AI Tinkerers Demopalooza · MongoDB.local London", note: "Made a music video live on stage in a 5-minute speed run.", link: "https://www.linkedin.com/posts/dgeisert_story-machine-activity-7381691095761489920-B397" },
    { title: "4th place", by: "Cursor 2.5-hour Hackathon · London 2025", note: "Cursor Party, a party-based survivor-like.", link: "project.html?p=cursor-party" },
    { title: "Most Fun entry", by: "Jamference #1 · 2026", note: "Kitty Kingdom, rated the most fun game of the jam.", link: "project.html?p=kitty-kingdom" },
    { title: "Double winner", by: "Creating Reality Hackathon · USC 2018", note: "Flicksync: ML & AI and Innovative Entertainment.", link: "project.html?p=flicksync" },
    { title: "7th place", by: "Hugging Face Open Source AI Game Jam 2023", note: "Hexagon Tactics, with AI-generated units in real time.", link: "project.html?p=hexagon-tactics" },
  ],

  projects: [
    /* ---------------- GAMES ---------------- */
    {
      slug: "cursor-party", kind: "game", featured: true, year: "2025",
      title: "Cursor Party", award: "4th · Cursor Hackathon London",
      blurb: "A party-based survivor-like made in 2.5 hours, with 20 heroes, levelling, and enemies that keep escalating.",
      tags: ["Survivor-like", "Party builder", "AI-assisted", "Browser"],
      image: ITCH + "aW1nLzIzMTIzMzcxLnBuZw==/original/%2FBeFFT.png",
      links: [{ label: "Play on itch.io", url: "https://dgeisert.itch.io/cursor-party" }],
      body: `
        <p class="lede">I came 4th at the 2.5-hour Cursor hackathon in London. It had been a while since my last game jam, so I used it to find out how good Cursor was at making a game against the clock.</p>
        <h3>Design goal</h3>
        <p>I'd wanted to make a <b>party-based survivor-like</b> for a while: the auto-battling, ever-escalating pressure of the genre, but with the strategy coming from <i>who you recruit</i> rather than which weapon you pick.</p>
        <h3>How it came together</h3>
        <ol>
          <li><b>Rectangles first.</b> I got the core loop working with plain shapes so movement, spawning and combat could be tuned before any art existed.</li>
          <li><b>A tool to build the art.</b> I had Cursor build a sprite editor. Drawing in it by hand was too slow, so I had Cursor <i>use</i> the editor to make the sprites, and it did a really good job.</li>
          <li><b>Systems.</b> I added the party system and levelling: <b>20 heroes</b> in four archetypes (healers, ranged, melee and AOE damage), so every run is about putting together a party that works.</li>
          <li><b>Escalation.</b> Enemies get more complex over time and start spawning <b>elite, fast and tough</b> variants, which forces you to rebalance the party mid-run.</li>
        </ol>
        <h3>Outcome</h3>
        <p>It placed 4th and I published it to itch.io the same day. It isn't perfectly balanced, but it's fun, which is the part a 2.5-hour prototype has to prove.</p>`
    },
    {
      slug: "starry-meows", kind: "game", featured: true, year: "2026",
      title: "Starry Meows", award: "Jamference #3 · No Text",
      blurb: "A 3D platformer painted in the style of Van Gogh's The Starry Night, built from thousands of moving brush strokes.",
      tags: ["3D platformer", "Art direction", "AI-assisted", "No text"],
      image: ITCH + "aW1nLzMxNjM0NjMzLmdpZg==/original/jxA%2FfC.gif",
      links: [{ label: "Play on itch.io", url: "https://dgeisert.itch.io/starry-meows" }],
      body: `
        <p class="lede">A little orange cat, a sleepy village, and a sky that won't sit still. Made for Jamference #3, where the theme was <b>Great Works of Art</b> and the restriction was <b>No Text</b>.</p>
        <h3>The idea</h3>
        <p>What if you could run around <i>inside</i> The Starry Night? Every rooftop, cypress, cobblestone and cloud is made of moving brush strokes. The sky swirls and the stars spin, and the 19 stars you're there to catch are hidden up in it.</p>
        <h3>Designing without words</h3>
        <p>Under the No Text rule, the game can't explain anything in writing. Run, jump, float and belly-dive are all taught through the layout of the level, the camera and feedback, so players learn by playing.</p>`
    },
    {
      slug: "kitty-kingdom", kind: "game", featured: true, year: "2026",
      title: "Kitty Kingdom: And the Robot Menace", award: "Most Fun · Jamference #1",
      blurb: "A roguelite hex tower-defence game: build by day, fight off an army of cleaning robots by night.",
      tags: ["Tower defence", "Roguelite", "Deck-building", "Hex"],
      image: ITCH + "aW1hZ2UvNTE3NDM1NC8zMTY2ODIzNS5naWY=/original/8xh44S.gif",
      links: [
        { label: "Play the full version", url: "https://dgeisert.itch.io/kittykingdom" },
        { label: "Original jam entry", url: "https://dgeisert.itch.io/kitty-kingdom" }
      ],
      body: `
        <p class="lede">The Purrlands were peaceful. Then the Cleaning Crew rolled in: an army of vacuums, mops and sweeper robots that comes through humming portals and smothers the land in grime. Only the cats stand in their way.</p>
        <h3>From jam entry to roguelite</h3>
        <p>The first version was my entry to Jamference #1 (theme <b>Cat and Robot</b>, restriction <b>Movement Input Only</b>), and players rated it the <b>most fun game</b> of the jam. I've kept building it since, into a roguelite with deck-building and a campaign across the map.</p>
        <h3>The loop</h3>
        <ul>
          <li><b>Build by day.</b> Walk your hero across the hex map and build wherever you stand: archer-cat towers, catnip farms, cat cafés, fishing docks.</li>
          <li><b>Fight by night.</b> The robots come back after dark, with a boss wave every tenth night.</li>
          <li><b>Win back the Purrlands.</b> Clear one land at a time, with new cards and upgrades carrying from run to run.</li>
        </ul>
        <h3>Why it works</h3>
        <p>Because you can only move, <i>where you stand</i> becomes the build decision. That makes positioning the whole game, and it keeps the controls simple enough for anyone to pick up.</p>`
    },
    {
      slug: "flicksync", kind: "game", featured: true, year: "2018",
      title: "Flicksync", award: "Double winner · Creating Reality 2018",
      blurb: "Act out a scene from Alice in Wonderland in VR. Speech recognition scores your lines, and the AI cast reacts.",
      tags: ["VR", "Voice input", "AI characters", "Hackathon"],
      image: "", art: "flicksync",
      links: [
        { label: "VR APK", url: "https://drive.google.com/file/d/1NX1JHu7Q01gWpvYEJ3087m2XKQgpWvPO/view?usp=drive_link" },
        { label: "Mobile APK (Alice only)", url: "https://drive.google.com/file/d/1obqwQojm5GuJUhX7oqejkHNHkSSfQH6h/view?usp=drive_link" }
      ],
      body: `
        <p class="lede">My first AI-in-VR project, and the one that set the direction for my work right up to today.</p>
        <p>In March 2018 I went to the USC campus for the <b>Creating Realities hackathon</b>, met an extremely talented team, and together we turned the <i>Alice's Adventures in Wonderland</i> tea party scene into a <b>flicksync</b>.</p>
        <h3>What's a flicksync?</h3>
        <p>It comes from <i>Ready Player One</i>: you act out a part in a scene from a well-known film or book and get scored on how well you perform it. As you finish each line, the other characters react and carry on with the script.</p>
        <h3>Design</h3>
        <ul>
          <li><b>Your voice is the controller.</b> Speech recognition matches what you say against the script, so the main mechanic is performing, not pressing buttons.</li>
          <li><b>The cast reacts.</b> The other characters respond when you finish a line, which makes acting feel like playing with someone.</li>
        </ul>
        <h3>Result</h3>
        <p>Flicksync won <b>Machine Learning &amp; AI</b> and <b>Innovative Entertainment</b>. I recently went back and revived it, so you can try it again on mobile or VR.</p>`
    },
    {
      slug: "severed-heads-united-hearts", kind: "game", featured: true, year: "2024",
      title: "Severed Heads, United Hearts", award: "LLM agents as the mechanic",
      blurb: "Win over a royal court of AI agents by working out what each one wants, or lose your head to your rival Henry.",
      tags: ["LLM agents", "Social deduction", "Dialogue"],
      image: "https://geisert.me/wp-content/uploads/2024/02/fnb5l_.png",
      links: [{ label: "Play on itch.io", url: "https://dgeisert.itch.io/severed-heads-united-hearts" }],
      body: `
        <p class="lede">My first experiment with putting LLMs at the centre of the gameplay (2024).</p>
        <p>You chat freely with AI courtiers and try to persuade them to vote for your side over your rival, Henry. Each one has their own motives. You have to work out what they want and promise it to them, without overcommitting.</p>
        <h3>What I learned about tuning AI behaviour</h3>
        <ul>
          <li><b>Agents need goals, not just personalities.</b> Characters with clear wants are readable, and the player can reason about them.</li>
          <li><b>Make them hard to win, but beatable.</b> If agents agree too easily the game has no tension, and if they're too stubborn it's just frustrating. That balance is the core design work.</li>
          <li><b>Free text needs guardrails.</b> Players will try to talk their way past the rules, so the agents need firm limits to stay fair.</li>
        </ul>`
    },
    {
      slug: "hexagon-tactics", kind: "game", featured: true, year: "2023",
      title: "Hexagon Tactics: The Expanding Arena", award: "7th · Hugging Face AI Game Jam",
      blurb: "A tactics roguelite where AI generates characters, enemies, names, descriptions and art in real time.",
      tags: ["Tactics", "Roguelite", "Generative content", "Unity"],
      image: ITCH + "aW1hZ2UvMjE1NDY1Ni8xMjcwMjM4NS5wbmc=/original/jwbdMH.png",
      links: [{ label: "Play on itch.io", url: "https://dgeisert.itch.io/hextactics" }],
      body: `
        <p class="lede">You're dropped into an arena battle. Beat your opponents, upgrade your deck, and the arena <b>expands</b>, bringing more and harder enemies.</p>
        <p>Image generation, LLMs and background removal were wired into the game to produce a different set of characters and sprites for each player. It placed <b>7th</b> in Hugging Face's Open Source AI Game Jam.</p>
        <h3>Designing around generation latency</h3>
        <p>Generation can't always keep up with play, so new cards could appear before their art and text had finished. I designed the deck so content could fill in as you played, rather than making players wait at a loading screen.</p>
        <p class="note">The live generation servers are now off. The game uses a set of pre-generated assets made with the same pipeline.</p>`
    },
    {
      slug: "downriver", kind: "game", year: "2026",
      title: "Downriver", blurb: "Wilderness survival and crafting: your bush plane is down and winter is coming. Build a boat and get to Fort Calder.",
      tags: ["Survival", "Crafting"], image: ITCH + "aW1hZ2UvNTE3NDE2Ny8zMDk4NDcwNS5naWY=/original/zQhKK2.gif",
      links: [{ label: "Play", url: "https://dgeisert.itch.io/downriver" }]
    },
    {
      slug: "tea-party-defense", kind: "game", year: "2025",
      title: "Tea Party Defense", blurb: "The cutlery has to hold the table against waves of baked goods. Each tower you build makes the next one of that type cost more.",
      tags: ["Tower defence"], image: ITCH + "aW1hZ2UvNDg5NjAwNy8yOTI2ODQ5OS5wbmc=/original/cOoTpg.png",
      links: [{ label: "Play", url: "https://dgeisert.itch.io/tea-party-defense" }]
    },
    {
      slug: "trojan-general", kind: "game", year: "2025",
      title: "Trojan General", blurb: "You're secretly on the enemy's side, so deploy your own army badly enough that it loses. Made with The Play Machine.",
      tags: ["Strategy", "Inverted goal"], image: ITCH + "aW1hZ2UvNDY1MTE3Mi8yNzcxNjM0Ny5wbmc=/original/7mwF9v.png",
      links: [{ label: "Play", url: "https://dgeisert.itch.io/trojan-general" }]
    },
    {
      slug: "ballaga", kind: "game", year: "2025",
      title: "Ballaga", blurb: "Consume enemies to make power balls, then fire them back. Playable on mobile.",
      tags: ["Arcade", "Mobile"], image: ITCH + "aW1hZ2UvNDg1NTAwMC8yOTAwNTM5Ni5wbmc=/original/JLfW2K.png",
      links: [{ label: "Play", url: "https://dgeisert.itch.io/ballaga" }]
    },
    {
      slug: "island-builder", kind: "game", year: "2024",
      title: "Island Builder", blurb: "A card-based roguelite: build an island and fill it with animals for points. AI helped with the code and assets.",
      tags: ["Roguelite", "Cards"], image: "https://geisert.me/wp-content/uploads/2024/02/reeffishfull.png",
      links: [{ label: "Play", url: "https://dgeisert.itch.io/island-builder" }]
    },
    {
      slug: "dragon-party", kind: "game", year: "2023",
      title: "Dragon Party", blurb: "Level up and recruit a party while the overpowered dragon sleeps. Unity, with Stable Diffusion art and MusicLM music.",
      tags: ["Action RPG", "Unity"], image: ITCH + "aW1hZ2UvMjI2ODQwOC8xMzQ0MzY4NC5wbmc=/original/1Z6G2Y.png",
      links: [{ label: "Play", url: "https://dgeisert.itch.io/dragon-party" }]
    },
    {
      slug: "scuba-steph", kind: "game", year: "2024",
      title: "Scuba Steph", blurb: "A narrative cave-diving experience, with AI-generated art and narration.",
      tags: ["Narrative"], image: "https://geisert.me/wp-content/uploads/2024/02/izfvzd.png",
      links: [{ label: "Play", url: "https://dgeisert.itch.io/scuba-steph" }]
    },
    {
      slug: "deep-boid-sea", kind: "game", year: "2023",
      title: "Deep Boid Sea", blurb: "A relaxing toy about flocking (boids) and shaders, where you push the school around.",
      tags: ["Toy", "Simulation"], image: "https://geisert.me/wp-content/uploads/2024/02/khwzgn.png",
      links: [{ label: "Play", url: "https://dgeisert.itch.io/deep-boid-sea" }]
    },

    /* ---------------- PROFESSIONAL ---------------- */
    {
      slug: "ninja-legends", kind: "pro", year: "2019",
      title: "Ninja Legends", award: "$1M+ revenue",
      blurb: "A fast melee VR game and one of the first post-launch titles on Oculus Quest.",
      tags: ["VR", "Lead designer & dev", "Coinflip Studios"],
      image: "https://geisert.me/wp-content/uploads/2024/02/38974720_495461137852886_9102635249124245504_n.jpg",
      links: [{ label: "Meta Quest store", url: "https://www.meta.com/en-gb/experiences/2398880980156491/" }],
      body: `
        <p class="lede">I led the team that made one of the first six-degrees-of-freedom games released after the original Oculus Quest launched.</p>
        <h3>Spotting the opening</h3>
        <p>Most existing VR games wouldn't port to the new standalone headset. I steered the team towards a game designed for that class of hardware: we confirmed it would run on an Oculus Go, even though it wasn't playable there. I then used my contacts to get it in front of the Quest teams early.</p>
        <h3>Result</h3>
        <p>Being early to a near-empty store paid off. We built the game in a few months, it shipped on Quest, Rift, Steam and PlayStation VR, and it made over <b>$1M</b>.</p>`
    },
    {
      slug: "object-locking-ai", kind: "pro", year: "2024",
      title: "Object Locking AI · Meta Connect", award: "Meta Connect demo",
      blurb: "AR glasses that recognise real objects, pin stable 3D markers to them, and pass what they see to an LLM.",
      tags: ["AR", "Spatial AI", "Meta Orion", "Team of 6"],
      image: "https://geisert.me/wp-content/uploads/2025/01/videoframe_6235.png",
      links: [{ label: "About Orion", url: "https://about.meta.com/realitylabs/orion" }],
      body: `
        <p class="lede">I led prototyping for the object-locking system behind a public demo on Meta's Orion AR glasses. <b>Role:</b> Senior Product Design Prototyper · <b>Team:</b> 6 · <b>Timeline:</b> 3 months.</p>
        <h3>The problem</h3>
        <p>AI glasses are only useful if they understand the world around you. If markers float or drift, the system feels untrustworthy and the AI feels disconnected from what you're looking at.</p>
        <h3>The experience</h3>
        <p>You look at a spread of ingredients. The glasses take a snapshot, recognise the objects in the cloud, and lock markers onto each one in stable 6DoF space. The recognised items then go to an LLM, which suggests a recipe. That takes you from the <b>physical world → vision model → spatial anchor → LLM → useful output</b>.</p>
        <h3>Making latency part of the design</h3>
        <p>Cloud recognition was slow. Rather than spending the time shaving milliseconds, I designed the waits: animated transitions, status cues, spoken confirmations and step-by-step feedback. Users stopped feeling it was slow and started feeling it was thinking.</p>
        <h3>Deliberate trade-offs</h3>
        <ul>
          <li><b>Avoid wrong locks.</b> A missed detection is better than locking onto the wrong thing, because trust matters more than coverage.</li>
          <li><b>Lock from a snapshot</b> instead of live tracking, to keep drift down for a reliable stage demo.</li>
        </ul>
        <h3>Impact</h3>
        <p>It was featured in the Meta Connect demo, won executive buy-in for more R&amp;D, and led to follow-on prototypes in real-time object and face tracking.</p>`
    },
    {
      slug: "orion-ar-glasses", kind: "pro", year: "2022–24",
      title: "Orion AR Messaging", award: "2 years on Orion",
      blurb: "Messaging that respects your attention on always-on AR glasses, shaped by on-device user studies.",
      tags: ["AR", "UX research", "Multimodal", "AI prioritisation"],
      image: "https://geisert.me/wp-content/uploads/2025/01/1727439594541.jpeg",
      links: [{ label: "About Orion", url: "https://about.meta.com/realitylabs/orion" }],
      body: `
        <p class="lede">For two years I prototyped on Orion, Meta's see-through AR glasses with eye, hand and touch input, which senior leadership used every day. I led prototyping for Messenger and WhatsApp.</p>
        <h3>The question</h3>
        <p>How do you deliver messages on a heads-up, always-on display without overwhelming people or getting in the way of the real world?</p>
        <h3>What I did</h3>
        <ul>
          <li>Built every exploratory prototype in Unity, and <b>pushed to test on the glasses themselves</b> rather than on stand-in VR headsets. Field of view, walking and social context only show up for real on the actual device.</li>
          <li>Defined the study variables and helped run and synthesise <b>user studies</b> on cognitive load while walking, comprehension, recall, notification frequency and social comfort.</li>
          <li>Built <b>simulated chatbot contacts</b> that send text, images and voice notes, so we could test edge cases quickly without waiting on backend work.</li>
          <li>Explored <b>AI summaries, prioritisation and notifications that know what you're doing</b>: pop-up, small icon, spoken aloud, or held back for later.</li>
        </ul>
        <h3>What we learned</h3>
        <ul>
          <li>Glanceable beats rich, and summaries beat raw message threads.</li>
          <li>Interruptions feel more invasive in AR than on a phone.</li>
          <li>UI that stays on screen creates low-level stress.</li>
          <li>Audio works well, but only when the context is right.</li>
        </ul>
        <p>The core insight: <b>in spatial computing, attention is the scarcest resource</b>, so design to protect it rather than to maximise engagement. These findings shaped the final messaging design on Orion.</p>`
    },
    {
      slug: "colocation-systems", kind: "pro", year: "2021–22",
      title: "Colocation & Room Setup for Quest",
      blurb: "Safety systems for headsets sharing one physical space, and room reconstruction that let users add objects to the play area.",
      tags: ["VR", "Mixed reality", "Safety"],
      image: "https://geisert.me/wp-content/uploads/2024/02/320234957_1192079495055894_764533686047549270_n-1.png",
      links: [{ label: "Developer samples", url: "https://developer.oculus.com/resources/unity-ssa-hs-app/?locale=en_GB" }],
      body: `
        <p class="lede">This was early work on letting headsets know where each other are, so several people can share the same physical and virtual space.</p>
        <ul>
          <li>Designed and built the <b>safety systems</b> for colocated headsets and ran the safety testing.</li>
          <li>Lead designer and prototyper on <b>room reconstruction</b> for Quest, the first time users could add objects to the play area on Oculus.</li>
          <li>Published <b>colocation samples</b> so outside developers could build shared-space experiences.</li>
        </ul>`
    },

    /* ---------------- AI PRODUCTS ---------------- */
    {
      slug: "play-machine", kind: "product", year: "2025",
      title: "The Play Machine", status: "No longer running",
      blurb: "An AI game-creation tool that turned plain-language prompts into playable games, with generated code, art and audio.",
      tags: ["AI tool", "Game creation", "Founder"],
      image: "assets/img/playmachine.jpg", fallback: LOVABLE + "playmachine-D107z2nW.jpg",
      links: [{ label: "Play a game made with it", url: "https://dgeisert.itch.io/trojan-general" }],
      body: `
        <p class="lede">The Play Machine let anyone describe a game and play it within minutes. Code, art and audio were all generated, and you kept refining the game by talking to it.</p>
        <p>I used it to make my own jam games, including <a href="project.html?p=trojan-general">Trojan General</a>, <a href="https://dgeisert.itch.io/machine-colony" target="_blank" rel="noopener">Machine Colony</a>, <a href="https://dgeisert.itch.io/phantom-crazy" target="_blank" rel="noopener">Phantom Crazy</a> and <a href="https://dgeisert.itch.io/locked-in-the-pyramid" target="_blank" rel="noopener">Locked in the Pyramid</a>. Using it myself showed me where AI is good at game design and where a designer still has to step in, especially on game feel, balance, and the first 30 seconds of play.</p>
        <p class="note">The Play Machine is no longer running. The games above are still playable on itch.io.</p>`
    },
    {
      slug: "story-machine-ai", kind: "product", year: "2025",
      title: "Story Machine AI", award: "Founder & CEO",
      blurb: "An AI filmmaking platform that takes you from idea to finished video, with reusable characters and scenes.",
      tags: ["AI pipeline", "UX", "React / Supabase"],
      image: "assets/img/storymachine.png", fallback: LOVABLE + "storymachine-DQ6-jpDd.png",
      links: [{ label: "storymachine.ai", url: "https://www.storymachine.ai/welcome" }],
      body: `
        <p class="lede">I conceived, designed and architected an AI filmmaking platform that takes someone from a simple idea to a finished short film, including characters, scenes, video clips, voice and lipsync. I built the MVP in about a month, then hired and led two engineers and a marketer.</p>
        <h3>The UX problem</h3>
        <p>Generative tools were either low-level (one image at a time) or fully automatic (no control). Filmmakers had the models but no workflow. Story Machine split the process into <b>story → assets → shots → assembly</b>, with guided creation for beginners and deep manual control for power users.</p>
        <h3>Key design decisions</h3>
        <ul>
          <li><b>Treat characters, settings and objects as reusable assets</b> with version history, so they stay consistent from shot to shot.</li>
          <li><b>Rebuild on the web.</b> I threw away an early Unity version and rebuilt it in React for faster iteration and easier access.</li>
          <li><b>Separate concerns.</b> When the video editor started limiting the asset system, I split them apart.</li>
        </ul>
        <h3>Live, interactive generation</h3>
        <p>We built a live stream where viewer comments changed the generated video within about <b>6 seconds</b>. It showed that generative storytelling can respond to its audience.</p>
        <h3>Results</h3>
        <p>We shipped to production with live users and small revenue, and partnered with ByteDance on a feature film made in 5 weeks on a $2,500 generation budget (<a href="project.html?p=speakeasy-revenge">Speakeasy Revenge</a>).</p>`
    },
    {
      slug: "another-like-that", kind: "product", year: "2025",
      title: "Another Like That",
      blurb: "Find London events similar to the ones you already love. Built on vector similarity, and live in 3 weeks.",
      tags: ["Recommendations", "Systems design"],
      image: "assets/img/anotherlikethat.png", fallback: LOVABLE + "anotherlikethat-DIMZDGCu.png",
      links: [{ label: "anotherlikethat.com", url: "https://www.anotherlikethat.com/" }],
      body: `
        <p class="lede">A live recommendation engine that helps people in London find events similar to what they already love, especially the lesser-known ones. It went from concept to live product in <b>three weeks</b>.</p>
        <h3>Modelling the messy real world</h3>
        <p>Events don't follow one pattern: one-off plays, weekly comedy nights with rotating acts, museums with fixed hours, multi-day festivals. Modelling every occurrence would have blown up the complexity, so I <b>separated venues from events</b>. That one simplification made the whole engine workable.</p>
        <h3>Design principles</h3>
        <ul><li><b>Pages should feel alive</b>, not like a static directory.</li><li><b>Don't overload the user.</b> Discovery should feel like a happy accident, not a chore.</li></ul>`
    },
    {
      slug: "lifted-news", kind: "product", year: "2025",
      title: "Lifted News", status: "No longer running",
      blurb: "A daily news site that found positive, hopeful stories from around the world.",
      tags: ["AI curation"],
      image: "assets/img/liftednews.jpg", fallback: LOVABLE + "liftednews-DWtpbrMG.jpg",
      links: []
    },

    /* ---------------- AI FILMS ---------------- */
    { slug: "speakeasy-revenge", kind: "film", year: "2025", title: "Speakeasy Revenge", video: "WlYnUjM8uUo",
      blurb: "Hamlet in a 1920s speakeasy: a full AI feature with songs and dialogue, made in 5 weeks on $2,500 sponsored by ByteDance.",
      tags: ["AI film", "Consistent characters & voices"] },
    { slug: "lost-connection", kind: "film", year: "2025", title: "Lost Connection", video: "_mrY3w9n6Jc",
      blurb: "A music video about two people drifting deeper into their screens, made inside Story Machine.",
      tags: ["Music video", "Kling · Seedream"] },
    { slug: "the-seas-keeper", kind: "film", year: "2025", title: "The Sea's Keeper", video: "vppx0UJ4Dho",
      blurb: "A ComfyUI pipeline with character LoRAs and IPAdapter, then Runway, for consistent characters.",
      tags: ["ComfyUI", "LoRA"] },
    { slug: "metaverse-dance", kind: "film", year: "2024", title: "Metaverse Dance", video: "qOpUr1h2nk0",
      blurb: "A speed test: a happy dance video made in about 45 minutes.",
      tags: ["Speed run"] },
  ],
};
