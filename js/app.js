(function () {
  const D = window.PORTFOLIO;
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const ext = (u) => /^https?:/.test(u);
  const tgt = (u) => (ext(u) ? ' target="_blank" rel="noopener"' : "");

  // Image with optional fallback; generated art tile when there is no image
  function media(p, cls) {
    if (p.video) return `<button class="yt ${cls || ""}" data-id="${p.video}" aria-label="Play ${esc(p.title)}"><img loading="lazy" src="https://i.ytimg.com/vi/${p.video}/hqdefault.jpg" alt=""><span class="play">▶</span></button>`;
    if (!p.image) return `<div class="art ${cls || ""}" data-art="${p.art || ""}"><span>${esc(p.title)}</span></div>`;
    return `<div class="img ${cls || ""}"><img loading="lazy" src="${p.image}" ${p.fallback ? `data-fallback="${p.fallback}"` : ""} alt="${esc(p.title)}"></div>`;
  }
  const tags = (p) => (p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("");
  const href = (p) => (p.body ? `project.html?p=${p.slug}` : (p.links && p.links[0] ? p.links[0].url : ""));
  const badge = (p) => (p.status ? `<div class="status">${esc(p.status)}</div>` : p.award ? `<div class="award">${esc(p.award)}</div>` : `<div class="meta">${p.year}</div>`);

  function card(p, size) {
    const h = href(p);
    if (p.kind === "film") {
      return `<article class="card film">${media(p)}<div class="body"><div class="meta">${p.year}</div><h3>${esc(p.title)}</h3><p>${esc(p.blurb)}</p><div class="tags">${tags(p)}</div></div></article>`;
    }
    if (size === "small") {
      return `<a class="card mini" href="${h}"${tgt(h)}>${media(p)}<div class="body"><h3>${esc(p.title)} <span class="yr">${p.year}</span></h3><p>${esc(p.blurb)}</p></div></a>`;
    }
    const inner = `${media(p)}<div class="body">${badge(p)}
      <h3>${esc(p.title)}</h3><p>${esc(p.blurb)}</p><div class="tags">${tags(p)}</div>
      ${h ? `<span class="go">${p.body ? "Read the case study →" : "Open →"}</span>` : ""}</div>`;
    return h ? `<a class="card" href="${h}"${tgt(h)}>${inner}</a>` : `<article class="card">${inner}</article>`;
  }

  function fill(sel, list, size) { const el = $(sel); if (el) el.innerHTML = list.map((p) => card(p, size)).join(""); }

  // Home page
  if ($("#featured-games")) {
    const P = D.projects;
    fill("#featured-games", P.filter((p) => p.kind === "game" && p.featured));
    fill("#more-games", P.filter((p) => p.kind === "game" && !p.featured), "small");
    fill("#pro", P.filter((p) => p.kind === "pro"));
    fill("#product", P.filter((p) => p.kind === "product"));
    fill("#film", P.filter((p) => p.kind === "film"));
    $("#recognition").innerHTML = D.recognition.map((r) => {
      const inner = `<b>${esc(r.title)}</b><span>${esc(r.by)}</span><small>${esc(r.note)}</small>`;
      return r.link ? `<a class="rec" href="${r.link}"${tgt(r.link)}>${inner}</a>` : `<div class="rec">${inner}</div>`;
    }).join("");
    $("#yr").textContent = new Date().getFullYear();
  }

  // Project page
  if ($("#project")) {
    const slug = new URLSearchParams(location.search).get("p");
    const p = D.projects.find((x) => x.slug === slug);
    const el = $("#project");
    if (!p) {
      el.innerHTML = `<h1>Not found</h1><p><a href="./">Back to the portfolio</a></p>`;
    } else {
      document.title = `${p.title} · David Geisert`;
      const links = (p.links || []).map((l, i) => `<a class="btn ${i ? "ghost" : ""}" href="${l.url}"${tgt(l.url)}>${esc(l.label)}</a>`).join("");
      const same = D.projects.filter((x) => x.kind === p.kind && x.slug !== p.slug && x.body).slice(0, 3);
      el.innerHTML = `
        <p class="eyebrow">${{ game: "Game", pro: "Professional work", product: "AI product", film: "AI film" }[p.kind]} · ${p.year}</p>
        <h1>${esc(p.title)}</h1>
        ${p.status ? `<div class="status big">${esc(p.status)}</div>` : p.award ? `<div class="award big">${esc(p.award)}</div>` : ""}
        <p class="sub">${esc(p.blurb)}</p>
        <div class="tags">${tags(p)}</div>
        <div class="cta">${links}</div>
        ${media(p, "hero-media")}
        <article class="prose">${p.body || ""}</article>
        ${same.length ? `<h2 class="minor">More ${p.kind === "game" ? "games" : "work"}</h2><div class="grid three">${same.map((x) => card(x)).join("")}</div>` : ""}`;
    }
  }

  // Image fallbacks (e.g. local image not yet copied into the repo)
  document.addEventListener("error", (e) => {
    const img = e.target;
    if (img.tagName === "IMG" && img.dataset.fallback && img.src !== img.dataset.fallback) img.src = img.dataset.fallback;
  }, true);
  document.querySelectorAll("img[data-fallback]").forEach((img) => { if (img.complete && !img.naturalWidth) img.src = img.dataset.fallback; });

  // Lightweight YouTube embeds
  document.addEventListener("click", (e) => {
    const b = e.target.closest(".yt");
    if (!b) return;
    b.outerHTML = `<div class="yt-frame"><iframe src="https://www.youtube-nocookie.com/embed/${b.dataset.id}?autoplay=1" title="Video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`;
  });

  // Mobile menu
  const mb = $(".menu-btn");
  if (mb) mb.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    mb.setAttribute("aria-expanded", open);
  });
  document.querySelectorAll(".links a").forEach((a) => a.addEventListener("click", () => document.body.classList.remove("menu-open")));
})();
