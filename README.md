# portfolio.geisert.me

A plain HTML/CSS/JS portfolio with no build step, hosted on GitHub Pages.

```
index.html        Home page (what I bring, case studies, games, Jamference, products & films, about)
project.html      Case-study page. Opened as project.html?p=<slug>
js/data.js        ALL CONTENT: projects, awards and links. Edit this file to update the site.
js/app.js         Rendering, image fallbacks, YouTube embeds, nav and mobile menu
css/style.css     Styles: layout and components first, theme colours and type at the end
resume/           David_Geisert_Resume.pdf (linked from the nav)
assets/img/       Local images (see below)
CNAME             portfolio.geisert.me (needed for the custom domain)
```

## Add a project

Add an object to `projects` in `js/data.js`. If you include `body` (HTML), it gets a case-study page. Without one, the card links straight to the first entry in `links`. Set `featured: true` on a game to put it in the large top grid. Set `caseOrder` (plus optional `company`, `role`, `team`, `timeline`, `outcome`) to show a project in "Selected case studies".

## Images to copy over from the Lovable project

These five images exist only in the Lovable project. Until you add them, the site loads them from the old Lovable URLs as a fallback. Copy them from your Lovable repo's `src/assets/` (or save them from the live site) into `assets/img/` with these names:

| File | From the Lovable site |
|---|---|
| `profile.jpg` | /assets/profile-DqMNnW2W.jpeg |
| `storymachine.png` | /assets/storymachine-DQ6-jpDd.png |
| `anotherlikethat.png` | /assets/anotherlikethat-DIMZDGCu.png |
| `liftednews.jpg` | /assets/liftednews-DWtpbrMG.jpg |
| `playmachine.jpg` | /assets/playmachine-D107z2nW.jpg |

Also add `og.jpg` (1200×630), the social preview image used when the link is shared. A screenshot of the hero works well.

Game images are hotlinked from itch.io and geisert.me, so they update when you change them there.

## Deploy

1. **Push.** This folder is a clone of `github.com/dgeisert/Portfolio` (branch `master`). After making changes:
   ```
   git add -A && git commit -m "Update portfolio" && git push
   ```
2. **Turn on Pages.** In the repo, go to **Settings → Pages → Build and deployment**, set Source to *Deploy from a branch*, and pick `master` and `/ (root)`.
3. **Add DNS on WordPress.com.** Go to **Upgrades → Domains → geisert.me → DNS records → Add record** and add:
   - Type `CNAME` · Name `portfolio` · Value `<your-github-username>.github.io`

   This leaves geisert.me itself on WordPress. Only the `portfolio.` subdomain goes to GitHub.
4. **Set the custom domain.** Back in **Settings → Pages**, enter `portfolio.geisert.me` as the custom domain (the `CNAME` file already contains it). Wait for the DNS check to pass, then tick **Enforce HTTPS**. The certificate can take up to an hour.
5. **Optional: verify the domain.** To stop anyone else from claiming the subdomain, go to GitHub **Settings (your profile) → Pages → Add a domain** and add the TXT record it gives you on WordPress.com as well.
6. **Update links.** Point the "Portfolio" link on geisert.me, and the URLs on LinkedIn and itch.io, to `https://portfolio.geisert.me`.

## Preview locally

```
python3 -m http.server 8000   # then open http://localhost:8000
```
