/* All portfolio content lives here. Edit this file to add or change projects.
   kind: "game" | "pro" | "product" | "film"
   image: local path (assets/img/...) or remote URL. "fallback" is used if the image fails to load.
   body: optional HTML for the project page. links: buttons shown on cards and project pages.
   caseOrder: puts a project in "Selected case studies" (1 = first). company, role, team, timeline,
   outcome: shown as facts on case-study rows and project pages (all optional). */

const LOVABLE = "https://dgeisert-portfolio.lovable.app/assets/";
const ITCH = "https://img.itch.zone/";

window.PORTFOLIO = {
  recognition: [
    { title: "Digital Champion of the Year 2026", by: "Camden Digital Inclusion", note: "For my AI talks to the Camden community." },
    { title: "Winner, Multimodal AI", by: "AI Tinkerers Demopalooza · MongoDB.local London · Oct 2025", note: "Made a music video live on stage in a 5-minute speed run.", link: "https://www.linkedin.com/posts/dgeisert_story-machine-activity-7381691095761489920-B397" },
    { title: "4th place", by: "Cursor 2.5-hour Hackathon · London · Sep 2025", note: "Cursor Party, a party-based survivor-like.", link: "project.html?p=cursor-party" },
    { title: "1st overall, plus Use of AI and Polish", by: "Jamference #3 · Nov 2026", note: "Starry Meows, 1st of 27 entries.", link: "project.html?p=starry-meows" },
    { title: "Most Fun entry", by: "Jamference #1 · Oct 2026", note: "Kitty Kingdom, rated the most fun game of the jam.", link: "project.html?p=kitty-kingdom" },
    { title: "Double winner", by: "Creating Reality Hackathon · USC · Mar 2018", note: "Flicksync: ML & AI and Innovative Entertainment.", link: "project.html?p=flicksync" },
    { title: "7th place", by: "Hugging Face Open Source AI Game Jam · 2023", note: "Hexagon Tactics, with AI-generated units in real time.", link: "project.html?p=hexagon-tactics" },
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
      slug: "starry-meows",
      caseOrder: 2, company: "Jamference #3 → gallery expansion", role: "Solo: game design, art direction, playtesting and music (all code written by an AI agent)", team: "Me + Claude (Cowork)", timeline: "2-day jam build, then two weeks of updates", outcome: "1st of 27 at Jamference #3, plus Use of AI and Polish; then grew into a 20-painting gallery with 133 stars", kind: "game", featured: true, year: "2026",
      title: "Starry Meows", award: "1st overall · Jamference #3",
      blurb: "A 3D platformer painted in the style of Van Gogh's The Starry Night, built from about 600,000 moving brush strokes.",
      tags: ["3D platformer", "Art direction", "AI-assisted", "No text"],
      image: ITCH + "aW1nLzMxNjM0NjMzLmdpZg==/original/jxA%2FfC.gif",
      links: [
        { label: "Play on itch.io", url: "https://dgeisert.itch.io/starry-meows" },
        { label: "Dev log", url: "https://dgeisert.itch.io/starry-meows/devlog/1789519/working-on-an-update" },
        { label: "Jam page", url: "https://itch.io/jam/jamference-ai-game-jam-hack-3" },
        { label: "Playthrough video", url: "https://youtu.be/lqWL0GZpnzE" }
      ],
      body: `
        <p class="lede">An orange tabby cat runs, jumps and belly-dives through a village painted like <i>The Starry Night</i>, then climbs into the swirling sky to catch the stars. Nothing in it is a texture or an image. Every roof, cypress, cobblestone and cloud is a simple shape covered in moving brush strokes.</p>
        <p>I directed it; an AI coding agent wrote every line. That makes it a good example of the job I want: setting a clear creative bar, then critiquing and steering a generative system until it gets there.</p>
        <img src="devlogs/starry-meows/img/starry-meows-cover.gif" alt="The orange cat sits on a floating island above the painted village while the sky swirls behind the Starry Meows title">

        <h3>The brief</h3>
        <ul>
          <li><b>Jam:</b> Jamference #3, the AI game jam I run. Theme <b>Great Works of Art</b>, restriction <b>No Text</b>. It placed <b>1st overall</b>.</li>
          <li><b>Time box:</b> the jam version took two days (30–31 October 2026) and 34 prompts, including the itch page and the dev log.</li>
          <li><b>Team:</b> me on design, art direction, playtesting and music. Claude, working as an agent in the Claude desktop app (Cowork), on code, rendering, sound effects and documentation.</li>
          <li><b>Tech:</b> Three.js in the browser, 960x640 reference resolution, one HTML file you can double-click.</li>
        </ul>

        <h3>Design goal</h3>
        <p>Make the player feel like they've stepped <i>inside</i> the painting, and keep it readable enough to platform in. The style had to move, because the swirl is the point of the picture. And with no text allowed, the controls had to feel like Mario 64 straight away: if a jam player can't work out how to jump in the first ten seconds, that's a problem.</p>

        <h3>Process</h3>
        <ol>
          <li><b>The look first.</b> My first prompt set the rules: every object is a base mesh plus brush-stroke particles, Mario-style controls, a cat, stars to collect, and "iterate until you're satisfied it looks like The Starry Night". The agent did eight visual passes on its own, checking each with headless screenshots.</li>
          <li><b>Critique, not specs.</b> I played each build and wrote back in plain language: the cat should be cat-sized against the buildings, the sky should flow faster, everything else should drift at 25% of its speed, the cat should be an orange tabby.</li>
          <li><b>Game feel.</b> "Make the jump a little more floaty", a landing shadow, and a request to analyse the platforming in Mario 64, Galaxy, 3D World and Wonder. That analysis became seven short courses paced intro, develop, twist, test.</li>
          <li><b>Teaching without words.</b> A painted keyboard that only advances when you press the lit key, a guide arrow to the first star, a camera that turns to whatever you just switched on, and a sound for every interaction.</li>
          <li><b>Tuning by numbers.</b> The firefly hunt went from 80 seconds to 24, then 25, then 28, with a bot speed-run checking it could still be beaten.</li>
          <li><b>After the jam.</b> Mouse look, ledge assists, and then a big expansion: a gallery overworld (inspired by the V&amp;A) with 20 paintings you jump into, each world in its own art style.</li>
        </ol>
        <img src="devlogs/starry-meows/img/first-render.jpg" alt="First render: a swirling sky, but the ground is orange and blue confetti and the cat is a dark blob">
        <p class="note">First render. The sky already read as Van Gogh; the ground was confetti and the cat almost invisible.</p>
        <img src="devlogs/starry-meows/img/first-day-final.jpg" alt="The village after eight passes: hills on the horizon, lit windows, a moonlit cat and painted stars">
        <p class="note">Eight passes later: contour outlines, hills on the horizon, cool shadows instead of black ones, stars as concentric painted rings.</p>

        <h3>How AI was used</h3>
        <ul>
          <li><b>In the making:</b> Claude wrote all of it from 56 written prompts: the stroke renderer and shaders, the cat's rig and gaits, the levels, the camera, more than 30 procedural sound effects, the title card, the itch page art and this dev log. I made the music.</li>
          <li><b>How I directed it:</b> a project rules file the agent reads every session (palette, scale, controls, camera, "every new interaction gets a sound"), so decisions stayed made. Every prompt and screenshot is saved, which is why I can show this process.</li>
          <li><b>How it checked itself:</b> I asked for tests whenever something mattered. Bots now walk every course hop in every world, and the camera, ledge and fall-through tests report numbers I could judge.</li>
          <li><b>Where it was strong:</b> rendering techniques, systems, and fast variations. It did eight passes on the look before I ever commented.</li>
          <li><b>Where I had to step in:</b> anything about how it <i>feels</i>. How fast the camera turns, jump floatiness, timer length, the cat's colour and scale, which star was too easy. And taste: when it offered three looks for the Great Wave's foam, I turned all three down.</li>
        </ul>

        <h3>Key decisions</h3>
        <ul>
          <li><b>Strokes, not textures.</b> Every object is a base mesh plus brush-stroke particles that flow in a designed direction: sky strokes follow swirling contour lines, cypresses curl up like flames, fur runs nose to tail. A painted texture would have been quicker but flat, and the swirl had to move. The cost was performance, which I bought back later with culling and batching (one level went from 14,000 draw calls to about 200).</li>
          <li><b>Teach with the world, not words.</b> The alternative was a silent controls screen. Instead, the tutorial makes you press each key in turn, the camera points at what you just activated, and checkpoints are told apart by colour. The settings menu is a gear, a music note and a speaker.</li>
          <li><b>The camera finds a better angle instead of zooming in.</b> The first camera snapped in when a wall got in the way. Now it tries 28 angles left, right and up, and only zooms in slowly as a last resort. Frames with the cat hidden fell from 5.5% to 0%, and the fastest zoom from 128 m/s to 2.5 m/s.</li>
          <li><b>Never make the player restart.</b> Switches and bridges stay built, missed jumps land you on an earlier part of the same puzzle, and lanterns act as checkpoints. Later, ledge assists stopped accidental walk-offs and pulled near-miss jumps onto the ledge.</li>
        </ul>
        <img src="devlogs/starry-meows/img/no-text-tutorial-sequence.jpg" alt="Four frames of the painted controls tutorial: keycaps light up in turn and turn gold once pressed">
        <p class="note">The No Text tutorial: brush-painted keycaps. The next key pulses, finished keys turn gold, dots count progress.</p>

        <h3>From one painting to a gallery</h3>
        <p>After the jam I added a gallery overworld with 20 portal paintings, Mario 64 style. The first pass gave 19 new worlds their own palettes and shaders, but they shared the same course templates. My feedback was blunt: the lily pond should be one big lake you cross on lilies under a Japanese bridge, the Banksy level a climb up an alley of fire escapes, the Escher level a room where the stairs change gravity, the drawings level a giant flying machine. That turned shared templates into bespoke levels.</p>
        <img src="devlogs/starry-meows/img/painting-worlds-latest.jpg" alt="All 20 painting worlds: lily pond bridge, garden party, pointillist sailboat, Mont Sainte-Victoire, golden mosaic garden, giant cubist guitar, melting clocks, drip jungle, pop-art cans, red cut-out dancers, floating circles, a heart-balloon alley, a sketched flying machine, Escher stairs, the Great Wave, ink mountains, sailing ships, a rainy lantern lane, the screaming fjord and the Starry Night village">
        <p class="note">All 20 painting worlds as they are now, each built around objects from its pictures.</p>
        <div class="carousel" role="region" aria-roledescription="carousel" aria-label="The 20 painting worlds, one per art style">
          <div class="carousel-track" tabindex="0">
            <figure class="slide"><img loading="lazy" src="devlogs/starry-meows/img/worlds/monet.jpg" alt="The cat on a lily pad in a big lake, with the green Japanese bridge behind"><figcaption><b>The Lily Pond</b> · Impressionism<span>Broken colour and reflected light</span></figcaption></figure>
            <figure class="slide"><img loading="lazy" src="devlogs/starry-meows/img/worlds/renoir.jpg" alt="A garden party under the trees, with paper lanterns and balloons"><figcaption><b>Dance at the Garden</b> · Impressionism<span>Dappled sunlight in feathery strokes</span></figcaption></figure>
            <figure class="slide"><img loading="lazy" src="devlogs/starry-meows/img/worlds/seurat.jpg" alt="The cat riding a dotted sailboat across the river"><figcaption><b>Dots by the River</b> · Pointillism<span>Dots of pure colour mixed by the eye</span></figcaption></figure>
            <figure class="slide"><img loading="lazy" src="devlogs/starry-meows/img/worlds/cezanne.jpg" alt="The mountain and red-roofed village built from blocks of colour"><figcaption><b>Mont Sainte-Victoire</b> · Post-Impressionism (constructive)<span>Blocks of colour laid side by side</span></figcaption></figure>
            <figure class="slide"><img loading="lazy" src="devlogs/starry-meows/img/worlds/klimt.jpg" alt="Gold mosaic platforms, a patterned tree trunk and golden trees"><figcaption><b>The Golden Garden</b> · Vienna Secession<span>Oil and gold leaf</span></figcaption></figure>
            <figure class="slide"><img loading="lazy" src="devlogs/starry-meows/img/worlds/picasso.jpg" alt="A giant faceted guitar with its strings and sound hole among floating shards"><figcaption><b>The Great Guitar</b> · Analytic Cubism<span>Faceted planes in ochre and grey</span></figcaption></figure>
            <figure class="slide"><img loading="lazy" src="devlogs/starry-meows/img/worlds/dali.jpg" alt="The cat on a soft melting clock in the desert"><figcaption><b>Melting Desert</b> · Surrealism<span>Dreamlike, glassy-smooth oil</span></figcaption></figure>
            <figure class="slide"><img loading="lazy" src="devlogs/starry-meows/img/worlds/pollock.jpg" alt="Platforms tangled in looping drips of paint"><figcaption><b>Drip Jungle</b> · Abstract Expressionism<span>Poured and dripped enamel</span></figcaption></figure>
            <figure class="slide"><img loading="lazy" src="devlogs/starry-meows/img/worlds/warhol.jpg" alt="Giant soup cans on a hot pink silkscreen floor"><figcaption><b>Pop Factory</b> · Pop Art<span>Silkscreen print</span></figcaption></figure>
            <figure class="slide"><img loading="lazy" src="devlogs/starry-meows/img/worlds/matisse.jpg" alt="Red paper cut-out dancers over a blue patterned lagoon"><figcaption><b>Cut-Out Lagoon</b> · Paper cut-outs<span>Gouache-painted paper, cut and pasted</span></figcaption></figure>
            <figure class="slide"><img loading="lazy" src="devlogs/starry-meows/img/worlds/kandinsky.jpg" alt="Floating circles, rings and a checkerboard above a web of lines"><figcaption><b>Composition in Space</b> · Geometric abstraction<span>Circles, lines and triangles</span></figcaption></figure>
            <figure class="slide"><img loading="lazy" src="devlogs/starry-meows/img/worlds/banksy.jpg" alt="The cat on a crate lifted by red heart balloons up a tall alley"><figcaption><b>Stencil Street</b> · Street art<span>Spray paint, stencils and paste-ups</span></figcaption></figure>
            <figure class="slide"><img loading="lazy" src="devlogs/starry-meows/img/worlds/davinci.jpg" alt="The deck, mast and gear wheel of a giant sketched flying machine"><figcaption><b>The Great Flying Machine</b> · Renaissance drawing<span>Sepia ink studies of machines and flight</span></figcaption></figure>
            <figure class="slide"><img loading="lazy" src="devlogs/starry-meows/img/worlds/escher.jpg" alt="Hatched black and white stairs and a checkered floor"><figcaption><b>Impossible Stairs</b> · Impossible-perspective printmaking<span>Lithograph and woodcut</span></figcaption></figure>
            <figure class="slide"><img loading="lazy" src="devlogs/starry-meows/img/worlds/hokusai.jpg" alt="The great wave curling over the island, with its white fractal foam"><figcaption><b>The Great Wave</b> · Ukiyo-e<span>Woodblock print in Prussian blue</span></figcaption></figure>
            <figure class="slide"><img loading="lazy" src="devlogs/starry-meows/img/worlds/guoxi.jpg" alt="Towering ink mountains behind a bamboo screen"><figcaption><b>Early Spring Mountains</b> · Chinese ink landscape (shan shui)<span>Ink and light colour on silk</span></figcaption></figure>
            <figure class="slide"><img loading="lazy" src="devlogs/starry-meows/img/worlds/turner.jpg" alt="Tall ships at the dock in a golden haze"><figcaption><b>Storm at Sea</b> · Romanticism<span>Luminous oil glazes of sea and sky</span></figcaption></figure>
            <figure class="slide"><img loading="lazy" src="devlogs/starry-meows/img/worlds/afremov.jpg" alt="A glowing street lamp over rainy platforms between lit houses"><figcaption><b>Rainy Lantern Lane</b> · Palette-knife painting<span>Thick knife-laid oil and rainy light</span></figcaption></figure>
            <figure class="slide"><img loading="lazy" src="devlogs/starry-meows/img/worlds/munch.jpg" alt="The bridge over the fjord under a burning orange sky"><figcaption><b>The Screaming Fjord</b> · Expressionism<span>Bands of anxious colour</span></figcaption></figure>
            <figure class="slide"><img loading="lazy" src="devlogs/starry-meows/img/worlds/starry.jpg" alt="The original village with a swirl checkpoint, lamp and church"><figcaption><b>Starry Night Village</b> · Post-Impressionism<span>Swirling impasto oil on canvas</span></figcaption></figure>
          </div>
          <div class="carousel-nav">
            <button type="button" class="carousel-prev" aria-label="Previous world">←</button>
            <span class="carousel-count" aria-live="polite">1 / 20</span>
            <button type="button" class="carousel-next" aria-label="Next world">→</button>
          </div>
        </div>
        <img src="devlogs/starry-meows/img/escher-gravity-house.jpg" alt="Black and white hatched hall with stairs and doors on several walls, each with its own gravity">
        <p class="note">A hatched hall where every wall has its own gravity. Sketch worlds use no particles; the shader "boils" between three drawings a second.</p>
        <p>Two rules came out of that pass. The game names styles and media, never artists. And for artists still in copyright, the levels use original compositions built from their recurring motifs, never copies.</p>
        <img src="devlogs/starry-meows/img/great-wave-rejected-options.jpg" alt="Four versions of the Great Wave's foam: heaps, paper cut-out, sculpted scrolls and spray">
        <p class="note">Four foam options for the woodblock wave. I rejected all of them and asked for fractal triangles instead.</p>
        <img src="devlogs/starry-meows/img/great-wave-fractal-foam.jpg" alt="The final wave: white fractal triangle claws along a dark blue crest">

        <h3>Player testing &amp; results</h3>
        <p>Jamference entries are rated by the other entrants on Fun, AI Use, Polish and Theme, and I play every entry on video. Starry Meows came <b>1st overall out of 27 entries</b> (4.23 average across 222 ratings), and won both <b>Use of AI</b> and <b>Polish</b>. It was 2nd for Theme and 3rd for Fun.</p>
        <img src="devlogs/starry-meows/img/jamference-3-results.png" alt="Jamference #3 results: Starry Meows 1st overall with 4.229, also winning Use of AI and Polish">
        <p class="note">Jamference #3 results: 27 entries, 222 ratings.</p>
        <p>Fun was its weakest category, which matches what I saw when I played it. The look pulls people in, but the platforming had rough edges: the camera turned too fast, the firefly timer was far too generous, a star could be reached without trying, and it was too easy to walk off a ledge by accident. Most of the post-jam work went into exactly those: mouse look, ledge assists, harder and more varied courses.</p>

        <h3>What I learned</h3>
        <ul>
          <li><b>Iteration is key.</b> Trying the game many times and giving specific feedback and feature requests helped shape the game into a good experience.</li>
          <li><b>Ask for options, and be ready to refuse them all.</b> Side-by-side options made the critique quick, but the fractal foam only exists because none of the offers were right.</li>
          <li><b>Give references and targets.</b> Once the agent has a visual target in Van Gogh's Starry Night, it can look at the outputs and check and revise on its own.</li>
          <li><b>Next:</b> more playtesting of the gallery with new players, especially whether the later rooms' longer courses are fun or just long.</li>
        </ul>
        <p>Read the longer <a href="https://dgeisert.itch.io/starry-meows/devlog">dev log on itch.io</a>, or see the other Jamference games: <a href="project.html?p=kitty-kingdom">Kitty Kingdom</a> and <a href="project.html?p=london-overgrown">London Overgrown</a>. The jam itself is one I run: see <a href="project.html?p=jamference">Jamference</a>.</p>`
    },
    {
      slug: "kitty-kingdom",
      caseOrder: 6, company: "Jamference #1 → full game", role: "Solo: design, art direction, playtesting and balance", team: "Just me, directing Claude (code and art) and Suno (music)", timeline: "One-week jam (Oct 2026), then 4 weeks of near-daily updates", outcome: "Rated Most Fun of the jam (#4 of 37 overall); rebuilt as a roguelite with an 18-land campaign and Windows, Mac and Steam Deck builds", kind: "game", featured: true, year: "2026",
      title: "Kitty Kingdom: And the Robot Menace", award: "Most Fun · Jamference #1",
      blurb: "A roguelite hex tower-defence game: build by day, fight off an army of cleaning robots by night.",
      tags: ["Tower defence", "Roguelite", "Deck-building", "Hex"],
      image: "devlogs/kitty-kingdom/img/kitty-kingdom-cover.gif", fallback: ITCH + "aW1hZ2UvNTE3NDM1NC8zMTY2ODIzNS5naWY=/original/8xh44S.gif",
      links: [
        { label: "Play the full version", url: "https://dgeisert.itch.io/kittykingdom" },
        { label: "Dev log", url: "https://dgeisert.itch.io/kittykingdom/devlog/1744370/from-jam-game-to-full-game" },
        { label: "Original jam entry", url: "https://dgeisert.itch.io/kitty-kingdom" },
        { label: "Jam results", url: "https://itch.io/jam/jamference-ai-game-jam-hack-1" }
      ],
      body: `
        <p class="lede">A jam rule that said <b>Movement Input Only</b> turned into the core mechanic: you build by walking to a spot and standing still. Players rated it the <b>most fun game</b> of Jamference #1, and in the month after the jam I rebuilt it into a roguelite with an 18-land campaign, a card draft and builds for Windows, Mac and Steam Deck.</p>

        <h3>The brief</h3>
        <ul>
          <li><b>Jam:</b> Jamference #1, one week (2 to 9 October 2026), 37 entries, rated by the other entrants.</li>
          <li><b>Theme:</b> Cat and Robot. <b>Mandatory restriction:</b> Movement Input Only, so no attack button and no clickable menus.</li>
          <li><b>Team and role:</b> solo. Design, direction, playtesting and balance were mine. Claude wrote the code and drew the art; Suno made the music.</li>
        </ul>

        <h3>Design goal</h3>
        <p>A defence game where <i>where you stand</i> is the decision. Thronefall showed that a walking hero can run a build-and-defend loop, so I set out to make one you could play with nothing but a stick or WASD, where every choice is a place on the map and the first night is understandable without reading anything.</p>

        <h3>Process</h3>
        <ol>
          <li><b>The jam build.</b> You play King Whiskers. Walk to a glowing spot and stand still to build. Stand on a numbered circle to pick an upgrade. Stand on the Night Bell to call in the robots. That's the whole interface, and it was 100 nights long.</li>
          <li><b>Reading the feedback.</b> Players loved the loop but said three things again and again: it was too long, standing on circles to choose upgrades was limiting, and they wanted it without the restriction. I kept the loop (build by day, defend by night, choose as you go) and rebuilt everything around it.</li>
          <li><b>Research before redesign.</b> I had Claude write up ten comparable games (Thronefall, Rogue Tower, Against the Storm, Loop Hero, They Are Billions and others), and I took learnings and the best systems from each. The shared lessons became design rules: show the threat before it arrives, keep runs short with a save every dawn, draft with control rather than pure luck, and make meta-progression widen your choices rather than inflate stats.</li>
          <li><b>The campaign build.</b> A hex map where adjacency drives the economy, a deck that decides what you can build, a campaign map of lands, and a Town for unlocks. The first campaign build was committed on 14 October, five days after the jam closed, and I shipped updates almost daily for the next three weeks.</li>
          <li><b>Cutting and tuning.</b> The campaign launched with 36 lands. Playing them, half felt like copies of another, so I cut it to 18 and made each one a different combination of layout and portal count. The longest land went from 100 nights to 30.</li>
          <li><b>Onboarding.</b> Telemetry showed players skipping the welcome page, so the tutorial was rebuilt so every step is something to do, never a page to read, spread over the first three days of the first battle.</li>
        </ol>
        <img src="devlogs/kitty-kingdom/img/jam-vs-campaign.jpg" alt="Side by side: the jam build on 9 October with free-form roads, and the campaign build on 22 October on a hex grid with a resource bar, a Tonight panel listing incoming robots, and Upgrade and Start Night buttons.">
        <p class="note">The jam build (9 October) and the campaign build (22 October). The loop is the same; the information around it is new.</p>

        <h3>How AI was used</h3>
        <p><b>In the making.</b> I directed, Claude built.</p>
        <ul>
          <li><b>Code:</b> Claude wrote the whole game in plain JavaScript, with no engine, from my design notes and feedback. That made a daily cadence possible: describe the change in the morning, play it by lunch.</li>
          <li><b>Art:</b> there's no image model in this game. Every cat, robot and building is drawn by canvas code that Claude wrote, so the art can animate, recolour and stay consistent across 80 cards and over 35 robot types. My job was art direction: Claude rendered option sheets (ten app-icon concepts, three map-edge treatments, three ways to show which hexes are walkable under the Grime) and I picked, combined or sent them back.</li>
          <li><b>Music:</b> the menu, map, day and night tracks were made in Suno. A generated WebAudio score sits underneath as a fallback.</li>
          <li><b>Research and tools:</b> the competitor analyses, a telemetry dashboard, damage and hero balance tools, and a trailer that renders frame by frame from the game's own code.</li>
        </ul>
        <img src="devlogs/kitty-kingdom/img/grime-readability-options.jpg" alt="Four versions of the same Grime-covered map: today, where blocked and walkable hexes look alike; option A, blocked hexes shaded darker; option B, a bright outline around walkable areas; option C, dashed outlines on walkable hexes.">
        <p class="note">A readability problem turned into a decision sheet: blocked and walkable hexes looked the same under the Grime. Claude drew three fixes on the same map so I could compare them side by side.</p>
        <p><b>In the game: an AI that plays it.</b> With 18 lands of up to 30 nights, I couldn't balance by hand. Claude built a headless autoplayer that builds an economy, places towers along the robots' roads, drafts cards and uses hero powers. It plays every land, scores each night from 0 (nothing lost) to 1 (the Castle fell), and nudges the waves towards a difficulty curve I set. Separate tools pit every hero against the same battles and put every tower on a shooting range to compare damage per resource spent.</p>
        <p><b>Where I had to step in.</b></p>
        <ul>
          <li><b>The AI player isn't the player.</b> It loves Archer Towers and plays sensibly but not expertly, so I treat its curve as a smooth baseline. The first five lands were trimmed by hand so the tutorial land stays the gentlest.</li>
          <li><b>Numbers versus fun.</b> The hero tool showed Mystic Mittens' Meteor doing most of the damage in town. The tool found the outlier; deciding what to cut and what each hero should <i>feel</i> like was a design call.</li>
          <li><b>Sameness.</b> Generation makes content cheap, so the risk is too much of it. Cutting 36 lands to 18, and removing upgrades that only repeated another one, were judgement calls the tools couldn't make.</li>
          <li><b>Voice and tone.</b> A design review pass turned the generic "bots" into household gadgets (the Robo-Poodle, the Toaster Bomb, the Steam Iron) and fixed the terminology everywhere: always "the Grime", always "night" rather than "wave".</li>
        </ul>

        <h3>Key design decisions</h3>
        <ul>
          <li><b>Keep the walk, drop the restriction.</b> Players asked for the game without movement-only. I removed the rule but kept what it created: you still walk your hero to a hex to build, and a single button opens the build menu there. <i>Alternative considered:</i> click-to-build anywhere, which would have turned it into a generic tower-defence game.</li>
          <li><b>Your deck decides what you can build.</b> In the jam build every building was available from day one, so the best strategy was the same every run. Now a small core is always available and everything else is one of 80 cards, drafted 1 from 3 after each night. The draft never offers a blueprint you can't use yet. <i>Alternatives:</i> a fixed tech tree (no run-to-run variety) or pure random draws (players called Rogue Tower's "a slot machine").</li>
          <li><b>Adjacency is the build puzzle.</b> Logging Camps earn per neighbouring forest, Farms per open field, Cottages per neighbouring Cottage, and Enchanters give their element to the towers next to them. Position stays the whole game, even without the restriction.</li>
          <li><b>Losing doesn't wipe the run.</b> If the Castle falls you can spend Gears to rewind to that morning and try a different plan. A long battle should never end on one mistake.</li>
        </ul>
        <img src="devlogs/kitty-kingdom/img/adjacency-neighbours-matter.gif" alt="Animated: buildings placed beside forests, rocks and other cottages earn bonus resources, shown as floating numbers at dawn.">

        <h3>Player testing and results</h3>
        <ul>
          <li><b>Most Fun</b> of Jamference #1 (4.43), <b>#4 overall</b> of 37 entries, and #3 for Use of AI, all rated by the other entrants.</li>
          <li>Every common request from the jam comments made it into the full version: a shorter structure, separate music and sound volume, zoom, clearer upgrade information, more music, and a Mac build.</li>
          <li>Anonymous telemetry tracks each tutorial step. It's what caught players skipping the old welcome page.</li>
        </ul>

        <h3>What I learned and what's next</h3>
        <ul>
          <li><b>Constraints are design tools, even after you drop them.</b> The restriction forced a mechanic that still defines the game.</li>
          <li><b>With AI building, the bottleneck moves to judgement.</b> Building a feature took hours, so most of my time went on deciding what to cut, what felt good, and what the numbers were missing.</li>
          <li><b>Next:</b> the long eastern lands still need tuning against real players rather than the autoplayer, which is where telemetry and itch feedback come in.</li>
        </ul>
        <p>The longer, behind-the-scenes version is in the dev log on the <a href="https://dgeisert.itch.io/kittykingdom">game's itch.io page</a>. The jam itself is one I run: see <a href="project.html?p=jamference">Jamference</a>.</p>`
    },
    {
      slug: "london-overgrown",
      caseOrder: 3, company: "Jamference #4", role: "Solo: game design, creative direction, AI direction and playtesting", team: "Me + Claude (Cowork)", timeline: "5 days (13–17 Nov 2026)", outcome: "An open-world RPG of the real Zone 1: 12 factions, ~75 characters, 100 hidden lucky cats", kind: "game", featured: true, year: "2026",
      title: "London Overgrown: The Pigeon Post", award: "Jamference #4 · Solarpunk",
      blurb: "A pixel-art cycling RPG in a real, overgrown Zone 1 London built from OpenStreetMap. Carry the post between walled factions and get them all into one room.",
      tags: ["Open world", "Narrative RPG", "Real-world map", "AI-assisted", "Browser"],
      image: "devlogs/london-overgrown/img/cover.gif",
      links: [
        { label: "Play on itch.io", url: "https://dgeisert.itch.io/london-overgrown" },
        { label: "Dev log", url: "https://dgeisert.itch.io/london-overgrown/devlog/1789514/i-went-a-little-overboard-for-a-jam-game" },
        { label: "Jamference #4", url: "https://itch.io/jam/jamference-ai-game-jam-hack-4" }
      ],
      body: `
        <p class="lede">London, 24 years after a solar flare stopped every clock at 3:07. The city is green, quiet and mostly fed, but every faction lives behind a wall of junk and sunflowers and nobody visits anybody. You're the newest courier of the Pigeon Post, the only people who still cross.</p>
        <p>It's a pixel-art cycling RPG set in the real Zone 1, built street by street from OpenStreetMap, so every road, park and canal is where it really is. I made it alone in five days for Jamference #4, directing Claude to write the code.</p>

        <h3>The brief</h3>
        <ul>
          <li><b>Theme: Solarpunk.</b> A hopeful future powered by the sun.</li>
          <li><b>Restriction: Hidden Lucky Cat.</b> Hide a lucky cat somewhere in the game, and when the player finds it, give them a real benefit.</li>
          <li><b>Time box:</b> a one-week jam (13–20 Nov 2026). I built it in the first five days and kept the rest for polish and the itch page.</li>
          <li><b>Team:</b> just me, as designer, creative director and playtester, with Claude writing the code and drafting dialogue to my direction.</li>
        </ul>

        <h3>Design goal</h3>
        <p>I wanted a <b>gritty but optimistic future</b>, inspired by Becky Chambers' Monk and Robot books: a world that has been through something terrible and is quietly getting better. I also wanted the entire map to feel alive and worth exploring, every inch of London. I've enjoyed these museums and places so much in person, and I wanted that to really show in the game.</p>
        <p>The verb is <b>delivery</b>. The factions live behind walls built out of fear, and you're the one person everyone trusts to cross. Every quest is someone who needs help from someone they don't trust, so the courier carries the first word over the wall, and every ride between deliveries is a reason to see the city.</p>

        <h3>How it came together</h3>
        <img src="devlogs/london-overgrown/img/early-prototype-test-street.png" alt="Early prototype: a grey test street of extruded buildings with ivy">
        <p class="note">Day 1 morning: the first street out of the OpenStreetMap pipeline.</p>
        <img src="devlogs/london-overgrown/img/commons-allotments.jpg" alt="Final build: allotments, trees and wildflowers inside the Commons' walls at Westminster">
        <p class="note">Day 5: the allotments inside the Commons' walls at Westminster.</p>
        <ol>
          <li><b>Day 1: the city first.</b> A pipeline that turns the real OpenStreetMap data into 200&nbsp;m tiles: building footprints and heights, roads, canals, parks, trees. Buildings get facades generated with wave function collapse, then ivy, damage and wildflowers. By the evening the world bible was set (twelve factions, what each wants and who they don't trust) and the story layer was going in.</li>
          <li><b>Day 2: something to do in it.</b> Bikes, cargo on the rack, wildlife herds, the Fate Reels dice system, the lucky cats, the loners and the title screen tour. I playtested and found the map felt empty, so I had Claude measure it (below) and fill the gaps.</li>
          <li><b>Day 3: go inside anything.</b> Generated interiors for every building, museum exhibits, fishing, and checks that every place the story sends you can actually be reached.</li>
          <li><b>Day 4: things to do between deliveries.</b> The slingshot, races, animal-catching jobs and timed express post. Then the itch page and a 90-second trailer.</li>
          <li><b>Day 5: feel and clarity.</b> A UI redesign, quest markers, a first-person camera, better character models, and tightening the tutorial.</li>
        </ol>
        <img src="devlogs/london-overgrown/img/first-person-big-ben-parliament.png" alt="First-person view from Westminster Bridge of Big Ben and the Houses of Parliament">
        <p class="note">Custom modelled landmarks and first person views.</p>
        <p>Before each risky change Claude saved a named checkpoint ("backup-before-bikes", "backup-before-first-person"). There were 62 by the end, so I could try bold ideas and roll back in seconds.</p>

        <h3>How AI was used</h3>
        <p><b>In the making.</b> Claude wrote the code: about 38,000 lines of JavaScript (three.js) and 3,700 lines of Python and Node tools. I worked as director. I set the premise, the factions and their wants, set the tone and the rules, played every build, and decided what stayed and what was cut. Claude drafted the dialogue against that world bible, and I reviewed it in play.</p>
        <p><b>Art directed in words.</b> There are no textures or painted sprites. Every model, from St Paul's to the pigeons, is built in code from simple shapes, and a pixel shader gives the look. So the art direction was all description and reference: street photos of each neighbourhood turned into style rules (white stucco and first-floor balconies in Belgravia, yellow-brick Georgian in Bloomsbury, red-brick mansion blocks in Kensington). The music is generative too, a Web Audio score that brightens when you ride and turns minor in a chase. The one painted image is the logo, which I made with Gemini (Nano Banana). Claude then made the animated itch cover and header by layering the logo over gameplay footage.</p>
        <p><b>AI as QA.</b> With AI writing code this fast, checking it becomes the bottleneck, so I had Claude build the checkers too. A story bot plays the whole story hundreds of times with random choices and rolls to prove every ending can be reached and nothing soft-locks. Other scripts check that every gate, Tube entrance and quest spot can be reached on a bike, and bots play the mini-games to check that decent play wins and doing nothing loses.</p>
        <p><b>In the game.</b> There's no AI running live. The story depends on setups and payoffs planted hours apart, so I wanted authored, testable dialogue, and building AI into a game only makes sense for something that will be supported live for a long time. The AI went into building a world much bigger than one person could write in a week.</p>
        <p><b>Where I had to step in.</b></p>
        <ul>
          <li><b>The first five minutes.</b> The player has to be riding, chased and delivering inside five minutes. The tutorial is the most crucial place to iterate with the AI, as it can't approach the game with a lens of a new player.</li>
          <li><b>Game feel.</b> Raider bikes are quicker than you cruise and slower than you sprint, so a chase is always yours to win.</li>
          <li><b>Emptiness.</b> Riding around, the outer map felt dead. The fix was to measure the emptiest parts of the map and add landmarks and NPCs in those places to keep the whole map vibrant.</li>
          <li><b>Fewer knobs.</b> Claude was happy to add a setting for everything. I pinned pixel size, colour grade and day cycle to the look I wanted and took them out of the menu.</li>
        </ul>
        <img src="devlogs/london-overgrown/img/empty-lots-before-after.jpg" alt="Before and after: bare dark empty lots, then the same lots overgrown with rubble, grass and flowers">
        <p class="note">Playtest fix: empty lots read as holes in the map, so they became overgrown rubble.</p>

        <h3>Key design decisions</h3>
        <p><b>1. A real map, not a designed one.</b> Real London gives you recognition and scale for free: players ride down their own street. But a real city isn't laid out for play. Claude gridded the map at 25&nbsp;m and found that <b>70% of the land was more than 500&nbsp;m from anything to do</b>, and the furthest point 3.5&nbsp;km away. That turned into a ranked list of real landmarks to build in the biggest holes (Abbey Road, the Oval gasholders, Brompton Cemetery, Mount Pleasant sorting office). We built all of them and more, which brought the furthest gap down to about 1.3&nbsp;km. The alternative was a smaller, hand-made London: easier to play, but it would have taken a long time to make and I'm not sure the AI can do it seamlessly without lots of double checking that would have eaten into build time. Even then it takes away some of the fun from real Londoners to find their own street.</p>
        <p><b>2. Bring everyone together.</b> Solarpunk is about an optimistic, eco-friendly future, and the best way to deliver on that was a story about everyone coming together to work towards a brighter one. So there are no enemies to defeat. Even the Magpie raiders are the children who were turned away from the gates in the Hungry Winter, and what their King wants is one word: sorry. The slingshot only stuns, and people hate it if you use it on them. Kind choices that are never the efficient ones open the best ending, where every faction, Magpies included, signs the Open Road Charter and Big Ben starts again. Raiders to fight would have been easier to make exciting, but they would have worked against the theme.</p>
        <p><b>3. Make the restriction a system, not an easter egg.</b> The minimum was one hidden cat. I hid <b>100</b>, at real London cat spots: Hodge's statue at Gough Square, cat cafés, the giant cats on the Carreras factory, the far end of Tube platforms. Each one gives +1 Luck, and Luck adds to every dice roll, so exploring the real city makes your courier better at talking. Six "long shot" replies can only be tried again after you find another cat.</p>
        <p><b>4. Show the odds and let failure move the story.</b> Every check shows its odds and what failing costs before you commit, and locked replies show what they need, so players can see the roads not taken. A failed roll rarely closes a door: it sends you the long way round. Getting caught by the Magpies sends your parcel to the King's drawer, and you can get it back at their Nest.</p>
        <img src="devlogs/london-overgrown/img/talking-to-nan.jpg" alt="Talking to Nan the postmistress at the British Library, with numbered replies">
        <p class="note">Nan, the postmistress, at the British Library: the first conversation.</p>

        <h3>Player testing &amp; results</h3>
        <p>Jamference ratings (Fun, AI Use, Polish, Theme) open once submissions close on 20 November. I'll add the results and player quotes here. I playtested every build, a few friends played it, and the Jamference Discord community played some of the earliest builds and told me what confused them. The story bot covered the rest: it reaches every ending and wins about 60% of its runs with random choices.</p>
        <p>What my own playtests changed: the map gaps, the empty lots, the characters (given more detailed faces on day 5 so they read at pixel scale), quest markers over heads, and a tutorial that teaches every control as a stamped "Courier's Certificate" from Nan and her pigeon.</p>
        <img src="devlogs/london-overgrown/img/zone1-map-factions.jpg" alt="The Zone 1 map with faction territories and bike shops marked">

        <h3>What I learned</h3>
        <ul>
          <li><b>Scope stops being the limit.</b> Five days produced a game bigger than anything I've made at a jam. The hard questions moved from "can we build it?" to "does the player find the fun in five minutes?" and "does it all hang together?"</li>
          <li><b>Write the world bible first.</b> A clear theme ("walls are built out of fear") was what kept hundreds of AI-drafted lines pointing the same way.</li>
          <li><b>Build the verifiers.</b> The story bot and reachability checks caught problems I'd never have found by playing.</li>
          <li><b>Next:</b> watch real players in the Jamference playthroughs and cut whatever they skip. I'd also like to try live AI in the townsfolk: letting them answer free questions grounded in the city's history, with the guardrails I learned on <a href="project.html?p=severed-heads-united-hearts">Severed Heads, United Hearts</a>.</li>
        </ul>
        <p>Read the longer <a href="https://dgeisert.itch.io/london-overgrown/devlog">dev log on itch.io</a>, or see the other Jamference games: <a href="project.html?p=kitty-kingdom">Kitty Kingdom</a> and <a href="project.html?p=starry-meows">Starry Meows</a>.</p>
        <p class="note">Map data © OpenStreetMap contributors (ODbL).</p>`
    },
    {
      slug: "flicksync", company: "Creating Reality Hackathon, USC", role: "Lead developer: Unity and VR setup, speech and multiplayer integration, the script system and the voice-driven menu", team: "Five: programmers, a character artist, and sound and music", timeline: "3-day hackathon (Mar 2018), a week of polish, then a 2024 revival", outcome: "Won Machine Learning & AI and Innovative Entertainment; revived in 2024 for Quest and Android", kind: "game", featured: true, year: "2018",
      title: "Flicksync", award: "Double winner · Creating Reality 2018",
      blurb: "Act out the Mad Hatter's tea party in VR. Speech recognition scores your lines, and the rest of the cast picks up their cues.",
      tags: ["VR", "Voice input", "Speech recognition", "Hackathon", "Unity"],
      image: "assets/img/flicksync.jpg", art: "flicksync",
      links: [
        { label: "VR APK", url: "https://drive.google.com/file/d/1NX1JHu7Q01gWpvYEJ3087m2XKQgpWvPO/view?usp=drive_link" },
        { label: "Mobile APK (Alice only)", url: "https://drive.google.com/file/d/1obqwQojm5GuJUhX7oqejkHNHkSSfQH6h/view?usp=drive_link" }
      ],
      body: `
        <p class="lede">You sit at the Mad Hatter's tea party in VR and play Alice, the Hatter or the March Hare. There are no buttons: you say your lines out loud, speech recognition checks them against the script, and the rest of the cast answers. It was my first project putting AI at the centre of play, and the questions it raised are the ones I still work on.</p>

        <h3>The brief</h3>
        <ul>
          <li><b>Event:</b> the Creating Reality hackathon at USC, March 2018. The playable build came together in three days (12–14 March), followed by about a week of polish.</li>
          <li><b>Team:</b> five of us, most meeting for the first time: programmers, a character artist, and sound and music.</li>
          <li><b>My role:</b> lead developer. I set up the Unity project and VR rig, wrote the script loader, joined the speech recognition (IBM Watson) to the Photon multiplayer, and built the voice-only menu, the character expressions and the grabbable tea set. About 77 of the project's 177 commits are mine.</li>
          <li><b>Tech:</b> Unity, SteamVR and VRTK on Oculus Rift, IBM Watson streaming speech-to-text, Photon for multiplayer.</li>
        </ul>

        <h3>What's a flicksync?</h3>
        <p>The idea comes from <i>Ready Player One</i>: you play a part in a famous film or book and get scored on how well you perform it. We picked the tea party from <i>Alice's Adventures in Wonderland</i> because it's well known, quick-fire and funny, and the whole scene happens around one table. We cut it down to 37 lines across Alice, the Hatter, the March Hare and the Dormouse.</p>

        <h3>Design goal</h3>
        <p>Make performing the game. Your voice is the only controller, so the player should feel like an actor in a scene, not someone reading a quiz. That set three problems to solve: the recogniser had to be forgiving enough that acting felt good, the player always had to know when it was their turn, and people who don't know the lines needed a way in.</p>

        <h3>Process</h3>
        <ol>
          <li><b>Day 1: one line.</b> The first test just listened for the words "best butter" (the Hatter's excuse for the broken watch). Once that worked, the whole script went into a JSON file: who speaks, the text, and the recorded audio for each line.</li>
          <li><b>Day 2: the loop.</b> Scoring, a 30-second timer, success and miss sounds, and recorded voices for every character. We got two players working over Photon, each choosing a role while the game played everyone else.</li>
          <li><b>Day 3: putting the cast at the table.</b> The characters, their faces and animation went in, plus the intro narration, music and an ending.</li>
          <li><b>The week after: polish.</b> Physics on the teacups and teapots so you can pick them up, a menu you use with your voice, three difficulty levels, a restyled set, and fixes to the character models.</li>
          <li><b>2024: the revival.</b> Watson's old Unity SDK and Photon had both aged badly, so I upgraded the project to Unity 2022, swapped the recogniser for Meta's Voice SDK dictation, and built it for Quest and for Android phones. The phone version always casts you as Alice.</li>
        </ol>

        <img src="devlogs/flicksync/img/character-turnarounds.jpg" alt="Pencil turnaround sketches of Alice, the Mad Hatter and the March Hare, front and side views">
        <p class="note">Character turnarounds for Alice, the Hatter and the March Hare. We kept the bodies simple and put the personality into big painted faces.</p>

        <h3>Key design decisions</h3>
        <h4>1. Score the words, not the order</h4>
        <p>Speech recognition in 2018 dropped and misheard words all the time, and actors paraphrase. So a line is compared as a bag of words in both directions: every word you missed and every extra word you said counts against you, and the line passes if you got roughly half of it right. Word order doesn't matter. The alternative was strict matching, which tested the recogniser more than the player and made the scene stall.</p>

        <h4>2. Write the recogniser's mistakes into the script</h4>
        <p>Testing showed which words the recogniser reliably got wrong, so lines can have alternative readings. "Very uncomfortable for the Dormouse" also accepts "doghouse"; "it wasn't very civil of you" also accepts "simple". The voice menu does the same, so saying "hair" picks the March Hare and "Allis" picks Alice. It's a small thing, but it's the difference between a player who feels clever and one who feels misheard.</p>

        <h4>3. Teach the mechanic before the scene starts</h4>
        <p>The menu has no buttons. A narrator says hello and waits for you to say "Hello there" back, and gets snarkier each time you don't. Then you read "I'm a little teapot" from a cue card, and then you choose your difficulty and character by saying them. By the time the tea party starts, you've already learned that talking is how you play.</p>

        <h4>4. Difficulty is how much script you get</h4>
        <p>I framed difficulty as stage support rather than tighter scoring:</p>
        <ul>
          <li><b>Beginner:</b> your line is on a cue card in front of you.</li>
          <li><b>Assist:</b> the card stays hidden until you say "line", the way an actor calls for a prompt.</li>
          <li><b>Hard:</b> no card. You know it or you don't.</li>
        </ul>
        <img src="devlogs/flicksync/img/cue-card.jpg" alt="A torn parchment cue card reading: Very uncomfortable for the Dormouse. Only, as it's asleep, I suppose it doesn't mind.">
        <p class="note">The cue card shows only on your turn, alongside a microphone that's red while the game is listening and grey otherwise, and a 30-second timer.</p>

        <h4>5. Make it clear whose turn it is</h4>
        <p>Voice games break when players talk over the game or wait in silence. The cue card, the red microphone and the timer only appear on your turn. The characters animate and cycle mouth shapes while they talk, so you can see who is speaking. In the 2024 version the game ends your turn after three seconds of silence, so you don't have to say "done".</p>
        <img src="devlogs/flicksync/img/hatter-mouth-shapes.jpg" alt="Eight hand-drawn Mad Hatter face sprites with different eye and mouth shapes">
        <p class="note">The Hatter's face sprites. Whoever is speaking cycles through them every 0.3 seconds.</p>

        <h3>How AI was used</h3>
        <ul>
          <li><b>In the game:</b> machine-learning speech recognition was the whole input system: Watson in 2018, Meta's Voice SDK (Wit.ai) in 2024. Our design work was mostly about tuning how forgiving it was: the scoring threshold, alternative readings and turn timing.</li>
          <li><b>The cast:</b> the other characters were scripted, with recorded voices. They react when you finish a line but don't improvise. That was a deliberate choice for a three-day build, and it's what I'd change first today (see below).</li>
          <li><b>In the making:</b> none. In 2018 everything was written, drawn and recorded by the team.</li>
        </ul>

        <h3>Result</h3>
        <p>Flicksync won two categories: <b>Machine Learning &amp; AI</b> and <b>Innovative Entertainment</b>. At the end of the scene you just say "restart" to go again, usually as a different character.</p>

        <h3>Then vs. now</h3>
        <p>In 2018 the AI could only check whether you said the right words. Today the same idea could go much further, and these are the experiments I'd run:</p>
        <ul>
          <li><b>A cast that improvises.</b> An LLM playing the Hatter could answer an ad-lib in character, then steer the scene back to the script.</li>
          <li><b>Score the performance, not just the words.</b> Models can now hear timing, emphasis and emotion, so feedback could be "more indignant", like a director's note.</li>
          <li><b>Any scene.</b> Generated voices and faces mean a new scene wouldn't need a new recording session, so players could bring their own.</li>
        </ul>
        <p>The design questions stay the same: how forgiving the AI should be, how players know when it's listening, and how to keep a free-form system pointed at a good scene. Those are the questions I've kept working on since, from <a href="project.html?p=severed-heads-united-hearts">Severed Heads, United Hearts</a> to the games I make for <a href="project.html?p=jamference">Jamference</a>.</p>`
    },
    {
      slug: "severed-heads-united-hearts",
      caseOrder: 5, company: "Mini Jam 132: Severed", role: "Game design, Unity build and AI behaviour tuning", team: "2: me + Xiaomeng Zhang", timeline: "Weekend jam (12–14 May 2023)", outcome: "A working social-deduction loop where GPT-3.5 courtiers chat, remember and vote, plus the rules I still use for tuning LLM characters", kind: "game", featured: true, year: "2023",
      title: "Severed Heads, United Hearts", award: "LLM agents as the mechanic",
      blurb: "Win over a royal court of AI agents by working out what each one wants, or lose your head to your rival Henry.",
      tags: ["LLM agents", "Social deduction", "Dialogue", "Unity"],
      image: "https://geisert.me/wp-content/uploads/2024/02/fnb5l_.png",
      links: [
        { label: "itch.io page", url: "https://dgeisert.itch.io/severed-heads-united-hearts" },
        { label: "Dev log", url: "https://dgeisert.itch.io/severed-heads-united-hearts/devlog/1789528/an-early-experiment-in-llms-in-gameplay" }
      ],
      body: `
        <p class="lede">A fight for the throne played entirely in conversation. You chat freely with three AI courtiers, each with a private grudge against your rival Henry, and after every round they vote for one of you. Win the court and Henry loses his head. Lose it and you lose yours.</p>
        <p>It was my first game where an LLM <i>is</i> the mechanic rather than a content generator: there are no dialogue trees, and the only input is what you type. Built over a weekend in May 2023, about two months after GPT-3.5 Turbo came out. The AI service it ran on has since been switched off, so this page is the record of how it worked.</p>
        <img src="devlogs/severed-heads-united-hearts/img/title-court.jpg" alt="Painted royal court: a noblewoman in a red and gold gown faces a bearded nobleman, with other courtiers watching behind them">
        <p class="note">The title screen. All the art was generated on Lexica, one image per screen and ending.</p>

        <h3>The brief</h3>
        <ul>
          <li><b>Jam:</b> Mini Jam 132, theme <b>Severed</b>, restriction <b>Multiple Endings</b>. We read "severed" two ways: cutting Henry's ties to his allies, and the heads that roll at the end.</li>
          <li><b>Team:</b> two of us. I designed the game and the courtiers, and built the Unity side: the round and timer flow, the chat UI, the voting screen and the endings. Xiaomeng Zhang built the agent layer: the prompts, each courtier's memory, JSON parsing and the vote. Both sat on the small AI Manager package I'd written to wrap OpenAI calls in Unity.</li>
          <li><b>Tech:</b> Unity with a WebGL build, GPT-3.5 Turbo for every courtier, art from Lexica and music from Strofe.</li>
          <li><b>Time:</b> first commit Friday evening, last one Sunday afternoon. 36 commits in all.</li>
        </ul>

        <h3>Design goal</h3>
        <p>Make persuasion the skill. The fantasy is court intrigue: read people, find the lever, say the right thing. Free text was the point, because the player should be able to try any argument, not pick from three we'd written. The jam restriction turned that into a question we had to design for: how do you get several clear, earned endings out of open-ended conversation?</p>

        <h3>How it plays</h3>
        <ol>
          <li><b>Name yourself.</b> The court takes an opening vote between you and Henry, so you start with a picture of who leans which way.</li>
          <li><b>Three rounds of 90 seconds.</b> Pick a courtier and talk. Each one has a one-line public hint ("Sarah wasn't invited to Henry's birthday party", "Mike and Henry argue about paying the bill", "John and Henry have different taste in food and drink") hiding a longer private description. Your job is to find the grievance and use it.</li>
          <li><b>The vote.</b> When the timer runs out, every courtier scores you against Henry from 0 to 10 and explains why. Their names slide into "Your Friends" or "Rival's Friends", and the colour shows how firm the vote is.</li>
          <li><b>The ending.</b> After the third round, the share of the court on your side picks one of five endings, from a public execution to a long and well-loved reign.</li>
        </ol>
        <img src="devlogs/severed-heads-united-hearts/img/conversation.jpg" alt="Two smiling noblewomen face each other in a candlelit palace hallway">
        <p class="note">The backdrop for every conversation: one courtier at a time, in private.</p>

        <h3>How the courtiers work</h3>
        <ul>
          <li><b>A persona with a grudge.</b> Each courtier gets a name, a private description (Mike is impulsive and naive, John is a gruff traditionalist who grumbles about the modern world) and a specific friction with Henry. The friction is the lever. Henry himself never speaks: he exists only as a name and the grudges people hold against him.</li>
          <li><b>A memory.</b> Every line you say, and every line they say back, is logged with a timestamp and sent with each call. So a courtier remembers what you promised two rounds ago, and votes on it. Memories are wiped when a new game starts.</li>
          <li><b>Actions, not just lines.</b> The model replies in JSON with a hidden reason and a list of commands: <i>speak</i>, <i>stay silent</i> or <i>leave</i>. Silence and walking out are real moves. If you push a courtier too far they can end the conversation and lock the chat.</li>
          <li><b>A forced choice.</b> The vote prompt asks for a score from 0 to 10 and forbids 5. Without that rule, a polite model sits on the fence and the vote tells the player nothing.</li>
          <li><b>Reasoning on show.</b> Each vote comes with the courtier's one-sentence reason, and that's what the scoring screen displays. It's the player's main feedback: it tells you what landed, what didn't, and what to try in the next 90 seconds.</li>
        </ul>

        <h3>Key design decisions</h3>
        <p><b>1. Hint the lever, hide the person.</b> We gave the player one line about each courtier and kept the full personality for the model. <i>Alternative:</i> show everything, which turns it into a matching puzzle; or show nothing, which turns it into guessing. The one-line hint gives a first move and leaves the rest to conversation.</p>
        <p><b>2. Short, timed rounds with a vote after each.</b> 90 seconds is enough for a couple of exchanges with one or two courtiers, so you have to choose who to work on. The vote between rounds is the feedback loop: you see who's moved and why, then go back in. <i>Alternative:</i> one long untimed chat and a single vote at the end. That has no tension and no chance to correct course.</p>
        <p><b>3. The model votes, the code decides the ending.</b> Courtiers only give a number and a reason. Code turns the numbers into a count of friends, and the count picks the ending. <i>Alternative:</i> ask the model to narrate the outcome. That's more flexible, but the endings stop being reliable or explainable, and the jam's "Multiple Endings" restriction needed endings players could aim for.</p>
        <p><b>4. Never block on the model.</b> Calls take a few seconds and sometimes fail. The send button disables while a courtier is thinking, the scoring screen says "Thinking and Voting..." as each vote arrives, and Continue unlocks once all three are in, or after 20 seconds whatever happens.</p>
        <img src="devlogs/severed-heads-united-hearts/img/ending-executed.jpg" alt="A hooded executioner in dark armour holding a huge axe, with fire behind him">
        <p class="note">The worst ending: nobody's on your side, and the court celebrates your execution.</p>

        <h3>Where the AI needed a designer</h3>
        <p>Going back through the code now, the gaps are as instructive as what worked.</p>
        <ul>
          <li><b>Personalities aren't goals.</b> The agent had a slot for a goal, and all three courtiers shipped with "No specific goal". They knew who they were and why they were cross with Henry, but not what they wanted from the next ruler. So there was nothing concrete to promise, and the best tactic was usually just being pleasant. The fix is a want for each one, ideally with a cost to giving it: Mike wants someone else to pay, John wants the old ways kept.</li>
          <li><b>The difficulty lives in the prompt.</b> Henry never campaigns, so the only force pulling courtiers back to him is how they're written. A cheerful persona plus a fairly agreeable model is easy to win over; a gruff one with real loyalty isn't. Tuning was rewriting descriptions and replaying, and with only one day to do it, it stayed rough.</li>
          <li><b>Free text needs guardrails, and we had very few.</b> Whatever the player types goes straight into the prompt, and so does the name they choose, which also appears in the vote question itself. Nothing stops a player claiming to be a courtier or writing instructions to the model. "Leave" is the only real limit, and it resets the next time you open that chat.</li>
          <li><b>Five endings, three voters.</b> The ending is picked from the share of the court that backs you. With three courtiers that share can only be 0, 1/3, 2/3 or all of them, so the middle "Neutral" ending can never be reached. The restriction asked for multiple endings and we wrote five; the maths only delivered four. A fourth courtier, or endings tied to vote counts, would fix it.</li>
          <li><b>Hand-rolled JSON.</b> 2023 models had no structured output, so we asked for JSON in the prompt and stripped trailing commas with a regex before parsing. When a reply still didn't parse, that message was simply lost.</li>
        </ul>
        <img src="devlogs/severed-heads-united-hearts/img/ending-crowned.jpg" alt="A smiling crowned couple surrounded by happy, well-dressed friends">
        <p class="note">The best ending: the whole court backs you, Henry is quietly beheaded, and you rule with friends for a long lifetime.</p>

        <h3>Then vs. now</h3>
        <p>In 2023 the hard part was getting a model to stay in character and answer in a format the game could read. Now that's solved, so if I rebuilt it I'd spend the time on design:</p>
        <ul>
          <li><b>Goals, secrets and a price.</b> Each courtier wants something specific, has something they won't admit, and gets more expensive to win if you overpromise. That turns "be nice" into actual negotiation.</li>
          <li><b>A rival who plays back.</b> Henry as an agent with his own conversations between rounds, and courtiers who talk to each other, so promises you make to one can reach the others.</li>
          <li><b>Judge separately from acting.</b> The character model chats; a separate, stricter call reads the transcript and scores the vote against each courtier's goals. Players can't talk the judge out of its rules, and a guard step catches injection and keeps the player's name as just a name.</li>
          <li><b>Structured output</b> instead of regex, with a retry, so no reply is ever lost.</li>
          <li><b>Bots to tune the difficulty.</b> As on <a href="project.html?p=london-overgrown">London Overgrown</a>, I'd have scripted players try a set of strategies (flatter, bribe, threaten, bring up the grievance) hundreds of times and tune each courtier until a smart approach wins most of the time and a lazy one doesn't.</li>
        </ul>

        <h3>What I learned</h3>
        <ul>
          <li><b>Agents need goals, not just personalities.</b> Characters with clear wants are readable, and the player can reason about them. A personality alone gives you flavour, not a puzzle.</li>
          <li><b>Hard to win, but beatable.</b> If agents agree too easily there's no tension; too stubborn and it's frustrating. That balance is the core design work, and it needs testing at volume, not a few replays.</li>
          <li><b>Show the agent's reasoning.</b> The one-line "why" on each vote did more for the player than anything else in the UI. When the AI is the opponent, its reasoning is the feedback.</li>
          <li><b>Keep the rules out of the model.</b> Let the LLM do the talking and the judging of tone, and let code own the score and the endings. The same split runs through <a href="project.html?p=hexagon-tactics">Hexagon Tactics</a>: generated flavour, authored systems.</li>
        </ul>
        <p>The itch.io page is <a href="https://dgeisert.itch.io/severed-heads-united-hearts">still up</a>, but the AI behind the courtiers is no longer active, so they no longer reply and the game can't be played as it was. The <a href="https://dgeisert.itch.io/severed-heads-united-hearts/devlog/1789528/an-early-experiment-in-llms-in-gameplay">dev log on itch.io</a> explains what changed. See also my other 2023 AI experiment, <a href="project.html?p=hexagon-tactics">Hexagon Tactics</a>, where AI generates the world, the hero and every card while you play.</p>`
    },
    {
      slug: "hexagon-tactics",
      caseOrder: 4, company: "Hugging Face Open Source AI Game Jam", role: "Game design, Unity development and the generative pipeline", team: "2: me + Xiaomeng Zhang", timeline: "48 hours (7–9 Jul 2023)", outcome: "7th of 82 ranked games, and #4 for Fun; every player got their own world, hero, enemies and card art", kind: "game", featured: true, year: "2023",
      title: "Hexagon Tactics: The Expanding Arena", award: "7th · Hugging Face AI Game Jam",
      blurb: "A hex tactics roguelite where AI generates your world, your hero, every enemy and every card, while you play.",
      tags: ["Tactics", "Roguelite", "Generative content", "Unity"],
      image: ITCH + "aW1hZ2UvMjE1NDY1Ni8xMjcwMjM4NS5wbmc=/original/jwbdMH.png",
      links: [
        { label: "Play on itch.io", url: "https://dgeisert.itch.io/hextactics" },
        { label: "Jam results", url: "https://itch.io/jam/open-source-ai-game-jam/results" },
        { label: "Dev log", url: "https://dgeisert.itch.io/hextactics/devlog/1789532/early-experiments-with-ai-image-and-text-generation-in-games" }
      ],
      body: `
        <p class="lede">You describe a world and a hero in a sentence or two. The game then writes your backstory, paints your character, names and draws every ability in your deck, and invents the enemies who live in your world. Beat them, and the arena <b>expands</b>: more hexes, a new card, and a harder wave.</p>
        <p>We built it in 48 hours for Hugging Face's first Open Source AI Game Jam in 2023, when putting live image generation inside a game was still new. It placed <b>7th of 82</b> ranked games, and <b>4th for Fun</b>. It's my clearest example of turning a raw AI capability into a mechanic, and of designing around what that capability can't do yet.</p>
        <img src="devlogs/hexagon-tactics/img/generated-cast.jpg" alt="Nine generated character portraits in an anime style: a fire princess, a white snow cat, a fighter jet, a wolf-riding ranger, a blue ogre, an armoured knight, a hunter with a staff, a horned green beast and a dark armoured boss">
        <p class="note">One player's cast, all generated: the hero from the player's own description, and eight enemies from one-line archetypes I wrote. Yes, the "fast moving fighter" is a fighter jet. More on that below.</p>

        <h3>The brief</h3>
        <ul>
          <li><b>Jam:</b> Hugging Face's Open Source AI Game Jam, 7–9 July 2023. Theme: <b>Expanding</b>. Over 1,300 people signed up and 88 games were submitted, built around open-source AI models.</li>
          <li><b>Team:</b> two of us. I designed the game and built the Unity side: the hex arena, cards, enemies, turn flow, the AI pipeline and the caching. Xiaomeng Zhang built the generation for character creation and the enemy info cards.</li>
          <li><b>Head start:</b> I'd made a small Unity kit before the jam (menus, a card system, a hex grid and an AI manager that wraps text, image and voice calls), so the first commit at lunchtime on day one already had the skeleton.</li>
          <li><b>Tech:</b> Unity 2022 (URP), with WebGL, Windows and Mac builds.</li>
        </ul>

        <h3>Design goal</h3>
        <p>Make generation <i>the reason to play</i>, not a feature bolted on. The fantasy was "a tactics game about my world": you type "a witch princess born in a volcano" and every enemy, every attack name and every card picture belongs to that story. And the theme had to be a mechanic rather than a word in the title, so the board itself grows each time you clear it.</p>

        <h3>How it plays</h3>
        <ol>
          <li><b>Create.</b> Type a world, a name and a look, or press the dice buttons and let the model suggest each one. The game generates a short backstory, your portrait, a cut-out sprite for the board and a ground texture for the arena.</li>
          <li><b>Fight.</b> Each turn you get 5 Power and a hand of cards: attacks of different strength and range, and moves of different distance. Click a card, then a hex. Then every enemy moves and attacks.</li>
          <li><b>Expand.</b> Clear the wave and ten new hexes grow onto the island, you pick a new card for your deck, and the next wave arrives. Waves climb from Minions to a mini-boss to a 500 HP final boss.</li>
        </ol>

        <h3>The generative pipeline</h3>
        <ul>
          <li><b>Text:</b> Falcon-7B-Instruct on a Hugging Face inference endpoint wrote names, backstories and appearance descriptions. If a call failed, the same prompt went to GPT-3.5, so the game never stalled on one provider.</li>
          <li><b>Images:</b> Stable Diffusion 1.5 on a rented GPU (RunPod), using one fine-tuned anime style model for everything. Character prompts were chained: the LLM described the enemy's appearance, and that description became the image prompt.</li>
          <li><b>Sprites:</b> a background-removal step cut every character out, so the same image could be a portrait on a card and a standing figure on the hex board.</li>
          <li><b>Audio:</b> MusicLM for the music, AudioLDM for sound effects, and Azure text-to-speech voices wired in for characters.</li>
        </ul>
        <img src="devlogs/hexagon-tactics/img/background-removal.jpg" alt="Two generated characters shown twice: the full Stable Diffusion image, and the same image with the background removed on a checkerboard">
        <p class="note">One generation, two uses: the full image for portraits and info cards, the cut-out as a billboard sprite on the board.</p>

        <h3>Key design decisions</h3>
        <ul>
          <li><b>I authored the mechanics; the AI generated the flavour.</b> Every enemy is one of eight archetypes I wrote with fixed stats (a Minion has 25 HP, the Glass Cannon 1 HP and 30 attack, the Boss 500 HP), and every card has fixed damage, range and cost. The model only names, describes and draws them. <i>Alternative considered:</i> letting the LLM invent stats too. That would have been more surprising, but impossible to balance in a weekend, and a 7B model's numbers can't be trusted. Keeping the rules hand-made is why it could still be fun (it ranked 4th for Fun).</li>
          <li><b>Never make the player wait.</b> Image generation took several seconds a picture, and a run needs dozens. So the game generates one wave ahead: while you fight wave one, wave two is being written and painted. Cards and enemies arrive with placeholder art and swap to their generated picture the moment it's ready. <i>Alternative:</i> a loading screen up front, which kills the "type a sentence and play" moment.</li>
          <li><b>Generate once, then cache.</b> Every image is saved to disk and reused. Near the deadline I also switched off full generation at runtime and shipped a complete pre-generated set (the fire-witch default), so the game still works when the servers are off. They are off now, and it still plays.</li>
          <li><b>One style model for everything.</b> Prompts as different as "a heavily armoured unit" and "a basic weak enemy" still had to look like one game. Locking a single fine-tuned style, plus a shared prompt frame ("a character in the centre of the frame, full body render"), did more for consistency than any amount of prompt wording.</li>
        </ul>
        <img src="devlogs/hexagon-tactics/img/generated-ability-cards.jpg" alt="Grid of 24 generated card illustrations of a fire witch, each labelled with the name the LLM gave it, such as Flame Wreath, Fireball Frenzy and Pyre's Inferno">
        <p class="note">The whole deck for one hero. The model got the fire theme every time, but look at the names: "Pyro-" over and over, "Pyro-Witch" twice, stray full stops.</p>

        <h3>Where the AI needed a designer</h3>
        <ul>
          <li><b>Ambiguous words compound down a chain.</b> I described the fast enemy as a "fast moving fighter". The LLM read <i>fighter</i> as an aircraft, named it "F-16 Viper", described a jet, and Stable Diffusion painted one. Each step was reasonable; the chain was wrong. The fix is in the prompt design: say "warrior", and pass the name and archetype into every later prompt, not just the first.</li>
          <li><b>Names converge.</b> Asking for each card's name separately gave a deck of near-identical "Pyro-" names, some naming the character rather than the ability. Generating the whole deck in one call, with the other names as context, would have made them distinct.</li>
          <li><b>Raw output needs cleaning.</b> Trailing full stops, quotation marks and the odd extra sentence all reached the screen. In a weekend I fixed the worst by hand; a production version needs a validation pass.</li>
          <li><b>Feel and balance stayed manual.</b> Card costs, enemy stats, wave order and how many hexes the arena grows were all tuned by playing.</li>
        </ul>

        <h3>Player testing &amp; results</h3>
        <p>Entries were rated by other jammers on Fun, Creativity and Theme, then judges picked from the top ten. Hexagon Tactics came <b>7th overall of 82 ranked entries</b> (3.73 from 17 ratings): <b>4th for Fun</b>, 11th for Creativity and 15th for Theme. The Fun score is the one I'm proudest of, because it says the tactics held up underneath the novelty.</p>
        <p>The comment that stuck with me came after we turned the generation servers off: <i>"Oh... I so wish I could generate my characters and such, what a shame."</i> The pre-generated set kept the game playable, but players could tell the personal part was the point.</p>

        <h3>Then vs. now</h3>
        <p>In 2023 I wrote the code and the AI lived inside the game. In 2026 it's the other way round: on games like <a href="project.html?p=starry-meows">Starry Meows</a> an agent writes the code and I direct. If I rebuilt Hexagon Tactics today:</p>
        <ul>
          <li><b>Structured output</b> would return a whole enemy (name, backstory, look) as one consistent object, which fixes the F-16 problem at the source.</li>
          <li><b>Fast image models</b> would generate in about a second, so the one-wave-ahead buffer becomes polish rather than survival.</li>
          <li><b>Reference images</b> would keep the hero looking like the same person on every card.</li>
          <li><b>Bounded generated mechanics.</b> I'd now let the model design card effects, but from a set of effect building blocks with a point budget, and with a bot playing the result to check the balance. That's the step from "AI names the cards" to "AI designs the cards" that the 2023 models couldn't support.</li>
        </ul>

        <h3>What I learned</h3>
        <ul>
          <li><b>Put the AI where variety matters and the rules where fairness matters.</b> Generated flavour, authored systems is still my starting point for any AI-native game.</li>
          <li><b>Latency is a design problem, not just an engineering one.</b> The same lesson came back a year later on Meta's <a href="project.html?p=object-locking-ai">object-locking demo</a>, where we designed the wait instead of hiding it.</li>
          <li><b>Every generated game needs an offline mode.</b> Servers cost money and get switched off. Caching and a shipped default set are why this one is still playable.</li>
        </ul>
        <p>Play it on <a href="https://dgeisert.itch.io/hextactics">itch.io</a> (the downloadable builds originally let you generate your own characters, worlds and enemies, but those services are no longer available, so it now plays with the pre-generated set; the <a href="https://dgeisert.itch.io/hextactics/devlog/1789532/early-experiments-with-ai-image-and-text-generation-in-games">dev log</a> explains what changed), or see my other 2023 AI experiment, <a href="project.html?p=severed-heads-united-hearts">Severed Heads, United Hearts</a>, where LLM agents <i>are</i> the mechanic.</p>`
    },
    {
      slug: "downriver", kind: "game", year: "2026",
      title: "Downriver", blurb: "Wilderness survival and crafting: your bush plane is down and winter is coming. Build a boat and get to Fort Calder.",
      tags: ["Survival", "Crafting"], image: ITCH + "aW1hZ2UvNTE3NDE2Ny8zMDk4NDcwNS5naWY=/original/zQhKK2.gif",
      links: [{ label: "Play", url: "https://dgeisert.itch.io/downriver" }]
    },
    {
      slug: "tea-party-defense", kind: "game", year: "2026",
      title: "Tea Party Defense", blurb: "The cutlery has to hold the table against waves of baked goods. Each tower you build makes the next one of that type cost more.",
      tags: ["Tower defence"], image: ITCH + "aW1hZ2UvNDg5NjAwNy8yOTI2ODQ5OS5wbmc=/original/cOoTpg.png",
      links: [{ label: "Play", url: "https://dgeisert.itch.io/tea-party-defense" }]
    },
    {
      slug: "trojan-general", kind: "game", year: "2026",
      title: "Trojan General", blurb: "You're secretly on the enemy's side, so deploy your own army badly enough that it loses. Made with The Play Machine.",
      tags: ["Strategy", "Inverted goal"], image: ITCH + "aW1hZ2UvNDY1MTE3Mi8yNzcxNjM0Ny5wbmc=/original/7mwF9v.png",
      links: [{ label: "Play", url: "https://dgeisert.itch.io/trojan-general" }]
    },
    {
      slug: "ballaga", kind: "game", year: "2026",
      title: "Ballaga", blurb: "Consume enemies to make power balls, then fire them back. Playable on mobile.",
      tags: ["Arcade", "Mobile"], image: ITCH + "aW1hZ2UvNDg1NTAwMC8yOTAwNTM5Ni5wbmc=/original/JLfW2K.png",
      links: [{ label: "Play", url: "https://dgeisert.itch.io/ballaga" }]
    },
    {
      slug: "island-builder", kind: "game", year: "2023",
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
      slug: "scuba-steph", kind: "game", year: "2023",
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
      slug: "jamference",
      caseOrder: 1, company: "Jamference", role: "Founder & host: briefs, rubric, Discord community, video feedback on every entry, and a game of my own every round", team: "Solo organiser", timeline: "Fortnightly since Oct 2026", outcome: "112 games in four rounds; 876 player ratings (about 9 per game); a playthrough video for every rated entry", kind: "pro", year: "2026",
      title: "Jamference", award: "Founder & host",
      blurb: "A free, fortnightly AI game jam where every brief pairs a theme with a design restriction, the players rate the games, and every entry gets a video playthrough from me.",
      tags: ["Game jam", "Creative facilitation", "Community", "Playtesting at scale"],
      image: "assets/img/jamference.gif",
      links: [
        { label: "jamference.com", url: "https://jamference.com" },
        { label: "Previous jams", url: "https://jamference.com/previous-jams.html" },
        { label: "Discord", url: "https://discord.gg/Z99aJaBMQj" }
      ],
      body: `
        <p class="lede">I founded and host Jamference, a free AI game jam on itch.io with a new round every two weeks. In under two months it has gone from nothing to <b>112 games</b>, <b>876 player ratings</b>, a small but very active Discord of 72 members, and a core of returning builders who keep placing at the top.</p>
        <h3>Why I started it</h3>
        <p>I'd been entering game jams for years. As AI tools got good, more and more of those jams started banning games made with AI. Rather than stop jamming, I set up my own: a jam where AI isn't just allowed, it's required, and everyone shows how they used it.</p>
        <h3>The brief I set myself</h3>
        <p>AI makes it easy to produce a game quickly, but quick isn't the same as fun. Without a constraint, most AI games reach for the obvious use of the technology. Without real players, nobody finds out whether the result is any good. And without a community, people make one game and disappear. I wanted a jam that fixed all three.</p>
        <h3>How I designed the jam</h3>
        <ul>
          <li><b>A theme plus a mandatory restriction.</b> The theme is optional inspiration; the restriction is not. "Movement Input Only", "Playable on Mobile", "No Text" and "Hidden Lucky Cat" each force a design decision on day one and push people past the obvious use of AI.</li>
          <li><b>Fun comes first in the rubric.</b> Entries are rated on <b>Fun, AI Use, Polish and Theme</b>, weighted equally. A technically impressive game that isn't enjoyable to play doesn't win.</li>
          <li><b>Participants rate each other.</b> Every entrant plays and scores the others, so every game is playtested by people who have just worked through the same brief.</li>
          <li><b>Open about the tools.</b> Entrants list which AI tools they used and what each one did, so the community learns what actually works.</li>
        </ul>
        <img src="devlogs/jamference/img/restriction-card-hidden-lucky-cat.png" alt="Restriction card for Jamference #4: hide a lucky cat somewhere in your game, and when the player finds it, give them a real benefit">
        <p class="note">Each restriction comes with a short card that spells out what counts. For #4, the lucky cat has to be hidden, findable without reading the source, and give the player something real.</p>
        <h3>Building the community</h3>
        <p>A jam on itch.io is a page and a deadline. What makes people come back is the people. I built Jamference around a <b>Discord</b> and around showing up for every entrant:</p>
        <ul>
          <li><b>A video playthrough of every game.</b> I record myself playing each submitted game and talk through my feedback as I go: where I got hooked, where I got confused, where I got stuck. That's 100 videos across the first three rounds. It's the single biggest reason people come back: every entrant, first-timer or regular, gets a real player's reaction to their work. And it has spread. The dedicated regulars have started giving each other the same kind of detailed feedback, so every game gets more useful notes, which brings better games and more people willing to give back. A virtuous cycle.</li>
          <li><b>Discord is where the jam lives.</b> It has 72 members, and what matters is how active they are, during rounds and between them. For the first four rounds the restriction was revealed in the Discord the second the jam opened. Questions get answered there, and late or broken submissions are sorted out case by case instead of being rejected.</li>
          <li><b>A tone that welcomes AI builders.</b> AI-made games can draw hostility elsewhere. The rules ask for constructive feedback and say plainly: don't bash anyone for how they use AI. Content rules (no NSFW, flag anything intense) keep it safe for everyone.</li>
          <li><b>Celebrating the winners.</b> Every round ends with a winners card and short videos spotlighting the top games.</li>
        </ul>
        <h3>Results</h3>
        <ul>
          <li><b>#1 Cat and Robot:</b> 36 games, 349 ratings</li>
          <li><b>#2 Crafting:</b> 37 games, 305 ratings</li>
          <li><b>#3 Great Works of Art:</b> 27 games, 222 ratings</li>
          <li><b>#4 Solarpunk:</b> 12 games so far; submissions close 20 November</li>
        </ul>
        <p>That's about <b>8 to 10 ratings per game</b> in every round, which is much higher than most jams this size, where many entries get only a handful. People don't just submit and leave; they play each other's games.</p>
        <p>The same names keep coming back and keep getting better. sykoramade won #1 and came 2nd in #2. Santo came 2nd in #1 and #3 and made the most fun game of #3. QuantumWhisker won Use of AI in #1 and came 3rd in #2. A jam that brings back its strongest builders is a jam that works.</p>
        <img src="devlogs/jamference/img/winners-card-jam-3.png" alt="Jamference #3 winners card: Starry Meows 1st, Spears of Exekias 2nd, Out of Frame 3rd, with category winners and 27 entries and 222 ratings">
        <h3>Iterating on the format</h3>
        <p>I treat the jam like a product and change it based on what each round shows:</p>
        <ul>
          <li><b>Added Theme as a rated category</b> from #3, so the theme counts without becoming compulsory.</li>
          <li><b>Clearer restriction rules.</b> Mid-way through #4 I clarified that entrants must say on their game page that a lucky cat is hidden, so raters know to look for it.</li>
          <li><b>Restriction revealed early</b> for #5, which gives people more build time without moving the deadline, and lines up with the OpenGame.io jam so one game can enter both.</li>
          <li><b>Updates welcome during rating week</b>, so feedback from the videos and ratings can go straight back into the game.</li>
          <li><b>First sponsor.</b> Xorin, an AI co-developer for Unity, is putting up $100 in prizes for #5 and $40 in credits for every entrant.</li>
        </ul>
        <h3>How AI helps me run it</h3>
        <p>I run Jamference on my own, so AI does a lot of the production. Gemini makes the animated pixel-art key art GIF for each round. Claude, working as an agent, makes the promo videos for each new round, the short videos announcing the winners and spotlighting top games, and the restriction cards. That frees my time for the parts that need a person: writing the brief, playing every game, and talking to the community.</p>
        <img src="devlogs/jamference/img/promo-video-storyboard-jam-3.png" alt="Frames from the Jamference #3 promo video: a new jam is live, the theme Great Works of Art, the restriction No Text, one week to build it with AI, join at jamference.com">
        <h3>Playing by my own rules</h3>
        <p>I make a game every round and it's rated alongside everyone else's. My Jamference #1 entry, <a href="project.html?p=kitty-kingdom">Kitty Kingdom</a>, was rated the <b>most fun game</b> of the jam, and I've kept developing it into a full roguelite. For #3's No Text rule I made <a href="project.html?p=starry-meows">Starry Meows</a>, which won the round. Entering my own jam keeps me honest about how hard the brief is.</p>
        <h3>What I've learned</h3>
        <ul>
          <li><b>Feedback is the product.</b> The rating system gets people to play each other's games, but the playthrough videos are what turn a one-off entrant into a regular.</li>
          <li><b>A good restriction is specific and checkable.</b> "No Text" works because everyone knows instantly whether they've met it.</li>
          <li><b>Model the behaviour you want.</b> Detailed feedback from the host set the standard, and the community picked it up.</li>
        </ul>
        <h3>What's next</h3>
        <p>I want Jamference to be a community that helps each other grow as AI game designers, not just a place to submit a game. Next:</p>
        <ul>
          <li><b>Get more people involved</b>, with sponsors, cross-entry with other jams like OpenGame.io, and making it an easy first jam for newcomers.</li>
          <li><b>Help the regulars win elsewhere.</b> Use Jamference as the training ground for bigger jams with large payouts, and help our builders place in them.</li>
        </ul>
        <h3>Rounds so far</h3>
        <ol>
          <li><b>Cat and Robot</b>, restriction Movement Input Only (Oct 2026)</li>
          <li><b>Crafting</b>, restriction Playable on Mobile (Oct 2026)</li>
          <li><b>Great Works of Art</b>, restriction No Text (Oct–Nov 2026)</li>
          <li><b>Solarpunk</b>, restriction Hidden Lucky Cat (Nov 2026)</li>
          <li><b>The Game is Out to Get You</b>, restriction Follow Open Game Rules (Nov–Dec 2026)</li>
        </ol>`
    },
    {
      slug: "ninja-legends",
      caseOrder: 8, company: "Coinflip Studios", role: "Co-founder, lead designer & developer", timeline: "6 months", outcome: "$1M+ revenue on Quest, Rift, Steam and PSVR", kind: "pro", year: "2019",
      title: "Ninja Legends", award: "$1M+ revenue",
      blurb: "A fast melee VR game and one of the first post-launch titles on Oculus Quest.",
      tags: ["VR", "Lead designer & dev", "Coinflip Studios"],
      image: "https://geisert.me/wp-content/uploads/2024/02/38974720_495461137852886_9102635249124245504_n.jpg",
      links: [{ label: "Meta Quest store", url: "https://www.meta.com/en-gb/experiences/2398880980156491/" }],
      body: `
        <p class="lede">I was lead designer on one of the first titles on Oculus Quest.</p>
        <h3>Spotting the opening</h3>
        <p>I was at Oculus Connect when the Quest was first shown. A standalone, six-degrees-of-freedom headset with no PC or cables was going to be a step change in how many people played VR, and most existing VR games wouldn't port to it. Back at the studio, I convinced the team to bet on it.</p>
        <h3>Getting in the room</h3>
        <p>We built an early prototype in a few weeks. I took it to a game jam hosted by Oculus, and that got us a meeting with the decision makers. We kept working to get the game into good shape for that meeting, including making sure it ran on an Oculus Go (the closest hardware we had), even though it wasn't playable there.</p>
        <h3>Shipping at launch</h3>
        <p>We got approval and Quest dev kits. Despite starting only six months earlier, we made it into the first set of games released after launch. That meant passing an eight-week testing gauntlet in which the game couldn't drop a single frame.</p>
        <h3>Result</h3>
        <p>Being early to a near-empty store paid off. The game shipped on Quest, Rift, Steam and PlayStation VR, and made over <b>$1M</b>.</p>`
    },
    {
      slug: "object-locking-ai",
      caseOrder: 7, company: "Meta Reality Labs", role: "Senior Product Design Prototyper, led prototyping", team: "6 people", timeline: "3 months", outcome: "Shown at Meta Connect; won executive buy-in for more R&D", kind: "pro", year: "2024",
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
      slug: "orion-ar-glasses",
      caseOrder: 9, company: "Meta Reality Labs", role: "Prototyping lead for Messenger & WhatsApp", timeline: "2 years", outcome: "User-study findings shaped the final messaging design on Orion", kind: "pro", year: "2023–25",
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
      slug: "colocation-systems",
      company: "Meta Reality Labs", role: "Lead designer & prototyper", outcome: "Shipped safety systems and published developer samples", kind: "pro", year: "2020–22",
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
      slug: "play-machine", kind: "product", year: "2026",
      company: "Story Machine AI", role: "Founder: product vision, UX and game-design direction", team: "Me + 1 engineer", timeline: "About 5 months (Apr–Aug 2026)", outcome: "Live with payments, multiplayer, and export to itch.io and Reddit; I shipped my own jam games with it",
      title: "The Play Machine", status: "No longer running",
      blurb: "An AI game-creation tool: describe a game, play it in seconds, keep shaping it in chat, then publish, remix or host it for up to 8 players.",
      tags: ["AI tool", "Game creation", "Founder", "Phaser / Supabase"],
      image: "assets/img/playmachine.png", fallback: LOVABLE + "playmachine-D107z2nW.jpg",
      links: [{ label: "Play a game made with it", url: "https://dgeisert.itch.io/trojan-general" }],
      body: `
        <p class="lede">The Play Machine let anyone describe a game in plain language and play it within seconds, right next to the chat. You kept shaping it by talking to it, generated the art and sound in the same window, and published it to a public page, itch.io or Reddit. <b>Role:</b> Founder, product and design · <b>Team:</b> me + one engineer · <b>Timeline:</b> about 5 months, 100+ shipped pull requests.</p>
        <h3>The problem</h3>
        <p>AI could already write a game, but for a non-coder the loop was broken: copy code into an editor, hit an error, paste the error back, lose the version that worked. The goal was to keep people in the fun part, <b>describe → play → react</b>, and hide everything else.</p>
        <h3>How it worked</h3>
        <p>The workbench is two panes: chat on the left, the live game on the right. Games run on Phaser inside a locked-down sandbox, so broken AI code can never take the page down with it.</p>
        <ul>
          <li><b>Constrained first, then free.</b> The first version used templates with named "slots" (enemy AI, waves, items) that the AI could override, which made output reliable. But templates capped what people could make, so a week in we added a <b>freeform mode</b> where the AI writes the whole game. It soon became the only way to start a project.</li>
          <li><b>Crashes are part of the design.</b> A heartbeat watchdog spots a frozen game in about 3 seconds, rolls back to the last working build and quietly asks the AI to fix its own error, up to three times, before bothering the user.</li>
          <li><b>Every prompt is a save point.</b> Each AI change is a commit. You can scrub back through history, revert, or branch a new idea without losing the old one.</li>
          <li><b>Art and audio in the same flow.</b> Generated sprites keep a shared style reference so a game looks consistent, and you can mention any asset in chat (<code>@hero</code>) to wire it in. Sound effects come from ElevenLabs.</li>
        </ul>
        <h3>Key design decisions</h3>
        <ul>
          <li><b>Balance without code.</b> The AI marks key numbers (speed, damage, spawn rate) as tunable, and a spreadsheet-style editor lets you change them directly. Re-prompting to change a number is slow and imprecise. A designer wants a slider, so we built one, and pivoted it per character for games with many units.</li>
          <li><b>Pick the device first.</b> You choose mobile portrait, mobile landscape or PC before building, and the AI writes controls and text sizes for that device instead of retrofitting touch controls later.</li>
          <li><b>Multiplayer as a setting, not a prompt.</b> Turning on multiplayer (up to 8 players) is a toggle in the workbench. Only then does the AI get the networking API. Lobbies, passwords and join tokens live outside the game, so AI-written code never handles anything sensitive.</li>
          <li><b>Reusable "packs".</b> Later we added packs: shareable bundles of code, assets and AI instructions (a leaderboard, an inventory, a character's sprite sheet) that drop into any game. Packs mount themselves, so installing one doesn't require any rewiring.</li>
        </ul>
        <h3>Directing the AI on art</h3>
        <p>Animated sprite sheets were the hardest generation problem. The image model drew the character well but got walk cycles wrong: legs that never close, frames that don't loop, leftover background colour. Rather than accept re-rolls, we wrote checks that measure each animation row (does the loop close, is the gait flat, is there stray magenta) and let users <b>redo a single row</b> for less than a full sheet, so you never pay to lose frames you already liked. Tuning the prompts meant describing poses as shapes rather than words, the same thing I do when directing an artist.</p>
        <h3>Beyond making</h3>
        <p>Finished games got a public page with ratings, reviews and threaded replies, an Explore page grouped by genre, cloud saves and leaderboards, and a <b>Remix</b> button that forks any game into your own workbench. A credit system with a daily spin and Stripe checkout tied usage to real model costs, and you could choose the model (Claude, Gemini, GPT or Grok).</p>
        <h3>Using it myself</h3>
        <p>I made my own jam games with it, including <a href="project.html?p=trojan-general">Trojan General</a>, <a href="https://dgeisert.itch.io/machine-colony" target="_blank" rel="noopener">Machine Colony</a>, <a href="https://dgeisert.itch.io/phantom-crazy" target="_blank" rel="noopener">Phantom Crazy</a> and <a href="https://dgeisert.itch.io/locked-in-the-pyramid" target="_blank" rel="noopener">Locked in the Pyramid</a>. That showed me where AI is strong at game design and where a designer still has to step in: game feel, balance, and the first 30 seconds of play. Those gaps became features, like the balance editor and device-first controls.</p>
        <h3>What I learned</h3>
        <ul>
          <li><b>Reliability is the UX.</b> Non-coders forgive a weird game, but not a blank screen. The watchdog, rollback and version history mattered more than any single generation feature.</li>
          <li><b>Give people direct handles.</b> Chat is great for "add a boss", bad for "a bit faster". The best moments came from mixing the two.</li>
          <li><b>Quality checks beat bigger prompts.</b> Measuring the output and fixing only the broken part was cheaper and more reliable than asking the model to try harder.</li>
        </ul>
        <p class="note">The Play Machine is no longer running. The games above are still playable on itch.io.</p>`
    },
    {
      slug: "story-machine-ai",
      company: "Story Machine AI", role: "Founder & CEO: product, design and architecture", team: "2 engineers and a marketer", timeline: "MVP in a month; 16 months in production", outcome: "Live users and revenue; ByteDance-backed feature film; agent-led v2", kind: "product", year: "2025–26",
      title: "Story Machine AI", award: "Founder & CEO",
      blurb: "An AI filmmaking platform where you talk to a Director that runs a crew of specialist agents, from idea to finished film with consistent characters.",
      tags: ["AI agents", "UX", "React / Supabase"],
      image: "assets/img/storymachine.png", fallback: LOVABLE + "storymachine-DQ6-jpDd.png",
      links: [{ label: "storymachine.ai", url: "https://www.storymachine.ai/welcome" }],
      body: `
        <p class="lede">I conceived, designed and architected an AI filmmaking platform that takes someone from a one-line idea to a finished film: script, consistent characters and places, shots, video, voice, music and the cut. I built the MVP in about a month, hired and led the team, and then rebuilt the product around an AI Director that you can talk to while it runs a crew of specialist agents on a shared canvas.</p>
        <h3>The UX problem</h3>
        <p>Generative tools were either low-level (one image at a time) or fully automatic (no control). Filmmakers had the models but no workflow, and the hardest part of AI film, keeping a character the same from shot to shot, was left to the user. The question I kept coming back to: how much should the AI decide, and how does a person stay in charge of the story and the money?</p>
        <h3>Version 1: a guided pipeline (2025)</h3>
        <p>The first product split filmmaking into five pages: <b>outline → assets → shots → editor → final</b>. Guided creation for beginners, deep manual control for power users.</p>
        <ul>
          <li><b>Characters, settings and objects as reusable assets</b> with version history, so they stay consistent from shot to shot.</li>
          <li><b>Rebuild on the web.</b> I threw away an early Unity version and rebuilt it in React for faster iteration and easier access.</li>
          <li><b>Separate concerns.</b> When the video editor started limiting the asset system, I split them apart.</li>
          <li><b>Swap models without changing the workflow.</b> Kling, Runway, Veo, Sora 2, Seedance, Seedream, Flux, OmniHuman lipsync and ElevenLabs voices all sit behind the same pages, so a new model is a drop-down option, not a new tool to learn.</li>
        </ul>
        <h3>Live, interactive generation</h3>
        <p>We built a live stream where viewer comments changed the generated video within about <b>6 seconds</b>, with an auto-director narrating scene changes and generated music that evolves with the story. It showed that generative storytelling can respond to its audience, and it fed straight into version 2.</p>
        <h3>Version 2: talk to a Director (2026)</h3>
        <p>Five pages made people do the project management. So I replaced them with <b>one node canvas per story</b> and a <b>Director</b> you talk to, typed or out loud. You say "make me a video about cats", it asks one question specific to your idea, then moves through <b>research → ideation → casting → locations → key shots → the cut</b>, summoning specialists as it goes: a Researcher, a Casting Director, a Location Scout, a Director of Photography, Continuity, and reviewers. Each specialist appears as a cursor that moves to the part of the canvas it is working on, so you can watch the crew work and step in anywhere.</p>
        <h3>Key design decisions</h3>
        <ul>
          <li><b>The conversation is the control plane; the canvas is the source of truth.</b> Everything the Director makes is an ordinary card you can open, edit, rewire and re-run. Nothing lives only in the chat, so a run survives closing the tab and you never lose work to the AI.</li>
          <li><b>Let the person choose how much the AI does.</b> Three involvement levels: <i>Hands on</i> (every paid step is a priced card you press), <i>Check in with me</i> (stops after the script, after the storyboard and before video) and <i>Just make it</i> (runs to a per-project spending limit). Cheap previews can run inside a small allowance, but promoting a preview to a full-quality render always shows its cost first. Autonomy without a surprise bill.</li>
          <li><b>Lock identity before spending on video.</b> Casting and location scouting present a slate of candidates. Select prepares the turnaround, expression and wardrobe sheets; Approve is the explicit paid step that locks the character. Rejected candidates stay visible but never reach a shot. This turned "keep the character consistent" from a prompting skill into a decision the user makes once.</li>
          <li><b>Show deltas, not scores.</b> The Audience Response Engine predicts second by second how a viewer's brain responds to a finished cut, then a persona panel explains the moments it flags. Every number is shown as a change against the clip's own baseline with a confidence range, and the code refuses any "score", "rating" or "grade". A single score would invite people to optimise a number instead of the film.</li>
        </ul>
        <h3>How AI was used</h3>
        <p><b>In the product:</b> every agent runs on Claude, with Gemini grounding for sourced research, a small CPU voice model so the Director can speak at no cost per reply, and world models (Reactor) for exploring a scene as a space and recording camera moves back into the cut. The Director picks from paired image and video providers on cost, speed and quality, and refunds a failed render before it ever retries.</p>
        <p><b>In the making:</b> the first version was scaffolded with Lovable, and much of version 2 was written by directing Claude and Codex. With code arriving that fast, checking it became the bottleneck, so I made the checks part of the design: an acceptance test that walks the whole Director journey from an empty story to a finished cut on a mock provider, a written contract for what a person must see in the browser at each stage, and a bug system that reads every recorded error each night, emails a report and opens a fix as a pull request that a person has to merge.</p>
        <h3>Results</h3>
        <p>We shipped to production with live users and revenue across about 2,700 commits and 16 months. We partnered with ByteDance on a feature film made in 5 weeks on a $2,500 generation budget (<a href="project.html?p=speakeasy-revenge">Speakeasy Revenge</a>), won Multimodal AI at AI Tinkerers Demopalooza by making a music video live on stage in five minutes, and built the live studio for Britain's AI Story at UKAI.</p>
        <h3>What I learned</h3>
        <ul>
          <li><b>Workflow beats models.</b> Every few weeks a better video model arrived. The value was in the structure around it: assets, approvals and a cut that survive the model being swapped.</li>
          <li><b>Autonomy is a UX setting, not a feature.</b> Beginners wanted "just make it"; filmmakers wanted to approve every frame. Making the level explicit, and tying it to money, let one product serve both.</li>
          <li><b>Make the agents visible.</b> People trusted the Director more when they could see which specialist was working, where, and why.</li>
        </ul>`
    },
    {
      slug: "another-like-that",
      company: "Story Machine AI", role: "Founder: product, design and architecture; wrote the v2 recommendations spec", team: "Me + one engineer (Adrian Albino), with Claude as a coding agent", timeline: "3 weeks to launch (Jan 2026), then 10 months of iteration", outcome: "Live on web, iOS and Android: a self-growing London catalogue, a v2 recommender with mood-based taste profiles, and an agent that fixes its own bugs", kind: "product", year: "2026",
      title: "Another Like That",
      blurb: "Find London events like the ones you already love. Live in 3 weeks, then grown into a full recommender with mood-based taste profiles, a self-growing catalogue and group planning.",
      tags: ["Recommendations", "Systems design", "AI agents"],
      image: "assets/img/anotherlikethat.png", fallback: LOVABLE + "anotherlikethat-DIMZDGCu.png",
      links: [{ label: "anotherlikethat.com", url: "https://www.anotherlikethat.com/" }],
      body: `
        <p class="lede">A live recommendation engine that helps people in London find events similar to what they already love, especially the lesser-known ones. It went from concept to live product in <b>three weeks</b>, then grew over ten months into a full discovery and group-planning app on web, iOS and Android.</p>
        <h3>The problem</h3>
        <p>London listings sites are directories: you search for what you already know about. The interesting stuff (a one-off talk in a Hackney basement, a weird immersive show) lives on small venue calendars and editors' pick lists. I wanted the opposite of a directory: start from something you loved and get <b>another like that</b>.</p>
        <h3>Modelling the messy real world</h3>
        <p>Events don't follow one pattern: one-off plays, weekly comedy nights with rotating acts, museums with fixed hours, multi-day festivals. Modelling every occurrence would have blown up the complexity, so I <b>separated venues from events</b>. That one simplification made the whole engine workable.</p>
        <h3>A catalogue that grows itself</h3>
        <ul>
          <li><b>Claude reads the web for us.</b> Scrapers pull venue and listings pages, and Claude turns them into structured events with vibe, price, setting and "good for" tags. Early on it invented image and ticket URLs, so every URL is checked against the page it came from.</li>
          <li><b>A nightly discovery agent</b> web-searches for London venues and listings we don't cover yet, dedupes them, checks their events page and adds them. High-confidence finds go live; the rest wait in an admin queue.</li>
          <li><b>Sources have tiers.</b> Editorial pick lists rank up, because that's where "cool" lives; ticketing aggregators add breadth but rank down unless another source agrees. The same event seen twice is merged, and being found in more places counts as a quality signal.</li>
          <li><b>Images are chosen, not taken.</b> Scraped pages are full of logos and banners. Candidates are ranked against the event, checked, then judged by one vision call, with an image search as the fallback. Venues also get YouTube videos so people can judge a place before they go.</li>
        </ul>
        <h3>Recommendations v2</h3>
        <p>Version 1 averaged everything you liked into one taste vector. It worked, but a user who liked theatre and hiking got a bland middle of both, and nobody had a profile until their fourth rating. I wrote a spec where every section states one decision, the reason, and the alternatives rejected, then we built it in seven phases.</p>
        <ul>
          <li><b>Taste has moods.</b> Each user gets up to three taste centroids (k-means over what they liked, weighted and time-decayed) plus a "not for me" vector. An event wins by matching one mood strongly, not by being average.</li>
          <li><b>Cold start in under a minute.</b> New visitors swipe through 12 real events, one per category, with no account needed. That spread gives the model enough to form two moods straight away, and it carries over on signup.</li>
          <li><b>Variety by design.</b> The ranker blends similarity, quality, freshness, urgency and distance, then diversifies the list by content, with at most one event per venue in the top ten.</li>
          <li><b>Room for surprise.</b> One slot in eight is a deliberate wildcard from a category you've never tried, labelled "Something different". If you keep rejecting them, you get fewer.</li>
          <li><b>Never "you already did this".</b> Anything you rated, saved, hid or added to a plan is excluded at the source, not just ranked lower. Recommending it again is the fastest way to lose trust.</li>
        </ul>
        <h3>Pages that feel alive</h3>
        <p>The home page is a stack of shelves that react to context: <b>Tonight</b> jumps to the top after 4pm, <b>Rainy-day plans</b> appears when the forecast says rain, and <b>Because you liked…</b> explains itself. Search takes plain English ("something weird and cheap in Hackney on a Tuesday night") and splits it into filters plus a meaning to match on.</p>
        <h3>Planning it together</h3>
        <p>Finding the thing is half the job; getting friends there is the other half. Outings add group chat, polls, checklists, split costs, transport and photos, with public share links for people who haven't signed up.</p>
        <h3>Measuring it</h3>
        <p>Every action that should teach the model goes through one tracking function, which feeds both analytics and the taste model. Ranking weights live in a config table, so an experiment is a new row and a feature flag rather than a deploy. An offline evaluator checks a new ranker against what people actually went on to save before it reaches anyone.</p>
        <h3>Building with AI agents</h3>
        <p>Most of the code was written with Claude, directed through a written spec and an agents guide that records our conventions and known pitfalls. Later we closed the loop: every error the product records is collapsed into a daily bug list, the safe ones go to an agent that opens a pull request or explains why it won't, and a digest arrives each morning. The lesson: the hard part isn't the agent fixing bugs, it's deciding which bugs a machine should be allowed to touch.</p>
        <h3>Design principles</h3>
        <ul><li><b>Pages should feel alive</b>, not like a static directory.</li><li><b>Don't overload the user.</b> Discovery should feel like a happy accident, not a chore.</li><li><b>Trust is structural.</b> Dead links, wrong images and repeat recommendations are bugs to design out, not to rank down.</li></ul>
        <h3>By the numbers</h3>
        <p>About 510 commits, 200+ database migrations, 34 backend functions and around 150 test files, shipped as one React codebase to the web and native iOS and Android apps.</p>`
    },
    {
      slug: "lifted-news", kind: "product", year: "2026",
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
    { slug: "live-again", kind: "film", year: "2025", title: "Live Again", video: "NWAOMwUgkpw",
      blurb: "A short film about loss, companionship and finding purpose again through an unlikely friend, made in Story Machine.",
      tags: ["Short film", "Emotional storytelling"] },
    { slug: "metaverse-dance", kind: "film", year: "2024", title: "Metaverse Dance", video: "qOpUr1h2nk0",
      blurb: "A speed test: a happy dance video made in about 45 minutes.",
      tags: ["Speed run"] },
  ],
};
