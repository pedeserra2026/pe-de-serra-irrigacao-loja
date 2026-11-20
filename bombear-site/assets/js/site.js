/* Bombear — monta as páginas a partir de assets/js/conteudo.js e liga as interações.
   Não é preciso editar este arquivo para trocar textos, cores ou fotos. */
(function () {
  "use strict";
  var D = window.BOMBEAR;
  var pagina = document.body.getAttribute("data-pagina") || "inicio";
  var reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- utilitários ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function linkWhats(extra) {
    return "https://wa.me/" + encodeURIComponent(D.contato.whatsapp) +
      "?text=" + encodeURIComponent(D.contato.mensagemWhatsapp + (extra || ""));
  }
  function foto(f, classe) {
    f = f || {};
    if (f.src) {
      return '<img class="foto ' + (classe || "") + '" src="' + esc(f.src) + '" alt="' + esc(f.alt) + '" loading="lazy" decoding="async">';
    }
    return '<div class="foto-vazia ' + (classe || "") + '" role="img" aria-label="' + esc(f.alt || "Foto") + '"><span>Foto aqui · ' + esc(f.alt || "") + "</span></div>";
  }
  var ICONES = {
    whats: '<svg class="icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-12.6 7.3L3 20l1.3-5.2A8.5 8.5 0 1 1 21 11.5z"/></svg>',
    chat: '<svg class="icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16v11H8l-4 4z"/></svg>',
    seta: '<svg class="icone seta" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    diag: '<svg class="icone seta" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    chevron: '<svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
    voltar: '<svg class="icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>',
    menu: '<svg class="icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    fechar: '<svg class="icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    pin: '<svg class="icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
    fone: '<svg class="icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>',
    relogio: '<svg class="icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    insta: '<svg class="icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    face: '<svg class="icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h2z"/></svg>'
  };

  /* ---------- tema: cores e fontes vêm do arquivo de conteúdo ---------- */
  function aplicarTema() {
    var c = D.tema.cores, f = D.tema.fontes, r = document.documentElement.style;
    var mapa = { fundo: "--fundo", fundoSuave: "--fundo-suave", rodape: "--rodape", marinho: "--marinho", azul: "--azul",
      whatsapp: "--whatsapp", acento: "--acento", destaque: "--destaque", texto: "--texto", grafite: "--grafite", linha: "--linha" };
    Object.keys(mapa).forEach(function (k) { if (c[k]) r.setProperty(mapa[k], c[k]); });
    r.setProperty("--f-titulo", '"' + f.titulo + '", "Arial Black", sans-serif');
    r.setProperty("--f-corpo", '"' + f.corpo + '", Arial, sans-serif');
    r.setProperty("--f-mono", '"' + f.mono + '", ui-monospace, monospace');
    var pre = document.createElement("link"); pre.rel = "preconnect"; pre.href = "https://fonts.gstatic.com"; pre.crossOrigin = "";
    var link = document.createElement("link"); link.rel = "stylesheet"; link.href = f.googleFonts;
    document.head.appendChild(pre); document.head.appendChild(link);
  }

  /* ---------- SEO: título, descrição, Open Graph e schema.org ---------- */
  function aplicarSEO() {
    var s = D.seo[pagina] || D.seo.inicio;
    document.title = s.titulo;
    function meta(attr, nome, valor) {
      var m = document.head.querySelector("meta[" + attr + '="' + nome + '"]');
      if (!m) { m = document.createElement("meta"); m.setAttribute(attr, nome); document.head.appendChild(m); }
      m.setAttribute("content", valor);
    }
    meta("name", "description", s.descricao);
    meta("property", "og:title", s.titulo);
    meta("property", "og:description", s.descricao);
    meta("property", "og:type", "website");
    meta("property", "og:locale", "pt_BR");
    meta("property", "og:image", D.seo.imagemCompartilhamento);
    meta("name", "theme-color", D.tema.cores.marinho);

    var dias = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var horarios = D.contato.horarioConfirmado ? Object.keys(D.contato.horarios).map(function (d) {
      return { "@type": "OpeningHoursSpecification", dayOfWeek: dias[d], opens: D.contato.horarios[d][0], closes: D.contato.horarios[d][1] };
    }) : undefined;
    var ld = {
      "@context": "https://schema.org", "@type": "HomeAndConstructionBusiness",
      name: D.empresa.nomeCompleto, description: D.empresa.frase, url: D.empresa.urlSite,
      logo: D.empresa.logo, telephone: D.contato.telefone, email: D.contato.email,
      address: { "@type": "PostalAddress", streetAddress: D.contato.endereco, addressLocality: D.contato.cidade,
        addressRegion: D.contato.uf, postalCode: D.contato.cep, addressCountry: "BR" },
      openingHoursSpecification: horarios
    };
    var sc = document.createElement("script"); sc.type = "application/ld+json"; sc.textContent = JSON.stringify(ld);
    document.head.appendChild(sc);
  }

  /* ---------- aberto agora? ---------- */
  function estaAberto() {
    var h = D.contato.horarios, agora = new Date();
    var dia = h[agora.getDay()];
    if (!dia) return false;
    var min = agora.getHours() * 60 + agora.getMinutes();
    function m(t) { var p = t.split(":"); return +p[0] * 60 + +p[1]; }
    return min >= m(dia[0]) && min < m(dia[1]);
  }
  function seloAberto(textoAberto) {
    if (!D.contato.horarioConfirmado) return "";
    var a = estaAberto();
    return '<span class="selo-aberto ' + (a ? "aberto" : "fechado") + '"><span class="ponto"></span>' +
      (a ? esc(textoAberto || "Aberto agora") : "Fechado agora") + "</span>";
  }

  /* ---------- header ---------- */
  function renderHeader() {
    var subpagina = pagina !== "inicio";
    var itens = D.menu.map(function (m, i) {
      if (m.dropdown) {
        var sub = D.categorias.map(function (c) {
          return '<li><a href="index.html#cat-' + esc(c.id) + '">' + esc(c.nome) + "</a></li>";
        }).join("");
        return '<li class="nav__item" data-dropdown><button class="nav__link" type="button" aria-expanded="false" aria-controls="dd-' + i + '">' +
          esc(m.rotulo) + ICONES.chevron + '</button><ul class="dropdown" id="dd-' + i + '">' + sub + "</ul></li>";
      }
      var atual = m.pagina === pagina ? ' aria-current="page"' : "";
      return '<li class="nav__item"><a class="nav__link" href="' + esc(m.href) + '"' + atual + ">" + esc(m.rotulo) + "</a></li>";
    }).join("");

    var mobile = D.menu.map(function (m) {
      var sub = m.dropdown ? '<div class="sub">' + D.categorias.map(function (c) {
        return '<a href="index.html#cat-' + esc(c.id) + '">' + esc(c.nome) + "</a>";
      }).join("") + "</div>" : "";
      return '<li><a class="grande" href="' + esc(m.href) + '">' + esc(m.rotulo) + "</a>" + sub + "</li>";
    }).join("");

    $("#header").innerHTML =
      '<header class="header"><div class="container header__barra">' +
        '<a class="header__logo" href="index.html" aria-label="' + esc(D.empresa.nome) + ', página inicial"><img src="' + esc(D.empresa.logo) + '" alt="' + esc(D.empresa.nome) + " · " + esc(D.empresa.slogan) + '" width="180" height="51"></a>' +
        (subpagina ? '<a class="voltar" href="index.html">' + ICONES.voltar + "Voltar à página inicial</a>" : "") +
        '<nav class="nav" aria-label="Principal"><ul class="nav__lista">' + itens + "</ul>" +
        '<a class="btn btn--whats" href="' + linkWhats() + '" target="_blank" rel="noopener">' + ICONES.whats + "WhatsApp</a></nav>" +
        '<button class="hamburguer" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="menu-mobile">' + ICONES.menu + "</button>" +
      "</div></header>" +
      '<div class="menu-mobile" id="menu-mobile" role="dialog" aria-modal="true" aria-label="Menu">' +
        '<div class="menu-mobile__topo"><img src="' + esc(D.empresa.logoNegativo) + '" alt="' + esc(D.empresa.nome) + '"><button class="menu-mobile__fechar" type="button" aria-label="Fechar menu">' + ICONES.fechar + "</button></div>" +
        "<ul>" + mobile + "</ul>" +
        '<a class="btn btn--whats" href="' + linkWhats() + '" target="_blank" rel="noopener">' + ICONES.whats + "Falar no WhatsApp</a>" +
      "</div>";
  }

  function ligarHeader() {
    var header = $(".header");
    function aoRolar() { header.classList.toggle("rolou", window.scrollY > 40); }
    aoRolar(); window.addEventListener("scroll", aoRolar, { passive: true });

    $$("[data-dropdown]").forEach(function (item) {
      var botao = $("button", item);
      function abrir(sim) { item.classList.toggle("aberto", sim); botao.setAttribute("aria-expanded", sim ? "true" : "false"); }
      botao.addEventListener("click", function () { abrir(!item.classList.contains("aberto")); });
      item.addEventListener("mouseenter", function () { abrir(true); });
      item.addEventListener("mouseleave", function () { abrir(false); });
      item.addEventListener("keydown", function (e) { if (e.key === "Escape") { abrir(false); botao.focus(); } });
      item.addEventListener("focusout", function (e) { if (!item.contains(e.relatedTarget)) abrir(false); });
      $$("a", item).forEach(function (a) { a.addEventListener("click", function () { abrir(false); }); });
    });

    var menu = $("#menu-mobile"), abrirBtn = $(".hamburguer"), fecharBtn = $(".menu-mobile__fechar");
    function menuMobile(sim) {
      menu.classList.toggle("aberto", sim);
      abrirBtn.setAttribute("aria-expanded", sim ? "true" : "false");
      document.body.style.overflow = sim ? "hidden" : "";
      (sim ? fecharBtn : abrirBtn).focus();
    }
    abrirBtn.addEventListener("click", function () { menuMobile(true); });
    fecharBtn.addEventListener("click", function () { menuMobile(false); });
    menu.addEventListener("keydown", function (e) { if (e.key === "Escape") menuMobile(false); });
    $$("a", menu).forEach(function (a) { a.addEventListener("click", function () { menuMobile(false); }); });
  }

  /* ---------- rodapé ---------- */
  function renderRodape() {
    var c = D.contato;
    var nav = D.menu.filter(function (m) { return m.rotulo !== "Condomínios"; }).map(function (m) {
      return '<li><a href="' + esc(m.href) + '">' + esc(m.rotulo) + "</a></li>";
    }).join("");
    $("#rodape").innerHTML =
      '<footer class="rodape"><div class="container">' +
        '<div class="rodape__grade">' +
          "<div>" +
            '<img class="rodape__logo" src="' + esc(D.empresa.logo) + '" alt="' + esc(D.empresa.nome) + " · " + esc(D.empresa.slogan) + '" loading="lazy">' +
            "<p>" + esc(D.empresa.frase) + "</p>" +
            '<ul class="rodape__info">' +
              "<li>" + ICONES.pin + "<span>" + esc(c.endereco) + ", " + esc(c.cidade) + " — " + esc(c.uf) + ", " + esc(c.cep) + "</span></li>" +
              "<li>" + ICONES.fone + '<a href="tel:' + esc(c.telefone.replace(/\D/g, "")) + '" style="text-decoration:none">' + esc(c.telefone) + "</a></li>" +
              "<li>" + ICONES.relogio + "<span>" + esc(c.horarioTexto) + "</span></li>" +
            "</ul>" + seloAberto("Aberto agora") +
            '<div class="sociais">' +
              '<a href="' + esc(c.instagram) + '" target="_blank" rel="noopener" aria-label="Instagram da Bombear">' + ICONES.insta + "</a>" +
              '<a href="' + esc(c.facebook) + '" target="_blank" rel="noopener" aria-label="Facebook da Bombear">' + ICONES.face + "</a>" +
              '<a href="' + linkWhats() + '" target="_blank" rel="noopener" aria-label="WhatsApp da Bombear">' + ICONES.whats + "</a>" +
            "</div>" +
          "</div>" +
          '<nav aria-label="Rodapé"><p class="rodape__rotulo">Navegue</p><ul class="rodape__nav">' + nav + "</ul></nav>" +
          "<div>" +
            '<iframe class="mapa" src="' + esc(c.mapaEmbed) + '" title="Mapa da loja ' + esc(D.empresa.nome) + '" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' +
            '<a class="link-seta" href="' + esc(c.mapaRota) + '" target="_blank" rel="noopener">Ver rota no Google Maps ' + ICONES.seta + "</a>" +
          "</div>" +
        "</div>" +
        '<div class="rodape__base"><span>' + esc(D.rodape.copyright) + "</span><span>" + esc(D.empresa.razaoSocial) + " · CNPJ " + esc(D.empresa.cnpj) + "</span></div>" +
      "</div></footer>";
  }

  /* ---------- HOME ---------- */
  function renderHome() {
    var h = D.hero, q = D.quemSomosResumo, k = D.ctaContato, c = D.contato;

    var fotosHero = h.palavras.map(function (p, i) {
      return '<div class="hero__foto' + (i === 0 ? " ativa" : "") + '">' + foto(p.foto) + "</div>";
    }).join("");
    var palavras = h.palavras.map(function (p, i) {
      return '<span class="palavra-giro__item' + (i === 0 ? " ativa" : "") + '"' + (i === 0 ? "" : ' aria-hidden="true"') + '><span class="titulo-g">' + esc(p.palavra) + "</span></span>";
    }).join("");

    var abas = D.categorias.map(function (cat, i) {
      return '<button class="aba" type="button" role="tab" id="aba-' + esc(cat.id) + '" aria-controls="vitrine" aria-selected="' + (i === 0) + '" tabindex="' + (i === 0 ? 0 : -1) + '" data-i="' + i + '">' + esc(cat.nome) + "</button>";
    }).join("");
    var fotosCat = D.categorias.map(function (cat, i) {
      return '<div class="vitrine__foto' + (i === 0 ? " ativa" : "") + '">' + foto(cat.foto) + "</div>";
    }).join("");

    var lista = q.itens.map(function (it, i) {
      return '<li class="revelar"><span class="n">' + pad(i + 1) + "</span><strong>" + esc(it.titulo) + "</strong><p>" + esc(it.texto) + "</p></li>";
    }).join("");

    var marcas = D.marcas.lista.map(function (m) {
      return '<div class="marca">' + (m.logo ? '<img src="' + esc(m.logo) + '" alt="' + esc(m.nome) + '" loading="lazy">' : esc(m.nome)) + "</div>";
    }).join("");

    $("#conteudo").innerHTML =
      /* HERO */
      '<section class="hero" aria-labelledby="hero-titulo">' +
        '<div class="hero__fotos" aria-hidden="true">' + fotosHero + "</div><div class=\"hero__veu\"></div>" +
        '<div class="container hero__conteudo">' +
          '<h1 id="hero-titulo"><span class="hero__linha1">' + esc(h.linha1) + '</span><span class="sr-only"> ' + esc(h.palavras.map(function (p) { return p.palavra; }).join(", ")) + "</span>" +
          '<span class="palavra-giro" aria-hidden="true">' + palavras + "</span></h1>" +
          '<p class="lead">' + esc(h.paragrafo) + "</p>" +
          '<div class="hero__acoes">' +
            '<a class="btn btn--azul" href="' + linkWhats() + '" target="_blank" rel="noopener">' + ICONES.chat + esc(h.ctaPrincipal) + ICONES.seta + "</a>" +
            '<a class="link-seta" href="#categorias">' + esc(h.ctaSecundario) + " " + ICONES.seta + "</a>" +
          "</div>" +
        "</div>" +
        '<a class="role" href="#categorias" aria-label="Rolar para as categorias">ROLE<span class="role__linha"></span></a>' +
      "</section>" +

      /* CATEGORIAS */
      '<section class="secao" id="categorias" aria-labelledby="cat-titulo"><div class="container">' +
        '<p class="eyebrow revelar">Produtos</p>' +
        '<h2 class="titulo-m revelar" id="cat-titulo" style="margin-bottom:40px">O que tem na loja</h2>' +
        '<div class="vitrine revelar" id="vitrine" role="tabpanel" aria-live="polite">' + fotosCat + '<div class="vitrine__veu"></div>' +
          '<div class="vitrine__texto"><span class="vitrine__num"></span><h3 class="vitrine__titulo"></h3><p class="vitrine__sub"></p>' +
          '<a class="btn btn--acento vitrine__btn" href="#" target="_blank" rel="noopener">Ver produtos ' + ICONES.diag + "</a></div>" +
        "</div>" +
        '<div class="abas" role="tablist" aria-label="Categorias de produtos">' + abas + "</div>" +
      "</div></section>" +

      /* QUEM SOMOS RESUMO */
      '<section class="secao" style="background:var(--fundo-suave)" aria-labelledby="qs-titulo"><div class="container duas-col">' +
        "<div>" +
          '<p class="eyebrow revelar">' + esc(q.eyebrow) + "</p>" +
          '<h2 class="titulo-m revelar" id="qs-titulo">' + q.tituloLinhas.map(esc).join("<br>") + "</h2>" +
          '<p class="revelar" style="margin:28px 0 0;max-width:52ch">' + esc(q.paragrafo) + "</p>" +
          '<ol class="lista-num">' + lista + "</ol>" +
          '<a class="link-seta revelar" href="quem-somos.html" style="margin-top:16px">Conheça a nossa história ' + ICONES.seta + "</a>" +
        "</div>" +
        '<div class="card-foto revelar">' + foto(q.foto) + '<div class="card-foto__veu"></div>' +
          '<span class="badge-local"><span class="ponto"></span>' + esc(q.badge) + "</span>" +
          '<div class="card-foto__numero"><b>' + esc(q.numero) + "</b><span>" + esc(q.numeroUnidade) + "</span><small>" + esc(q.numeroRotulo) + "</small></div>" +
        "</div>" +
      "</div></section>" +

      /* MARCAS */
      '<section class="secao" id="marcas" aria-labelledby="marcas-titulo"><div class="container">' +
        '<div class="marcas-topo revelar"><div><p class="eyebrow">Marcas</p><h2 class="titulo-m" id="marcas-titulo" style="font-size:clamp(30px,4vw,56px)">' + esc(D.marcas.titulo) + "</h2></div>" +
        '<p style="margin:0;max-width:36ch">' + esc(D.marcas.subtitulo) + "</p></div>" +
        '<div class="marcas-grade revelar">' + marcas + "</div>" +
      "</div></section>" +

      /* CONTATO */
      '<section class="secao" id="contato" style="padding-top:0" aria-labelledby="contato-titulo"><div class="container duas-col">' +
        "<div>" +
          '<p class="eyebrow revelar">' + esc(k.eyebrow) + "</p>" +
          '<h2 class="titulo-g revelar" id="contato-titulo" style="font-size:clamp(44px,6.4vw,96px)">' + esc(k.tituloAntes) + ' <span class="sublinhado">' + esc(k.tituloDestaque) + "</span> " + esc(k.tituloDepois) + "</h2>" +
          '<p class="lead revelar" style="margin-top:28px">' + esc(k.paragrafo) + "</p>" +
          '<a class="btn btn--azul revelar" style="margin-top:32px" href="' + linkWhats() + '" target="_blank" rel="noopener">' + ICONES.whats + esc(k.botao) + ICONES.seta + "</a>" +
        "</div>" +
        '<div class="card-info revelar"><dl>' +
          '<div class="info-linha"><dt>Endereço</dt><dd>' + esc(c.endereco) + "<br>" + esc(c.cidade) + " — " + esc(c.uf) + "</dd></div>" +
          '<div class="info-linha"><dt>Telefone</dt><dd><a href="tel:' + esc(c.telefone.replace(/\D/g, "")) + '">' + esc(c.telefone) + "</a></dd></div>" +
          '<div class="info-linha"><dt>E-mail</dt><dd><a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a></dd></div>" +
          '<div class="info-linha"><dt>Horário</dt><dd>' + esc(c.horarioTexto) + "<br>" + seloAberto("Estamos abertos") + "</dd></div>" +
        "</dl></div>" +
      "</div></section>";
  }

  function ligarHero() {
    var itens = $$(".palavra-giro__item"), fotos = $$(".hero__foto");
    if (itens.length < 2 || reduzMovimento) return;
    var i = 0;
    setInterval(function () {
      var atual = itens[i];
      atual.classList.remove("ativa"); atual.classList.add("saindo");
      fotos[i] && fotos[i].classList.remove("ativa");
      setTimeout(function () { atual.classList.remove("saindo"); }, 700);
      i = (i + 1) % itens.length;
      itens[i].classList.add("ativa");
      fotos[i] && fotos[i].classList.add("ativa");
    }, 3000);
  }

  function ligarCategorias() {
    var abas = $$(".aba"), fotos = $$(".vitrine__foto"), texto = $(".vitrine__texto");
    if (!abas.length) return;
    var atual = -1, timer = null, pausado = false;

    function mostrar(i, focar) {
      if (i === atual) return;
      var cat = D.categorias[i];
      abas.forEach(function (a, j) {
        a.setAttribute("aria-selected", j === i ? "true" : "false");
        a.tabIndex = j === i ? 0 : -1;
      });
      fotos.forEach(function (f, j) { f.classList.toggle("ativa", j === i); });
      $("#vitrine").setAttribute("aria-labelledby", "aba-" + cat.id);
      function trocar() {
        $(".vitrine__num", texto).textContent = pad(i + 1) + " / " + pad(D.categorias.length);
        $(".vitrine__titulo", texto).textContent = cat.nome;
        $(".vitrine__sub", texto).textContent = cat.subtitulo;
        $(".vitrine__btn", texto).href = linkWhats(cat.nome.toLowerCase() + ".");
        texto.classList.remove("trocando");
      }
      if (atual === -1 || reduzMovimento) { trocar(); } else { texto.classList.add("trocando"); setTimeout(trocar, 300); }
      atual = i;
      if (focar) abas[i].focus();
      abas[i].scrollIntoView({ block: "nearest", inline: "nearest", behavior: reduzMovimento ? "auto" : "smooth" });
    }

    abas.forEach(function (a, i) {
      a.addEventListener("click", function () { mostrar(i); reiniciar(); });
      a.addEventListener("keydown", function (e) {
        var n = abas.length, alvo = null;
        if (e.key === "ArrowRight") alvo = (i + 1) % n;
        if (e.key === "ArrowLeft") alvo = (i - 1 + n) % n;
        if (e.key === "Home") alvo = 0;
        if (e.key === "End") alvo = n - 1;
        if (alvo !== null) { e.preventDefault(); mostrar(alvo, true); reiniciar(); }
      });
    });

    function reiniciar() {
      clearInterval(timer);
      if (reduzMovimento) return;
      timer = setInterval(function () { if (!pausado) mostrar((atual + 1) % abas.length); }, 6000);
    }
    var area = $("#categorias");
    area.addEventListener("mouseenter", function () { pausado = true; });
    area.addEventListener("mouseleave", function () { pausado = false; });
    area.addEventListener("focusin", function () { pausado = true; });
    area.addEventListener("focusout", function (e) { if (!area.contains(e.relatedTarget)) pausado = false; });

    function pelaHash() {
      var m = location.hash.match(/^#cat-(.+)$/);
      if (!m) return false;
      var idx = D.categorias.findIndex(function (c) { return c.id === m[1]; });
      if (idx < 0) return false;
      mostrar(idx);
      area.scrollIntoView({ behavior: reduzMovimento ? "auto" : "smooth" });
      return true;
    }
    window.addEventListener("hashchange", function () { if (pelaHash()) reiniciar(); });
    if (!pelaHash()) mostrar(0);
    reiniciar();
  }

  /* ---------- QUEM SOMOS ---------- */
  function renderQuemSomos() {
    var p = D.paginaQuemSomos;
    var fotos = p.fotos.concat(p.fotos).map(function (f, i) {
      return '<div class="faixa-fotos__item"' + (i >= p.fotos.length ? ' aria-hidden="true"' : "") + ">" + foto(f) + "</div>";
    }).join("");
    var pilares = p.pilares.map(function (it, i) {
      return '<div class="pilar revelar"><span class="n">' + pad(i + 1) + '</span><h3 class="titulo-p">' + esc(it.titulo) + "</h3><p>" + esc(it.texto) + "</p></div>";
    }).join("");
    $("#conteudo").innerHTML =
      '<section class="topo-pagina"><div class="container">' +
        '<p class="eyebrow">' + esc(p.eyebrow) + "</p>" +
        '<h1 class="titulo-g">' + p.tituloLinhas.map(esc).join("<br>") + "</h1>" +
        '<p class="lead" style="margin-top:28px;max-width:56ch">' + esc(p.intro) + "</p>" +
      "</div></section>" +
      '<div class="faixa-fotos" aria-label="Fotos da loja"><div class="faixa-fotos__trilho">' + fotos + "</div></div>" +
      '<section class="secao"><div class="container"><div class="pilares">' + pilares + "</div>" +
        '<div style="margin-top:48px;display:flex;flex-wrap:wrap;gap:12px 28px;align-items:center">' +
          '<a class="btn btn--azul" href="' + linkWhats() + '" target="_blank" rel="noopener">' + ICONES.chat + "Falar com a Bombear" + ICONES.seta + "</a>" +
          '<a class="link-seta" href="index.html#categorias">Ver categorias ' + ICONES.seta + "</a>" +
        "</div>" +
      "</div></section>";
  }

  /* ---------- CONDOMÍNIOS ---------- */
  function letrasEscalonadas(linhas) {
    var atraso = 0;
    return linhas.map(function (linha) {
      return linha.split(" ").map(function (palavra) {
        var html = '<span style="display:inline-block;white-space:nowrap">' + palavra.split("").map(function (l) {
          atraso += 0.025;
          return '<span class="letra" style="animation-delay:' + atraso.toFixed(3) + 's">' + esc(l) + "</span>";
        }).join("") + "</span>";
        atraso += 0.04;
        return html;
      }).join(" ");
    }).join("<br>");
  }
  function renderCondominios() {
    var p = D.paginaCondominios;
    var areas = p.areas.map(function (a, i) {
      return '<div class="area revelar"><span class="n">' + pad(i + 1) + '</span><h3 class="titulo-p">' + esc(a.titulo) + "</h3><p>" + esc(a.texto) + "</p></div>";
    }).join("");
    $("#conteudo").innerHTML =
      '<section class="hero-cond" aria-labelledby="cond-titulo">' +
        '<div class="hero-cond__foto" aria-hidden="true">' + foto(p.foto) + "</div>" +
        '<div class="hero-cond__veu"></div>' +
        '<img class="hero-cond__simbolo" src="' + esc(D.empresa.simboloNegativo) + '" alt="" aria-hidden="true">' +
        '<div class="container">' +
          '<p class="eyebrow eyebrow--traco">' + esc(p.eyebrow) + "</p>" +
          '<h1 class="titulo-g" id="cond-titulo" aria-label="' + esc(p.tituloLinhas.join(" ")) + '"><span aria-hidden="true">' + letrasEscalonadas(p.tituloLinhas) + "</span></h1>" +
          '<p class="lead">' + esc(p.subtitulo) + "</p>" +
          '<a class="btn btn--whats" style="margin-top:32px" href="' + linkWhats("o condomínio ") + '" target="_blank" rel="noopener">' + ICONES.whats + "Pedir cotação" + ICONES.seta + "</a>" +
        "</div>" +
      "</section>" +
      '<section class="secao"><div class="container">' +
        '<p class="eyebrow revelar">Condomínios</p>' +
        '<h2 class="titulo-m revelar">' + esc(p.areasTitulo) + "</h2>" +
        '<div class="areas">' + areas + "</div>" +
      "</div></section>" +
      '<section class="secao" style="padding-top:0"><div class="container">' +
        '<div class="cta-card revelar"><img src="' + esc(D.empresa.simbolo) + '" alt="" aria-hidden="true">' +
          "<p>" + esc(p.ctaTexto) + "</p>" +
          '<a class="btn btn--azul" href="' + linkWhats("o condomínio ") + '" target="_blank" rel="noopener">' + ICONES.chat + esc(p.ctaBotao) + ICONES.seta + "</a>" +
        "</div>" +
      "</div></section>";
  }

  /* ---------- revelar ao rolar ---------- */
  function ligarRevelar() {
    var els = $$(".revelar");
    if (reduzMovimento || !("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("visivel"); }); return; }
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visivel"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    els.forEach(function (e, i) { e.style.transitionDelay = ((i % 4) * 80) + "ms"; io.observe(e); });
  }

  /* ---------- início ---------- */
  aplicarTema();
  aplicarSEO();
  renderHeader();
  if (pagina === "inicio") renderHome();
  if (pagina === "quemSomos") renderQuemSomos();
  if (pagina === "condominios") renderCondominios();
  renderRodape();
  ligarHeader();
  if (pagina === "inicio") { ligarHero(); ligarCategorias(); }
  ligarRevelar();
})();
