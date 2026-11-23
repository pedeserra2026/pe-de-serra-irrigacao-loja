/* Bombear — monta as páginas a partir de assets/js/conteudo.js e liga as interações.
   Não é preciso editar este arquivo para trocar textos, cores ou fotos. */
(function () {
  "use strict";
  var D = window.BOMBEAR;
  var pagina = document.body.getAttribute("data-pagina") || window.BOMBEAR_PAGINA || "inicio";
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
  function foto(f, eager) {
    f = f || {};
    if (f.src) {
      return '<img class="foto" src="' + esc(f.src) + '" alt="' + esc(f.alt) + '"' + (eager ? "" : ' loading="lazy"') + ' decoding="async">';
    }
    return '<div class="foto-vazia" role="img" aria-label="' + esc(f.alt || "Foto") + '"><span>Foto aqui · ' + esc(f.alt || "") + "</span></div>";
  }
  function svg(corpo, classe, sw) {
    return '<svg class="' + (classe || "icone") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + (sw || 2) + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + corpo + "</svg>";
  }
  var ICONES = {
    whats: svg('<path d="M21 11.5a8.4 8.4 0 0 1-12.6 7.3L3 20l1.3-5.2A8.5 8.5 0 1 1 21 11.5z"/>'),
    chat: svg('<path d="M4 5h16v11H8l-4 4z"/>'),
    seta: svg('<path d="M5 12h14M13 6l6 6-6 6"/>', "icone seta", 2.2),
    diag: svg('<path d="M7 17 17 7M8 7h9v9"/>', "icone seta", 2.2),
    check: svg('<path d="M20 6 9 17l-5-5"/>', "icone", 2.5),
    chevron: svg('<path d="m6 9 6 6 6-6"/>', "chevron", 2.4),
    voltar: svg('<path d="M19 12H5M11 18l-6-6 6-6"/>'),
    menu: svg('<path d="M4 7h16M4 12h16M4 17h16"/>'),
    fechar: svg('<path d="M6 6l12 12M18 6 6 18"/>'),
    pin: svg('<path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>'),
    fone: svg('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>'),
    relogio: svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    insta: svg('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>'),
    face: svg('<path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h2z"/>'),
    /* ícones dos pilares, desenhados no traço da marca */
    gota: svg('<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>', "pilar__icone", 1.6),
    lista: svg('<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6h.01M4 12h.01M4 18h.01"/>', "pilar__icone", 1.6),
    bomba: svg('<circle cx="9" cy="13" r="5"/><path d="M14 13h7M17 9v8M9 8V4h4"/>', "pilar__icone", 1.6),
    casa: svg('<path d="M4 20V10l8-6 8 6v10"/><path d="M9 20v-5h6v5"/>', "pilar__icone", 1.6)
  };
  /* contorno da casa do símbolo (mesmo desenho do logo), em volta da foto do topo */
  var CONTORNO_CASA = '<svg class="casa__contorno" viewBox="0 0 100 106" preserveAspectRatio="none" aria-hidden="true">' +
    '<path d="M38 104H3V42L50 3L97 42V104H62" fill="none" stroke="currentColor" stroke-width="1.6" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* ---------- tema: cores e fontes vêm do arquivo de conteúdo ---------- */
  function aplicarTema() {
    var c = D.tema.cores, f = D.tema.fontes, r = document.documentElement.style;
    var mapa = { fundo: "--fundo", fundoSuave: "--fundo-suave", rodape: "--rodape", marinho: "--marinho", azul: "--azul",
      whatsapp: "--whatsapp", acento: "--acento", destaque: "--destaque", texto: "--texto", grafite: "--grafite", linha: "--linha" };
    Object.keys(mapa).forEach(function (k) { if (c[k]) r.setProperty(mapa[k], c[k]); });
    r.setProperty("--f-titulo", '"' + f.titulo + '", "Arial Black", sans-serif');
    r.setProperty("--f-corpo", '"' + f.corpo + '", Arial, sans-serif');
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

  /* ---------- aberto agora? (só com horário confirmado) ---------- */
  function estaAberto() {
    /* Sempre no horário da loja (Fortaleza), não no relógio de quem visita */
    var h = D.contato.horarios, partes = {};
    new Intl.DateTimeFormat("en-US", { timeZone: "America/Fortaleza", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" })
      .formatToParts(new Date()).forEach(function (p) { partes[p.type] = p.value; });
    var dia = h[["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(partes.weekday)];
    if (!dia) return false;
    var min = (+partes.hour) * 60 + (+partes.minute);
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
        '<a class="header__logo" href="index.html" aria-label="' + esc(D.empresa.nome) + ', página inicial"><img src="' + esc(D.empresa.logo) + '" alt="' + esc(D.empresa.nome) + " · " + esc(D.empresa.slogan) + '" width="155" height="44"></a>' +
        (subpagina ? '<a class="voltar" href="index.html">' + ICONES.voltar + "Voltar à página inicial</a>" : "") +
        '<nav class="nav" aria-label="Principal"><ul class="nav__lista">' + itens + "</ul>" +
        '<a class="btn btn--whats" href="' + linkWhats() + '" target="_blank" rel="noopener">' + ICONES.whats + "WhatsApp</a></nav>" +
        '<button class="hamburguer" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="menu-mobile">' + ICONES.menu + "</button>" +
      "</div></header>" +
      '<div class="menu-mobile" id="menu-mobile" role="dialog" aria-modal="true" aria-label="Menu">' +
        '<div class="menu-mobile__topo"><img src="' + esc(D.empresa.logo) + '" alt="' + esc(D.empresa.nome) + '"><button class="menu-mobile__fechar" type="button" aria-label="Fechar menu">' + ICONES.fechar + "</button></div>" +
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
    var nav = D.menu.map(function (m) {
      return '<li><a href="' + esc(m.href) + '">' + esc(m.rotulo) + "</a></li>";
    }).join("");
    var mapa = c.mapaEmbed
      ? '<iframe class="mapa" src="' + esc(c.mapaEmbed) + '" title="Mapa da loja ' + esc(D.empresa.nome) + '" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
      : '<a class="mapa mapa--link" href="' + esc(c.mapaRota) + '" target="_blank" rel="noopener">' + ICONES.pin + "<span>" + esc(c.endereco) + "<br>" + esc(c.cidade) + " — " + esc(c.uf) + "</span></a>";
    $("#rodape").innerHTML =
      '<footer class="rodape"><div class="container">' +
        '<div class="rodape__grade">' +
          "<div>" +
            '<img class="rodape__logo" src="' + esc(D.empresa.logoNegativo) + '" alt="' + esc(D.empresa.nome) + " · " + esc(D.empresa.slogan) + '" loading="lazy">' +
            "<p>" + esc(D.empresa.frase) + "</p>" +
            '<ul class="rodape__info">' +
              "<li>" + ICONES.pin + "<span>" + esc(c.endereco) + ", " + esc(c.cidade) + " — " + esc(c.uf) + ", " + esc(c.cep) + "</span></li>" +
              "<li>" + ICONES.fone + '<a href="tel:' + esc(c.telefone.replace(/\D/g, "")) + '">' + esc(c.telefone) + "</a></li>" +
              "<li>" + ICONES.relogio + "<span>" + esc(c.horarioTexto) + "</span></li>" +
            "</ul>" + seloAberto("Aberto agora") +
            '<div class="sociais">' +
              '<a href="' + esc(c.instagram) + '" target="_blank" rel="noopener" aria-label="Instagram da Bombear">' + ICONES.insta + "</a>" +
              '<a href="' + esc(c.facebook) + '" target="_blank" rel="noopener" aria-label="Facebook da Bombear">' + ICONES.face + "</a>" +
              '<a href="' + linkWhats() + '" target="_blank" rel="noopener" aria-label="WhatsApp da Bombear">' + ICONES.whats + "</a>" +
            "</div>" +
          "</div>" +
          '<nav aria-label="Rodapé"><p class="rodape__rotulo">Navegue</p><ul class="rodape__nav">' + nav + "</ul></nav>" +
          "<div>" + mapa +
            '<a class="link-seta" href="' + esc(c.mapaRota) + '" target="_blank" rel="noopener">Ver rota no Google Maps ' + ICONES.seta + "</a>" +
          "</div>" +
        "</div>" +
        '<div class="rodape__base"><span>' + esc(D.rodape.copyright) + "</span><span>" + esc(D.empresa.razaoSocial) + " · CNPJ " + esc(D.empresa.cnpj) + "</span></div>" +
      "</div></footer>";
  }

  /* ---------- blocos reutilizados ---------- */
  function casaComFotos(fotos, legendas) {
    return '<div class="casa">' + CONTORNO_CASA +
      '<div class="casa__fotos">' + fotos.map(function (f, i) {
        return '<div class="casa__foto' + (i === 0 ? " ativa" : "") + '">' + foto(f, i === 0) + "</div>";
      }).join("") + "</div>" +
      (legendas ? '<span class="casa__legenda" aria-hidden="true">' + esc(legendas[0]) + "</span>" : "") +
    "</div>";
  }

  function blocoContato() {
    var k = D.ctaContato, c = D.contato;
    return '<section class="contato secao" id="contato" aria-labelledby="contato-titulo">' +
      '<img class="contato__simbolo" src="' + esc(D.empresa.simboloNegativo) + '" alt="" aria-hidden="true">' +
      '<div class="container" style="position:relative">' +
        '<p class="rotulo">' + esc(k.eyebrow) + "</p>" +
        '<h2 class="titulo-g" id="contato-titulo">' + esc(k.tituloAntes) + " <em>" + esc(k.tituloDestaque) + "</em> " + esc(k.tituloDepois) + "</h2>" +
        '<p class="lead">' + esc(k.paragrafo) + "</p>" +
        '<div class="contato__acoes"><a class="btn btn--whats" href="' + linkWhats() + '" target="_blank" rel="noopener">' + ICONES.whats + esc(k.botao) + ICONES.seta + "</a></div>" +
        '<dl class="contato__info">' +
          "<div><dt>Endereço</dt><dd>" + esc(c.endereco) + "<br>" + esc(c.cidade) + " — " + esc(c.uf) + "</dd></div>" +
          '<div><dt>Telefone</dt><dd><a href="tel:' + esc(c.telefone.replace(/\D/g, "")) + '">' + esc(c.telefone) + "</a></dd></div>" +
          '<div><dt>E-mail</dt><dd><a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a></dd></div>" +
          "<div><dt>Horário</dt><dd>" + esc(c.horarioTexto) + "<br>" + seloAberto("Estamos abertos") + "</dd></div>" +
        "</dl>" +
      "</div></section>";
  }

  /* ---------- HOME ---------- */
  function renderHome() {
    var h = D.hero, q = D.quemSomosResumo;

    var palavras = h.palavras.map(function (p, i) {
      return '<span class="agua__item' + (i === 0 ? " ativa" : "") + '">' + esc(p.palavra) + '<span class="agua__cheia">' + esc(p.palavra) + "</span></span>";
    }).join("");

    var paineis = D.categorias.map(function (cat, i) {
      return '<div class="painel' + (i === 0 ? " ativo" : "") + '" id="cat-' + esc(cat.id) + '" data-i="' + i + '">' +
        '<div class="painel__foto">' + foto(cat.foto) + '</div><div class="painel__veu"></div>' +
        '<button class="painel__botao" type="button" aria-expanded="' + (i === 0) + '" aria-controls="cat-conteudo-' + i + '"><span>' + esc(cat.nome) + "</span></button>" +
        '<div class="painel__conteudo" id="cat-conteudo-' + i + '">' +
          '<span class="painel__num">' + pad(i + 1) + " / " + pad(D.categorias.length) + "</span>" +
          '<h3 class="painel__titulo">' + esc(cat.nome) + "</h3>" +
          '<p class="painel__sub">' + esc(cat.subtitulo) + "</p>" +
          '<a class="btn btn--claro" href="' + linkWhats(cat.nome.toLowerCase() + ".") + '" target="_blank" rel="noopener"' + (i === 0 ? "" : ' tabindex="-1"') + ">Ver produtos " + ICONES.diag + "</a>" +
        "</div>" +
      "</div>";
    }).join("");

    var processo = q.itens.map(function (it, i) {
      return '<li><span class="conexao" aria-hidden="true">' + (i + 1) + '</span><h3 class="titulo-p">' + esc(it.titulo) + "</h3><p>" + esc(it.texto) + "</p></li>";
    }).join("");

    var marcas = D.marcas.lista.map(function (m) {
      return '<li class="marca">' + (m.logo ? '<img src="' + esc(m.logo) + '" alt="' + esc(m.nome) + '" loading="lazy">' : esc(m.nome)) + "</li>";
    }).join("");

    $("#conteudo").innerHTML =
      /* TOPO */
      '<section class="hero" aria-labelledby="hero-titulo"><div class="container hero__grade">' +
        "<div>" +
          '<h1 id="hero-titulo"><span class="hero__linha1">' + esc(h.linha1) + "</span>" +
          '<span class="sr-only">' + esc(h.palavras.map(function (p) { return p.palavra; }).join(", ")) + "</span>" +
          '<span class="agua" aria-hidden="true">' + palavras + "</span></h1>" +
          '<p class="lead">' + esc(h.paragrafo) + "</p>" +
          '<div class="hero__acoes">' +
            '<a class="btn btn--azul" href="' + linkWhats() + '" target="_blank" rel="noopener">' + ICONES.chat + esc(h.ctaPrincipal) + ICONES.seta + "</a>" +
            '<a class="btn btn--contorno" href="#categorias">' + esc(h.ctaSecundario) + "</a>" +
          "</div>" +
        "</div>" +
        casaComFotos(h.palavras.map(function (p) { return p.foto; }), h.palavras.map(function (p) { return p.palavra; })) +
      "</div></section>" +

      /* CATEGORIAS */
      '<section class="secao" id="categorias" style="padding-top:0" aria-labelledby="cat-titulo"><div class="container">' +
        '<div class="cat-topo"><div><p class="rotulo">Produtos</p><h2 class="titulo-m" id="cat-titulo">O que tem na loja</h2></div>' +
        "</div>" +
        '<div class="sanfona">' + paineis + "</div>" +
      "</div></section>" +

      /* QUEM SOMOS */
      '<section class="secao" style="background:var(--fundo-suave)" aria-labelledby="qs-titulo"><div class="container">' +
        '<div class="qs-topo"><div><p class="rotulo">' + esc(q.eyebrow) + '</p><h2 class="titulo-m" id="qs-titulo">' + esc(q.titulo) + "</h2></div>" +
        '<div><p style="margin:0">' + esc(q.paragrafo) + '</p><a class="link-seta" href="quem-somos.html">Conheça a nossa história ' + ICONES.seta + "</a></div></div>" +
        '<h3 class="sr-only">' + esc(q.processoTitulo) + "</h3>" +
        '<ol class="processo">' + processo + "</ol>" +
      "</div></section>" +

      /* MARCAS */
      '<section class="marcas" id="marcas" aria-labelledby="marcas-titulo"><div class="container marcas__grade">' +
        '<div><p class="rotulo">Marcas</p><h2 class="titulo-p" id="marcas-titulo" style="font-size:clamp(24px,2.4vw,32px)">' + esc(D.marcas.titulo) + '</h2><p style="margin:10px 0 0;font-size:16px">' + esc(D.marcas.subtitulo) + "</p></div>" +
        '<ul class="marcas__lista">' + marcas + "</ul>" +
      "</div></section>" +

      blocoContato();
  }

  /* Topo: a palavra enche de água e a foto sobe dentro da casa, a cada 4 s */
  function ligarHero() {
    var itens = $$(".agua__item"), fotos = $$(".casa__foto"), legenda = $(".casa__legenda");
    if (!itens.length) return;
    requestAnimationFrame(function () { requestAnimationFrame(function () { itens[0].classList.add("cheio"); }); });
    if (itens.length < 2 || reduzMovimento) { itens[0].classList.add("cheio"); return; }
    var i = 0;
    setInterval(function () {
      var velho = itens[i], fotoVelha = fotos[i];
      velho.classList.add("esvaziando");
      i = (i + 1) % itens.length;
      setTimeout(function () {
        velho.classList.remove("ativa", "cheio", "esvaziando");
        itens[i].classList.add("ativa");
        requestAnimationFrame(function () { requestAnimationFrame(function () { itens[i].classList.add("cheio"); }); });
        fotos.forEach(function (f) { f.classList.remove("anterior"); });
        if (fotoVelha) { fotoVelha.classList.remove("ativa"); fotoVelha.classList.add("anterior"); }
        if (fotos[i]) fotos[i].classList.add("ativa");
        if (legenda) legenda.textContent = D.hero.palavras[i].palavra;
      }, 500);
    }, 4000);
  }

  /* Categorias: sanfona. Sem troca automática e sem rolar a página. */
  function ligarCategorias() {
    var paineis = $$(".painel");
    if (!paineis.length) return;
    function abrir(i, focar) {
      paineis.forEach(function (p, j) {
        var ativo = j === i;
        p.classList.toggle("ativo", ativo);
        $(".painel__botao", p).setAttribute("aria-expanded", ativo ? "true" : "false");
        $(".painel__conteudo a", p).tabIndex = ativo ? 0 : -1;
      });
      if (focar) $(".painel__conteudo a", paineis[i]).focus({ preventScroll: true });
    }
    paineis.forEach(function (p, i) {
      $(".painel__botao", p).addEventListener("click", function () { abrir(i, true); });
    });
    function pelaHash() {
      var m = location.hash.match(/^#cat-(.+)$/);
      if (!m) return;
      var idx = D.categorias.findIndex(function (c) { return c.id === m[1]; });
      if (idx < 0) return;
      abrir(idx);
      $("#categorias").scrollIntoView({ behavior: reduzMovimento ? "auto" : "smooth" });
    }
    window.addEventListener("hashchange", pelaHash);
    pelaHash();
  }

  /* ---------- QUEM SOMOS ---------- */
  function renderQuemSomos() {
    var p = D.paginaQuemSomos;
    var icones = [ICONES.gota, ICONES.lista, ICONES.bomba, ICONES.casa];
    var fotos = p.fotos.map(function (f) { return "<div>" + foto(f) + "</div>"; }).join("");
    var pilares = p.pilares.map(function (it, i) {
      return '<li class="pilar">' + (icones[i] || ICONES.gota) + '<h3 class="titulo-p">' + esc(it.titulo) + "</h3><p>" + esc(it.texto) + "</p></li>";
    }).join("");
    $("#conteudo").innerHTML =
      '<section class="topo-pagina"><div class="container">' +
        '<p class="rotulo">' + esc(p.eyebrow) + "</p>" +
        '<h1 class="titulo-g" style="max-width:16ch">' + esc(p.titulo) + "</h1>" +
        '<p class="lead" style="margin-top:24px;max-width:58ch">' + esc(p.intro) + "</p>" +
      "</div></section>" +
      '<div class="container"><div class="mosaico">' + fotos + "</div></div>" +
      '<section class="secao"><div class="container">' +
        '<ul class="pilares">' + pilares + "</ul>" +
        '<div style="margin-top:56px;display:flex;flex-wrap:wrap;gap:12px;align-items:center">' +
          '<a class="btn btn--azul" href="' + linkWhats() + '" target="_blank" rel="noopener">' + ICONES.chat + "Falar com a Bombear" + ICONES.seta + "</a>" +
          '<a class="btn btn--contorno" href="index.html#categorias">Ver categorias</a>' +
        "</div>" +
      "</div></section>" + blocoContato();
  }

  /* ---------- CONDOMÍNIOS (página fora do menu) ---------- */
  function renderCondominios() {
    var p = D.paginaCondominios;
    var areas = p.areas.map(function (a) {
      return '<div class="area"><h3 class="titulo-p">' + esc(a.titulo) + "</h3><p>" + esc(a.texto) + "</p></div>";
    }).join("");
    $("#conteudo").innerHTML =
      '<section class="hero" aria-labelledby="cond-titulo"><div class="container hero__grade">' +
        "<div>" +
          '<p class="rotulo">' + esc(p.eyebrow) + "</p>" +
          '<h1 class="titulo-g" id="cond-titulo">' + esc(p.titulo) + "</h1>" +
          '<p class="lead" style="margin-top:24px">' + esc(p.subtitulo) + "</p>" +
          '<div class="hero__acoes"><a class="btn btn--whats" href="' + linkWhats("o condomínio ") + '" target="_blank" rel="noopener">' + ICONES.whats + "Pedir cotação" + ICONES.seta + "</a></div>" +
        "</div>" + casaComFotos([p.foto]) +
      "</div></section>" +
      '<section class="secao" style="padding-top:0"><div class="container">' +
        '<p class="rotulo">Condomínios</p><h2 class="titulo-m">' + esc(p.areasTitulo) + "</h2>" +
        '<div class="areas">' + areas + "</div>" +
        '<div class="faixa-cta" style="margin-top:48px"><p>' + esc(p.ctaTexto) + "</p>" +
          '<a class="btn btn--azul" href="' + linkWhats("o condomínio ") + '" target="_blank" rel="noopener">' + ICONES.chat + esc(p.ctaBotao) + ICONES.seta + "</a></div>" +
      "</div></section>";
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
  ligarHero();
  if (pagina === "inicio") ligarCategorias();
})();
