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
      rodape:       "#0F2E3A", // Grafite — rodapé escuro (usa a assinatura negativa)
      marinho:      "#0A3A63", // Azul Profundo — títulos e texto forte
      azul:         "#0073B0", // Azul Límpido — botões primários
      whatsapp:     "#2BA84A", // Verde Broto — botão WhatsApp (texto Grafite)
      acento:       "#7ED957", // Verde claro da versão negativa do símbolo — jatos e destaques sobre fundo escuro
      destaque:     "#2EC4D6", // Turquesa Lagoa — água: enchimento da palavra, fluxo do cano, rótulos
      texto:        "#3E5661", // Grafite suavizado — texto corrido (passa contraste AA)
      grafite:      "#0F2E3A", // Grafite — texto sobre verdes
      linha:        "#D5E6E4"  // bordas finas
    },
    fontes: {
      titulo: "Outfit",          // Manual de Marca: Outfit nos títulos
      corpo:  "Figtree",         // Manual de Marca: Figtree no texto
      googleFonts: "https://fonts.googleapis.com/css2?family=Outfit:wght@600;800;900&family=Figtree:wght@400;500;600;700&display=swap"
    }
  },

  /* ---------- EMPRESA ---------- */
  empresa: {
    nome: "Bombear",
    nomeCompleto: "Bombear",
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
    endereco: "CE-040, 390",
    cidade: "Eusébio",
    uf: "CE",
    cep: "[CEP]",
    telefone: "(85) [TELEFONE]",
    whatsapp: "55[DDD][NUMERO]",           // só números, com 55 + DDD
    mensagemWhatsapp: "Olá! Vim pelo site da Bombear e quero ajuda com ",
    email: "[EMAIL]@[DOMINIO].com.br",
    horarioTexto: "Seg a Sex — 08h00 às 19h00 · Sábado — 08h00 às 16h00",
    /* Horário usado no selo "ABERTO AGORA". 0 = domingo ... 6 = sábado.
       Enquanto horarioConfirmado for false, o selo NÃO aparece
       (evita dizer "aberto" com horário inventado). */
    horarioConfirmado: true,
    horarios: {
      1: ["08:00", "19:00"], 2: ["08:00", "19:00"], 3: ["08:00", "19:00"],
      4: ["08:00", "19:00"], 5: ["08:00", "19:00"], 6: ["08:00", "16:00"]
    },
    instagram: "https://instagram.com/[PERFIL]",
    facebook: "https://facebook.com/[PAGINA]",
    mapaEmbed: "https://www.google.com/maps?q=CE-040,+390,+Eus%C3%A9bio+-+CE&output=embed",
    mapaRota: "https://www.google.com/maps/dir/?api=1&destination=CE-040,+390,+Eus%C3%A9bio+-+CE"
  },

  /* ---------- SEO POR PÁGINA ---------- */
  seo: {
    inicio:      { titulo: "Bombear · Bombas, irrigação e piscina no Eusébio-CE", descricao: "Loja de bombas, irrigação, piscina e jardinagem no Eusébio-CE. Diagnóstico antes da venda e atendimento pelo WhatsApp." },
    quemSomos:   { titulo: "Quem somos · Bombear", descricao: "A Bombear nasceu da Pé de Serra Irrigação. Conheça nosso jeito de atender no Eusébio-CE." },
    produtos:    { titulo: "Produtos · Bombear", descricao: "Tipos de bomba, irrigação, piscina, tubos e elétricos: o que cada um faz e onde se aplica. Bombear, Eusébio-CE." },
    condominios: { titulo: "Condomínios · Bombear", descricao: "Bombas de recalque, piscina, irrigação e elétrica de bombas para condomínios do Eusébio e região, com nota fiscal e cotação rápida." },
    imagemCompartilhamento: "assets/img/[og-imagem].jpg"
  },

  /* ---------- MENU ---------- */
  menu: [
    { rotulo: "Produtos", href: "produtos.html", pagina: "produtos", dropdown: true },
    { rotulo: "Quem Somos", href: "quem-somos.html", pagina: "quemSomos" },
    { rotulo: "Marcas", href: "index.html#marcas" },
    { rotulo: "Contato", href: "index.html#contato" }
  ],

  /* ---------- HOME: HERO ---------- */
  hero: {
    linha1: "A bomba certa para",
    palavras: [
      { palavra: "Irrigação", foto: { src: "assets/img/hero-irrigacao.webp", alt: "Gramado de sítio irrigado por aspersores ao pôr do sol, com cavalo no pasto ao fundo" } },
      { palavra: "Indústria", foto: { src: "assets/img/hero-industria.webp", alt: "Bomba centrífuga instalada em casa de máquinas, com quadro de comando e tubulação" } },
      { palavra: "Lazer",     foto: { src: "assets/img/hero-lazer.webp", alt: "Piscina com cascata e hidromassagem em casa de alto padrão" } }
    ],
    paragrafo: "Bombas, irrigação, piscina e jardinagem em um só lugar. A gente entende o problema antes de indicar o produto e continua atendendo depois da compra.",
    ctaPrincipal: "Falar com a Bombear",
    ctaSecundario: "Ver categorias"
  },

  /* ---------- HOME: CATEGORIAS ---------- */
  /* Cada categoria tem um cartão na página inicial e uma página de detalhe
     (produtos.html#id) com os TIPOS de produto e onde cada um se aplica.
     Sem marcas: o objetivo é ajudar o cliente a entender o que precisa.
     ATENÇÃO: só "Bombas" veio pronto da equipe. As demais categorias estão
     marcadas como RASCUNHO — conferir com o Lucas o que a loja tem de fato. */
  categorias: [
    { id: "bombas", nome: "Bombas", subtitulo: "Do pressurizador da casa à submersa do poço",
      foto: { src: "assets/img/capa-bombas.webp", alt: "Bomba submersa para drenagem instalada em poço de concreto, com boia de nível" },
      intro: "Conheça os principais tipos de bomba, suas características e onde cada uma é mais indicada.",
      tipos: [
        { nome: "Bomba centrífuga", descricao: "Versátil e de alta vazão, ideal para transferência de água limpa.",
          aplicacoes: ["Abastecimento residencial", "Uso industrial", "Irrigação de grandes áreas"],
          foto: { src: "assets/img/tipos/centrifuga.webp", alt: "Bomba centrífuga" } },
        { nome: "Bomba autoescorvante", descricao: "Indicada para captação de água em locais onde a bomba fica acima do nível da água.",
          aplicacoes: ["Poços rasos", "Cisternas e caixas d'água", "Irrigação e uso geral"],
          foto: { src: "assets/img/tipos/autoescorvante.webp", alt: "Bomba autoescorvante" } },
        { nome: "Bomba periférica", descricao: "Compacta, com alta pressão, ideal para pequenas demandas e pressurização.",
          aplicacoes: ["Pressurização de chuveiros", "Residências e comércios", "Sistemas de baixa vazão"],
          foto: { src: "assets/img/tipos/periferica.webp", alt: "Bomba periférica" } },
        { nome: "Bomba submersível", descricao: "Instalada dentro da água, ideal para poços, cisternas e captação em maiores profundidades.",
          aplicacoes: ["Poços artesianos", "Irrigação", "Abastecimento de reservatórios"],
          foto: { src: "assets/img/tipos/submersivel.webp", alt: "Bomba submersível para poço" } },
        { nome: "Bomba submersa para esgoto (SDS)", descricao: "Desenvolvida para bombeamento de água com sólidos, esgoto e drenagem.",
          aplicacoes: ["Drenagem de áreas alagadas", "Esgoto residencial, comercial e industrial", "Caixas de inspeção e estações elevatórias"],
          foto: { src: "assets/img/tipos/esgoto.webp", alt: "Bomba submersa para esgoto com boia" } },
        { nome: "Bomba de piscina", descricao: "Especial para circulação, filtragem e tratamento da água da piscina.",
          aplicacoes: ["Piscinas residenciais", "Piscinas de condomínios e clubes", "Sistemas de filtração"],
          foto: { src: "assets/img/tipos/piscina.webp", alt: "Bomba de piscina com pré-filtro" } },
        { nome: "Pressurizador", descricao: "Mantém a pressão da água constante, proporcionando mais conforto no uso de chuveiros e torneiras.",
          aplicacoes: ["Pressão constante em chuveiros", "Residências e edifícios", "Comércios e pequenas indústrias"],
          foto: { src: "assets/img/tipos/pressurizador.webp", alt: "Pressurizador ao lado de chuveiro" } },
        { nome: "Bomba solar", descricao: "Solução eficiente e econômica, movida por energia solar, ideal para locais sem rede elétrica.",
          aplicacoes: ["Irrigação rural", "Abastecimento de reservatórios", "Projetos sustentáveis e autônomos"],
          foto: { src: "assets/img/tipos/bomba-solar.webp", alt: "Bomba solar com painéis fotovoltaicos e controlador" } }
      ] },

    { id: "piscina", nome: "Piscina", subtitulo: "Bomba, filtro e acessórios que funcionam juntos", rascunho: true,
      foto: { src: "assets/img/capa-piscina.webp", alt: "Piscina com cascata e casa de máquinas com bomba e filtro" },
      intro: "O que mantém a água da piscina limpa e em circulação, e onde cada item entra no sistema.",
      tipos: [
        { nome: "Bomba de piscina", descricao: "Faz a água circular pelo filtro e voltar limpa para a piscina.", aplicacoes: ["Piscinas residenciais", "Condomínios e clubes"], foto: { src: "assets/img/tipos/piscina.webp", alt: "Bomba de piscina" } },
        { nome: "Filtro", descricao: "Retém a sujeira da água em circulação. O tamanho acompanha o volume da piscina.", aplicacoes: ["Filtragem diária", "Manutenção da água"], foto: { src: "assets/img/tipos/filtro.webp", encaixe: "inteira", alt: "Filtro de areia para piscina com válvula seletora e manômetro" } },
        { nome: "Limpeza e tratamento", descricao: "Pastilhas de cloro, sulfato e mangueiras para manter a água limpa e tratada.", aplicacoes: ["Pastilhas de cloro", "Sulfato", "Mangueiras"], foto: { src: "assets/img/tipos/limpeza.webp", alt: "Peneira, escovas, aspirador, clorador flutuante, mangueira e cesto para limpeza de piscina" } }
      ] },

    { id: "irrigacao", nome: "Irrigação", subtitulo: "Projeto e instalação, do gramado ao pomar", rascunho: true,
      foto: { src: "assets/img/capa-irrigacao.webp", alt: "Aspersores irrigando plantação" },
      intro: "Cada cultura e cada área pedem uma forma de levar água. Veja os sistemas mais usados.",
      tipos: [
        { nome: "Aspersão", descricao: "Distribui a água em forma de chuva sobre a área.", aplicacoes: ["Gramados", "Jardins", "Pastagens"], foto: { src: "assets/img/tipos/aspersao.webp", encaixe: "inteira", alt: "Aspersor de impacto" } },
        { nome: "Gotejamento", descricao: "Leva a água gota a gota direto na raiz, com pouco desperdício.", aplicacoes: ["Hortas", "Pomares", "Vasos e canteiros"], foto: { src: "assets/img/tipos/gotejamento.webp", encaixe: "inteira", alt: "Rolo de tubo com gotejadores, filtro, registro e conexões" } },
        { nome: "Microaspersão", descricao: "Jato fino e localizado, entre a aspersão e o gotejamento.", aplicacoes: ["Frutíferas", "Viveiros", "Canteiros"], foto: { src: null, alt: "Microaspersor" } },
        { nome: "Automação", descricao: "Controladores e válvulas que ligam a irrigação no horário certo.", aplicacoes: ["Jardins de condomínio", "Residências", "Áreas grandes"], foto: { src: "assets/img/tipos/automacao.webp", encaixe: "inteira", alt: "Quadro de comando com display e botões" } }
      ] },

    { id: "jardinagem", nome: "Jardinagem", subtitulo: "Para quem cuida do verde todo dia", rascunho: true,
      foto: { src: "assets/img/capa-jardinagem.webp", alt: "Jardim com aspersor, regador, enrolador de mangueira e ferramentas" },
      intro: "Itens do dia a dia de quem cuida de jardim, horta e gramado.",
      tipos: [
        { nome: "Mangueiras e engates", descricao: "Para rega manual, lavagem e ligação rápida de acessórios.", aplicacoes: ["Rega", "Lavagem de áreas externas"], foto: { src: "assets/img/tipos/mangueiras.webp", encaixe: "inteira", alt: "Rolo de mangueira com engates, registro e microaspersores" } },
        { nome: "Ferramentas manuais", descricao: "Para plantio, poda e manutenção do jardim.", aplicacoes: ["Plantio", "Poda", "Manutenção"], foto: { src: null, alt: "Ferramentas de jardinagem" } },
        { nome: "Pulverizadores", descricao: "Para aplicar adubos foliares e defensivos.", aplicacoes: ["Hortas", "Jardins", "Pomares"], foto: { src: null, alt: "Pulverizador costal" } }
      ] },

    { id: "tubos", nome: "Tubos e conexões", subtitulo: "Pronta entrega para a obra não parar", rascunho: true,
      foto: { src: "assets/img/capa-tubos.webp", alt: "Tubos de PVC, conexões e registros sobre bancada" },
      intro: "A tubulação certa evita perda de pressão e vazamento. Veja onde cada tipo se aplica.",
      tipos: [
        { nome: "PVC soldável", descricao: "Para água fria em instalações prediais e residenciais.", aplicacoes: ["Residências", "Caixas d'água", "Recalque"], foto: { src: null, alt: "Tubo de PVC soldável" } },
        { nome: "PVC roscável", descricao: "Para ligações que precisam ser desmontadas na manutenção.", aplicacoes: ["Ligação de bombas", "Cavaletes", "Manutenção"], foto: { src: null, alt: "Conexões roscáveis" } },
        { nome: "PEBD", descricao: "Tubo flexível de polietileno de baixa densidade, leve e fácil de instalar.", aplicacoes: ["Irrigação", "Linhas de gotejamento", "Ligações rurais"], foto: { src: null, alt: "Bobina de tubo PEBD" } },
        { nome: "Registros e válvulas", descricao: "Controlam, bloqueiam ou impedem o retorno da água.", aplicacoes: ["Bombas", "Reservatórios", "Redes prediais"], foto: { src: null, alt: "Registros e válvulas" } }
      ] },

    { id: "eletricos", nome: "Elétricos", subtitulo: "Tudo o que a bomba precisa para ligar com segurança", rascunho: true,
      foto: { src: "assets/img/capa-eletricos.webp", alt: "Eletrodutos, caixas de passagem e quadro elétrico" },
      intro: "A parte elétrica certa protege a bomba e evita queima do motor.",
      tipos: [
        { nome: "Quadro de comando", descricao: "Liga, desliga e protege o motor da bomba.", aplicacoes: ["Bombas de poço", "Recalque predial", "Irrigação"], foto: { src: null, alt: "Quadro de comando" } },
        { nome: "Boia elétrica", descricao: "Liga e desliga a bomba pelo nível da água do reservatório.", aplicacoes: ["Caixas d'água", "Cisternas"], foto: { src: null, alt: "Boia elétrica" } },
        { nome: "Cabos para bomba", descricao: "Cabos próprios para bomba submersa, com a bitola certa para a distância.", aplicacoes: ["Poços artesianos", "Submersíveis"], foto: { src: null, alt: "Cabo para bomba submersa" } },
        { nome: "Pressostatos e protetores", descricao: "Controlam a pressão e protegem contra falta de fase e funcionamento a seco.", aplicacoes: ["Pressurização", "Proteção do motor"], foto: { src: null, alt: "Pressostato" } }
      ] },

    { id: "industria", nome: "Indústria", subtitulo: "Centrífugas, peças e energia solar para não parar a produção", rascunho: true,
      foto: { src: "assets/img/hero-industria.webp", alt: "Bomba centrífuga industrial instalada em casa de máquinas" },
      intro: "Equipamentos e reposição para manutenção industrial, com foco em reduzir o tempo de máquina parada.",
      tipos: [
        { nome: "Bombas centrífugas industriais", descricao: "Para transferência contínua de água em processos e utilidades.", aplicacoes: ["Processos", "Torres de resfriamento", "Utilidades"], foto: { src: "assets/img/hero-industria.webp", alt: "Bomba centrífuga industrial" } },
        { nome: "Placas solares", descricao: "Painéis fotovoltaicos que alimentam bombas solares e reduzem o custo de energia.", aplicacoes: ["Bombas solares", "Locais sem rede elétrica", "Redução da conta de energia"], foto: { src: "assets/img/tipos/solar.webp", alt: "Placas solares em campo" } },
        { nome: "Peças de reposição", descricao: "Selos mecânicos, rotores e rolamentos para manter a bomba em operação.", aplicacoes: ["Manutenção preventiva", "Manutenção corretiva"], foto: { src: null, alt: "Peças de reposição de bomba" } }
      ] }
  ],

  /* Bloco fixo exibido depois da lista de tipos, em todas as categorias */
  ajudaEscolha: {
    titulo: "Não sabe qual bomba escolher?",
    texto: "Cada aplicação exige uma solução específica. A escolha correta de uma bomba depende de fatores como:",
    fatores: [
      "Vazão necessária",
      "Altura manométrica total",
      "Distância e diâmetro da tubulação",
      "Características do líquido bombeado",
      "Disponibilidade de energia elétrica",
      "Condições de instalação e operação"
    ],
    fechamento: "Conte com o suporte técnico da Bombear para encontrar o equipamento adequado à sua necessidade.",
    botao: "Fale com um especialista"
  },

  /* ---------- HOME: QUEM SOMOS (resumo) ---------- */
  quemSomosResumo: {
    eyebrow: "Quem somos",
    titulo: "Gente que entende de água",
    paragrafo: "A Bombear nasceu da Pé de Serra Irrigação, que há 3 anos dimensiona bombas e sistemas de irrigação no Ceará. No Eusébio, trouxemos o mesmo jeito de trabalhar: entender o problema antes de indicar o produto.",
    itens: [
      { titulo: "Diagnóstico antes da venda", texto: "Antes de indicar a bomba, a gente entende altura, distância, vazão e uso." },
      { titulo: "O projeto inteiro numa lista", texto: "Equipamento, tubos, conexões e parte elétrica no mesmo orçamento." },
      { titulo: "Suporte depois da compra", texto: "Orientação na instalação, manual do seu equipamento e a mesma equipe para tirar dúvidas pelo WhatsApp." }
    ],
    processoTitulo: "Como a gente atende"
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
    tituloAntes: "A bomba do",
    tituloDestaque: "tamanho certo",
    tituloDepois: "para o seu caso.",
    paragrafo: "",
    botao: "Chamar no WhatsApp"
  },

  /* ---------- PÁGINA QUEM SOMOS ---------- */
  paginaQuemSomos: {
    eyebrow: "Quem somos",
    titulo: "Água no lugar certo, na pressão certa.",
    intro: "A Bombear nasce no Eusébio com a experiência e a tradição da Pé de Serra Irrigação. Trazemos fornecedores reconhecidos, processos consolidados e a essência do nosso atendimento: entender a necessidade de cada cliente antes de oferecer a solução certa.",
    /* Imagem mostrada ao lado da nossa história enquanto a loja não está pronta */
    imagemHistoria: { src: "assets/img/simbolo-cor.svg", alt: "Símbolo da Bombear" },
    historia: {
      rotulo: "Nossa história",
      titulo: "A Bombear nasceu da vontade de ir além.",
      paragrafos: [
        "À frente da Pé de Serra Irrigação, em Maranguape, Lucas Jalles identificou no Eusébio uma região em crescimento, com novas oportunidades, diferentes perfis de clientes e um grande potencial de mercado. Assim surgiu o desejo de construir um novo negócio, paralelo à Pé de Serra Irrigação, levando consigo a experiência adquirida, mas com uma proposta própria, moderna e inovadora.",
        "O que começou como o sonho de um tornou-se o projeto de dois. Com a chegada de Larissa, a Bombear ganhou novas perspectivas, criatividade e um olhar estratégico para a comunicação, o marketing e o posicionamento da marca.",
        "Unindo conhecimento técnico, experiência comercial e criatividade, o casal decidiu apostar nesse novo desafio, compartilhando responsabilidades, sonhos e a vontade de construir algo que faça a diferença.",
        "Mais do que comercializar produtos, queremos transformar a experiência de compra dos nossos clientes, oferecendo orientação técnica, atendimento próximo, tecnologia e soluções que realmente atendam às suas necessidades.",
        "Acreditamos que um bom atendimento começa por saber ouvir, que a confiança se conquista todos os dias e que a inovação deve estar presente em cada detalhe do nosso negócio."
      ],
      destaque: "A Bombear é a materialização de um sonho compartilhado, construído com dedicação, coragem e a vontade constante de fazer melhor."
    },
    /* PENDENTE — fotos da loja: entram quando a loja estiver montada.
       Para ligar: preencha os "src" abaixo e troque mostrarFotos para true.
       Enquanto estiver false, a faixa de fotos não aparece. */
    mostrarFotos: false,
    fotos: [
      { src: null, alt: "Fachada da loja" },
      { src: null, alt: "Showroom com bombas funcionando" },
      { src: null, alt: "Equipe atendendo cliente no balcão" },
      { src: null, alt: "Prateleira de tubos e conexões" }
    ],
    /* Ilustrações dos 4 pilares, na mesma ordem dos pilares abaixo */
    iconesPilares: [
      { src: "assets/img/icones/diagnostico.webp", alt: "" },
      { src: "assets/img/icones/projeto.webp", alt: "" },
      { src: "assets/img/icones/showroom.webp", alt: "" },
      { src: "assets/img/icones/raizes.webp", alt: "" }
    ],
    pilares: [
      { titulo: "Diagnóstico antes da venda", texto: "Perguntamos altura, vazão, distância e uso antes de indicar qualquer bomba." },
      { titulo: "O projeto inteiro em um só lugar", texto: "Do equipamento à última conexão, numa lista só." },
      { titulo: "Bombas funcionando no showroom", texto: "Você vê e ouve o equipamento antes de levar para casa." },
      { titulo: "Raízes no Ceará", texto: "Nascemos da Pé de Serra Irrigação." }
    ]
  },

  /* ---------- PÁGINA CONDOMÍNIOS ---------- */
  paginaCondominios: {
    eyebrow: "Para síndicos e administradoras",
    titulo: "Um fornecedor para a água do seu condomínio",
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
    copyright: "© 2026 Bombear — Irrigação, Indústria e Lazer."
  }
};
