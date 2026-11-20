/* =====================================================================
   BOMBEAR — ARQUIVO ÚNICO DE CONTEÚDO, CORES E FONTES
   ---------------------------------------------------------------------
   Tudo o que aparece no site sai daqui. Para mudar um texto, uma cor,
   uma foto, o horário ou o WhatsApp, edite SÓ este arquivo.

   Regras rápidas:
   - Textos entre [COLCHETES] são pendências: troque pelo dado real.
   - Foto: { src: "assets/img/arquivo.webp", alt: "descrição" }.
     Com src: null aparece um quadro "FOTO AQUI" no lugar.
   - Nunca use foto, texto ou logo de outra empresa.
   ===================================================================== */

window.BOMBEAR = {

  /* ---------- TEMA (Manual de Marca Bombear v1) ---------- */
  tema: {
    cores: {
      fundo:        "#F7FBFA", // Espuma — fundo geral
      fundoSuave:   "#E4F3F2", // Névoa — seções alternadas e skeleton
      rodape:       "#FFFFFF",
      marinho:      "#0A3A63", // Azul Profundo — títulos e texto forte
      azul:         "#0073B0", // Azul Límpido — botões primários
      whatsapp:     "#2BA84A", // Verde Broto — botão WhatsApp (texto Grafite)
      acento:       "#7ED957", // Verde claro da versão negativa do símbolo — aba ativa e "Ver produtos"
      destaque:     "#2EC4D6", // Turquesa Lagoa — número de destaque e sublinhados
      texto:        "#3E5661", // Grafite suavizado — texto corrido (passa contraste AA)
      grafite:      "#0F2E3A", // Grafite — texto sobre verdes
      linha:        "#D5E6E4"  // bordas finas
    },
    fontes: {
      titulo: "Outfit",          // Manual de Marca: Outfit nos títulos
      corpo:  "Figtree",         // Manual de Marca: Figtree no texto
      mono:   "JetBrains Mono",  // rótulos e numeração
      googleFonts: "https://fonts.googleapis.com/css2?family=Outfit:wght@600;800;900&family=Figtree:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap"
    }
  },

  /* ---------- EMPRESA ---------- */
  empresa: {
    nome: "Bombear",
    nomeCompleto: "Bombear Soluções",
    razaoSocial: "Bombear Ltda",
    cnpj: "69.490.094/0001-20",
    slogan: "Irrigação – Indústria – Lazer",
    frase: "Bombas, irrigação, piscina e jardinagem no Eusébio, com quem explica antes de vender.",
    logo: "assets/img/assinatura-cor.svg",
    logoNegativo: "assets/img/assinatura-negativo.svg",
    simbolo: "assets/img/simbolo-cor.svg",
    simboloNegativo: "assets/img/simbolo-negativo.svg",
    urlSite: "https://[DOMINIO].com.br"
  },

  /* ---------- CONTATO ---------- */
  contato: {
    endereco: "Av. Eusébio de Queiróz, 523",
    cidade: "Eusébio",
    uf: "CE",
    cep: "[CEP]",
    telefone: "(85) [TELEFONE]",
    whatsapp: "55[DDD][NUMERO]",           // só números, com 55 + DDD
    mensagemWhatsapp: "Olá! Vim pelo site da Bombear e quero ajuda com ",
    email: "[EMAIL]@[DOMINIO].com.br",
    horarioTexto: "Seg a Sex — [HH:MM às HH:MM] · Sábado — [HH:MM às HH:MM]",
    /* Horário usado no selo "ABERTO AGORA". 0 = domingo ... 6 = sábado.
       Enquanto horarioConfirmado for false, o selo NÃO aparece
       (evita dizer "aberto" com horário inventado). */
    horarioConfirmado: false,
    horarios: {
      1: ["07:30", "18:00"], 2: ["07:30", "18:00"], 3: ["07:30", "18:00"],
      4: ["07:30", "18:00"], 5: ["07:30", "18:00"], 6: ["07:30", "12:00"]
    },
    instagram: "https://instagram.com/[PERFIL]",
    facebook: "https://facebook.com/[PAGINA]",
    mapaEmbed: "https://www.google.com/maps?q=Av.+Eus%C3%A9bio+de+Queir%C3%B3z,+523,+Eus%C3%A9bio+-+CE&output=embed",
    mapaRota: "https://www.google.com/maps/dir/?api=1&destination=Av.+Eus%C3%A9bio+de+Queir%C3%B3z,+523,+Eus%C3%A9bio+-+CE"
  },

  /* ---------- SEO POR PÁGINA ---------- */
  seo: {
    inicio:      { titulo: "Bombear · Bombas, irrigação e piscina no Eusébio-CE", descricao: "Loja de bombas, irrigação, piscina e jardinagem no Eusébio-CE. Diagnóstico antes da venda e atendimento pelo WhatsApp." },
    quemSomos:   { titulo: "Quem somos · Bombear", descricao: "A Bombear nasceu da Pé de Serra Irrigação. Conheça nosso jeito de atender no Eusébio-CE." },
    condominios: { titulo: "Condomínios · Bombear", descricao: "Bombas de recalque, piscina, irrigação e elétrica de bombas para condomínios do Eusébio e região, com nota fiscal e cotação rápida." },
    imagemCompartilhamento: "assets/img/[og-imagem].jpg"
  },

  /* ---------- MENU ---------- */
  menu: [
    { rotulo: "Produtos", href: "index.html#categorias", dropdown: true },
    { rotulo: "Condomínios", href: "condominios.html", pagina: "condominios" },
    { rotulo: "Quem Somos", href: "quem-somos.html", pagina: "quemSomos" },
    { rotulo: "Marcas", href: "index.html#marcas" },
    { rotulo: "Contato", href: "index.html#contato" }
  ],

  /* ---------- HOME: HERO ---------- */
  hero: {
    linha1: "A bomba certa para",
    palavras: [
      { palavra: "Irrigação", foto: { src: null, alt: "Gramado sendo irrigado por aspersores ao entardecer" } },
      { palavra: "Indústria", foto: { src: null, alt: "Bomba centrífuga instalada em casa de máquinas" } },
      { palavra: "Lazer",     foto: { src: null, alt: "Piscina de casa no Eusébio com água limpa" } }
    ],
    paragrafo: "Bombas, irrigação, piscina e jardinagem em um só lugar. A gente entende o problema antes de indicar o produto e continua atendendo depois da compra.",
    ctaPrincipal: "Falar com a Bombear",
    ctaSecundario: "Ver categorias"
  },

  /* ---------- HOME: CATEGORIAS ---------- */
  categorias: [
    { id: "bombas",     nome: "Bombas",           subtitulo: "Do pressurizador da casa à submersa do poço", foto: { src: null, alt: "Bombas expostas no showroom da Bombear" } },
    { id: "piscina",    nome: "Piscina",          subtitulo: "Bomba, filtro e acessórios que funcionam juntos", foto: { src: null, alt: "Casa de máquinas de piscina com filtro e bomba" } },
    { id: "irrigacao",  nome: "Irrigação",        subtitulo: "Projeto e instalação, do gramado ao pomar", foto: { src: null, alt: "Aspersor irrigando gramado" } },
    { id: "jardinagem", nome: "Jardinagem",       subtitulo: "Para quem cuida do verde todo dia", foto: { src: null, alt: "Ferramentas de jardinagem" } },
    { id: "tubos",      nome: "Tubos e conexões", subtitulo: "Pronta entrega para a obra não parar", foto: { src: null, alt: "Tubos e conexões organizados em prateleira" } },
    { id: "eletricos",  nome: "Elétricos",        subtitulo: "Tudo o que a bomba precisa para ligar com segurança", foto: { src: null, alt: "Quadro de comando de bomba" } },
    { id: "industria",  nome: "Indústria",        subtitulo: "Centrífugas, motores e peças para não parar a produção", foto: { src: null, alt: "Bomba centrífuga industrial" } }
  ],

  /* ---------- HOME: QUEM SOMOS (resumo) ---------- */
  quemSomosResumo: {
    eyebrow: "Quem somos",
    tituloLinhas: ["Gente que", "entende", "de água"],
    paragrafo: "A Bombear nasceu da Pé de Serra Irrigação, que há 3 anos dimensiona bombas e sistemas de irrigação no Ceará. No Eusébio, trouxemos o mesmo jeito de trabalhar: entender o problema antes de indicar o produto.",
    itens: [
      { titulo: "Diagnóstico antes da venda", texto: "Altura, distância, vazão e uso. Você manda foto ou vídeo, a gente faz as contas." },
      { titulo: "O projeto inteiro numa lista", texto: "Equipamento, tubos, conexões e elétrica juntos. Nada de voltar três vezes por um adaptador." },
      { titulo: "Depois da venda, o mesmo WhatsApp", texto: "Manual da sua máquina, orientação de instalação e alguém para responder." }
    ],
    foto: { src: null, alt: "Fachada da loja Bombear na Av. Eusébio de Queiróz" },
    badge: "Eusébio · CE",
    numero: "3",
    numeroUnidade: "anos",
    numeroRotulo: "de campo na Pé de Serra"
  },

  /* ---------- HOME: MARCAS ---------- */
  marcas: {
    titulo: "Marcas que a gente conhece por dentro",
    subtitulo: "Fornecedores homologados, com garantia de fábrica.",
    /* Use logo só com autorização do fabricante. Sem logo, aparece o nome. */
    lista: [
      { nome: "Schneider", logo: null }, { nome: "Anauger", logo: null },
      { nome: "Thebe", logo: null },     { nome: "Agropolo", logo: null },
      { nome: "Irritec", logo: null },   { nome: "Fortlev", logo: null },
      { nome: "Asperbras", logo: null }, { nome: "Famac", logo: null }
    ]
  },

  /* ---------- HOME: CTA DE CONTATO ---------- */
  ctaContato: {
    eyebrow: "Contato",
    tituloAntes: "Bomba certa na",
    tituloDestaque: "primeira",
    tituloDepois: "compra.",
    paragrafo: "Manda foto, vídeo ou a medida do poço. A gente faz as contas e responde no WhatsApp.",
    botao: "Chamar no WhatsApp"
  },

  /* ---------- PÁGINA QUEM SOMOS ---------- */
  paginaQuemSomos: {
    eyebrow: "Quem somos",
    tituloLinhas: ["Água no lugar certo,", "na pressão certa."],
    intro: "Somos a loja do Eusébio da família Pé de Serra Irrigação. Trouxemos para cá fornecedores consolidados, processos testados e o hábito de perguntar antes de vender.",
    fotos: [
      { src: null, alt: "Fachada da loja" },
      { src: null, alt: "Showroom com bombas funcionando" },
      { src: null, alt: "Equipe atendendo cliente no balcão" },
      { src: null, alt: "Prateleira de tubos e conexões" }
    ],
    pilares: [
      { titulo: "Diagnóstico antes da venda", texto: "Perguntamos altura, vazão, distância e uso antes de indicar qualquer bomba." },
      { titulo: "O projeto inteiro em um só lugar", texto: "Do equipamento à última conexão, numa lista só." },
      { titulo: "Bombas funcionando no showroom", texto: "Você vê e ouve o equipamento antes de levar para casa." },
      { titulo: "Raízes no Ceará", texto: "Nascemos da Pé de Serra Irrigação e conhecemos a água daqui: poço, cisterna e sol forte." }
    ]
  },

  /* ---------- PÁGINA CONDOMÍNIOS ---------- */
  paginaCondominios: {
    eyebrow: "Para síndicos e administradoras",
    tituloLinhas: ["Um fornecedor", "para a água", "do seu", "condomínio"],
    subtitulo: "Bombas de recalque, piscina, irrigação da área verde e a parte elétrica das bombas, com nota fiscal, cotação rápida e atendimento técnico.",
    foto: { src: null, alt: "Área de lazer de condomínio com piscina" },
    areasTitulo: "Áreas que cobrimos",
    areas: [
      { titulo: "Bombas e recalque", texto: "Reposição, reparo e dimensionamento das bombas da caixa d'água." },
      { titulo: "Piscina", texto: "Bombas, filtros e acessórios para a piscina do condomínio." },
      { titulo: "Área verde", texto: "Irrigação automatizada para jardins e gramados comuns." },
      { titulo: "Pressurização", texto: "Pressurizadores para blocos com pouca pressão." },
      { titulo: "Elétrica das bombas", texto: "Quadros de comando, cabos, boias e proteção." },
      { titulo: "Reposição programada", texto: "Lista recorrente de peças para a equipe de manutenção." }
    ],
    ctaTexto: "Manda a lista pelo WhatsApp. A gente orça tudo junto, com nota fiscal.",
    ctaBotao: "Falar com a Bombear"
  },

  /* ---------- RODAPÉ ---------- */
  rodape: {
    copyright: "© 2026 Bombear Soluções — Irrigação, Indústria e Lazer."
  }
};
