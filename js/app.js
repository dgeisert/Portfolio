(function () {
  const D = window.PORTFOLIO;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const ext = (u) => /^https?:/.test(u || "");
  const tgt = (u) => (ext(u) ? ' target="_blank" rel="noopener"' : "");
  const arrow = (u) => (ext(u) ? '<span aria-hidden="true">↗</span>' : '<span aria-hidden="true">→</span>');
  const KIND = { game: "Game", pro: "Professional work", product: "AI product", film: "AI film" };
  const isCase = (p) => p.caseOrder != null;

  // ---------- building blocks ----------
  function art(p, cls) {
    return `<div class="art ${cls || ""}" data-art="${esc(p.art || "")}" aria-hidden="true"><span>${esc(p.title)}</span></div>`;
  }
  function media(p, cls) {
    if (p.video) return `<button class="yt ${cls || ""}" type="button" data-id="${p.video}" aria-label="Play video: ${esc(p.title)}"><img loading="lazy" src="https://i.ytimg.com/vi/${p.video}/hqdefault.jpg" alt=""><span class="play" aria-hidden="true">▶</span></button>`;
    if (!p.image) return art(p, cls);
    return `<div class="img ${cls || ""}"><img loading="lazy" src="${p.image}" ${p.fallback ? `data-fallback="${p.fallback}"` : ""} data-title="${esc(p.title)}" alt=""></div>`;
  }
  const tags = (p, n) => (p.tags || []).slice(0, n || 99).map((t) => `<li class="tag">${esc(t)}</li>`).join("");
  const href = (p) => (p.body ? `project.html?p=${p.slug}` : p.links && p.links[0] ? p.links[0].url : "");
  const pill = (p) => (p.status ? `<span class="status">${esc(p.status)}</span>` : p.award ? `<span class="award">${esc(p.award)}</span>` : "");
  const goLabel = (p, h) => (p.body ? "Case study" : p.kind === "game" ? "Play" : "Visit") + " " + arrow(h);
  const facts = (p, withYear) => {
    const rows = [["Role", p.role], ["Team", p.team], ["Timeline", p.timeline], ["Outcome", p.outcome]];
    if (withYear) rows.unshift(["Year", p.year], ["Where", p.company]);
    return rows.filter((r) => r[1]).map((r) => `<div><dt>${r[0]}</dt><dd>${esc(r[1])}</dd></div>`).join("");
  };

  function caseRow(p) {
    const h = href(p);
    return `<article class="case">
      <a class="case-media" href="${h}" tabindex="-1" aria-hidden="true">${media(p)}</a>
      <div class="case-body">
        <p class="case-meta"><span>${esc(p.company || KIND[p.kind])}</span><span>${esc(p.year)}</span></p>
        <h3><a href="${h}">${esc(p.title)}</a></h3>
        <p class="case-blurb">${esc(p.blurb)}</p>
        <dl class="facts">${facts(p)}</dl>
        <a class="go" href="${h}" tabindex="-1" aria-hidden="true">Read the case study <span>→</span></a>
      </div>
    </article>`;
  }

  function card(p) {
    const h = href(p);
    if (p.kind === "film") {
      return `<article class="card film">${media(p)}<div class="body"><div class="badges"><span class="meta">${esc(p.year)}</span>${pill(p)}</div><h3>${esc(p.title)}</h3><p>${esc(p.blurb)}</p></div></article>`;
    }
    const inner = `${media(p)}<div class="body">
      <div class="badges"><span class="meta">${esc(p.year)}</span>${pill(p)}</div>
      <h3>${esc(p.title)}</h3><p>${esc(p.blurb)}</p>
      <ul class="tags" aria-label="Tags">${tags(p, 3)}</ul>
      ${h ? `<span class="go">${goLabel(p, h)}</span>` : ""}</div>`;
    return h ? `<a class="card" href="${h}"${tgt(h)}>${inner}</a>` : `<article class="card">${inner}</article>`;
  }

  function mini(p) {
    const h = href(p);
    return `<a class="mini" href="${h}"${tgt(h)}>
      <span class="thumb">${media(p)}</span>
      <span class="mini-text"><b>${esc(p.title)}</b><small>${esc(p.blurb)}</small></span>
      <span class="mini-meta">${esc(p.year)} ${arrow(h)}</span></a>`;
  }

  function wide(p) {
    const h = href(p);
    return `<a class="wide" href="${h}"${tgt(h)}>
      <span class="thumb">${media(p)}</span>
      <span class="wide-text"><small>Also at ${esc(p.company)} · ${esc(p.year)}</small><b>${esc(p.title)}</b><span>${esc(p.blurb)}</span></span>
      <span class="go">Case study →</span></a>`;
  }

  const fill = (sel, list, fn) => { const el = $(sel); if (el) el.innerHTML = list.map(fn).join(""); };

  // ---------- home ----------
  if ($("#cases")) {
    const P = D.projects;
    fill("#cases", P.filter(isCase).sort((a, b) => a.caseOrder - b.caseOrder), caseRow);
    fill("#more-pro", P.filter((p) => p.kind === "pro" && !isCase(p)), wide);
    fill("#featured-games", P.filter((p) => p.kind === "game" && p.featured && !isCase(p)), card);
    fill("#more-games", P.filter((p) => p.kind === "game" && !p.featured), mini);
    fill("#product", P.filter((p) => p.kind === "product" && !isCase(p)), card);
    fill("#film", P.filter((p) => p.kind === "film"), card);
    fill("#recognition", D.recognition, (r) => {
      const inner = `<b>${esc(r.title)}</b><span class="by">${esc(r.by)}</span><span class="note">${esc(r.note)}</span>`;
      return `<li>${r.link ? `<a href="${r.link}"${tgt(r.link)}>${inner}<span class="arr">${arrow(r.link)}</span></a>` : `<div>${inner}</div>`}</li>`;
    });
    const yr = $("#yr"); if (yr) yr.textContent = new Date().getFullYear();
  }

  // ---------- project page ----------
  if ($("#project")) {
    const slug = new URLSearchParams(location.search).get("p");
    const p = D.projects.find((x) => x.slug === slug);
    const el = $("#project");
    if (!p) {
      el.innerHTML = `<p class="eyebrow">Not found</p><h1>That project doesn’t exist.</h1><div class="cta"><a class="btn" href="./">Back to the portfolio</a></div>`;
    } else {
      document.title = `${p.title} · David Geisert`;
      const sec = isCase(p) ? ["work", "case studies"] : p.kind === "game" ? ["games", "games"] : p.kind === "pro" ? ["work", "work"] : ["founder", "products & films"];
      const links = (p.links || []).map((l, i) => `<a class="btn ${i ? "ghost" : ""}" href="${l.url}"${tgt(l.url)}>${esc(l.label)} ${ext(l.url) ? '<span aria-hidden="true">↗</span>' : ""}</a>`).join("");
      // reading order: case studies, then other work, then games
      const order = D.projects.filter((x) => x.body).sort((a, b) => rank(a) - rank(b));
      function rank(x) { return isCase(x) ? x.caseOrder : x.kind === "pro" ? 10 : x.kind === "product" ? 20 : 30 + D.projects.indexOf(x) / 100; }
      const i = order.indexOf(p), prev = order[i - 1], next = order[i + 1];
      const same = D.projects.filter((x) => x.kind === p.kind && x.slug !== p.slug && x.body && !isCase(x)).slice(0, 3);
      el.innerHTML = `
        <a class="back" href="./#${sec[0]}">← All ${sec[1]}</a>
        <header class="proj-head">
          <p class="eyebrow">${KIND[p.kind]}${p.company ? " · " + esc(p.company) : ""} · ${esc(p.year)}</p>
          <h1>${esc(p.title)}</h1>
          <p class="sub">${esc(p.blurb)}</p>
          ${p.status || p.award ? `<div class="badges">${pill(p)}</div>` : ""}
        </header>
        ${media(p, "hero-media")}
        <div class="proj-grid">
          <article class="prose">${p.body || ""}</article>
          <aside class="proj-facts" aria-label="Project facts">
            <dl class="facts">${facts(p, true)}</dl>
            ${p.tags && p.tags.length ? `<ul class="tags" aria-label="Tags">${tags(p)}</ul>` : ""}
            ${links ? `<div class="cta stack">${links}</div>` : ""}
          </aside>
        </div>
        <nav class="pager" aria-label="More projects">
          ${prev ? `<a class="prev" href="project.html?p=${prev.slug}"><small>← Previous</small><b>${esc(prev.title)}</b></a>` : "<span></span>"}
          ${next ? `<a class="next" href="project.html?p=${next.slug}"><small>Next →</small><b>${esc(next.title)}</b></a>` : "<span></span>"}
        </nav>
        ${same.length && !isCase(p) ? `<h2 class="minor">More ${p.kind === "game" ? "games" : "work"}</h2><div class="grid three">${same.map(card).join("")}</div>` : ""}`;
    }
  }

  // ---------- images: try fallback, then a generated art tile ----------
  function broken(img) {
    if (img.dataset.fallback && img.src !== img.dataset.fallback) { img.src = img.dataset.fallback; return; }
    const box = img.closest(".img, .yt");
    if (box && box.classList.contains("img")) {
      box.outerHTML = art({ title: img.dataset.title || "" }, box.className.replace("img", "").trim());
    } else if (img.classList.contains("hero-img")) img.style.visibility = "hidden";
  }
  document.addEventListener("error", (e) => { if (e.target.tagName === "IMG") broken(e.target); }, true);
  $$("img").forEach((img) => { if (img.complete && !img.naturalWidth && img.src) broken(img); });

  // ---------- lightweight YouTube embeds ----------
  document.addEventListener("click", (e) => {
    const b = e.target.closest(".yt");
    if (!b) return;
    b.outerHTML = `<div class="yt-frame ${b.classList.contains("hero-media") ? "hero-media" : ""}"><iframe src="https://www.youtube-nocookie.com/embed/${b.dataset.id}?autoplay=1" title="${esc(b.getAttribute("aria-label"))}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`;
  });

  // ---------- copy email ----------
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-copy]");
    if (!b || !navigator.clipboard) return;
    navigator.clipboard.writeText(b.dataset.copy).then(() => {
      const t = b.textContent; b.textContent = "Copied ✓";
      setTimeout(() => (b.textContent = t), 1600);
    });
  });

  // ---------- nav: scrolled state, mobile menu, current section ----------
  const nav = $(".nav");
  const onScroll = () => nav && nav.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  const mb = $(".menu-btn");
  const setMenu = (open) => {
    document.body.classList.toggle("menu-open", open);
    if (mb) { mb.setAttribute("aria-expanded", open); mb.setAttribute("aria-label", open ? "Close menu" : "Open menu"); }
  };
  if (mb) mb.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && document.body.classList.contains("menu-open")) { setMenu(false); mb && mb.focus(); } });
  $$(".links a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

  const navLinks = $$('.links a[href^="#"]');
  if (navLinks.length && "IntersectionObserver" in window) {
    const map = new Map(navLinks.map((a) => [a.getAttribute("href").slice(1), a]));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        navLinks.forEach((a) => a.removeAttribute("aria-current"));
        const a = map.get(en.target.id); if (a) a.setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach((s) => io.observe(s));
  }
})();
