# Site Bombear — guia rápido

Site institucional em HTML, CSS e JavaScript puro. Não tem build, framework nem instalação.

## Estrutura de pastas

```
bombear-site/
├── index.html            Página inicial (topo, categorias, quem somos, marcas, contato)
├── quem-somos.html       Página Quem Somos
├── condominios.html      Página para síndicos e administradoras
├── README.md             Este guia
└── assets/
    ├── css/style.css     Layout e animações (não precisa mexer para trocar cor)
    ├── js/conteudo.js    ★ ÚNICO ARQUIVO PARA EDITAR: textos, cores, fontes, fotos, contatos
    ├── js/site.js        Monta as páginas a partir do conteudo.js
    └── img/              Logos da Bombear (e as fotos, quando houver)
```

## Trocar qualquer coisa: só `assets/js/conteudo.js`

| Quero mudar…                    | Onde, dentro de `conteudo.js`                     |
|---------------------------------|---------------------------------------------------|
| Cores                           | `tema.cores`                                       |
| Fontes                          | `tema.fontes` (nomes + link do Google Fonts)       |
| WhatsApp, telefone, endereço    | `contato`                                          |
| Horário e selo "Aberto agora"   | `contato.horarios` + `contato.horarioConfirmado`   |
| Palavras que giram no topo      | `hero.palavras`                                    |
| Categorias e abas               | `categorias`                                       |
| Marcas                          | `marcas.lista`                                     |
| Título e descrição do Google    | `seo`                                              |

**Fotos:** salve o arquivo em `assets/img/` (WebP, até ~300 KB) e troque
`{ src: null, alt: "…" }` por `{ src: "assets/img/fachada.webp", alt: "Fachada da loja" }`.
Enquanto o `src` for `null`, aparece um quadro "FOTO AQUI".

**Selo "Aberto agora":** só aparece quando `horarioConfirmado: true`. Preencha os
horários reais antes de ligar, senão o site diz "aberto" com a loja fechada.

## Pendências antes de publicar

Procure por `[` no `conteudo.js`. Cada `[COLCHETE]` é um dado que falta:
WhatsApp, telefone, CEP, e-mail, horário, Instagram, Facebook, domínio e imagem de compartilhamento.

## Testar no computador

```
cd bombear-site
python3 -m http.server 8000
```
Depois abra http://localhost:8000.

## Publicar

Funciona em qualquer hospedagem de site estático (GitHub Pages, Netlify, Hostinger).
Basta enviar a pasta `bombear-site` inteira.

## Limitação conhecida (SEO)

O conteúdo é montado por JavaScript para que tudo fique em um único arquivo. O Google
lê JavaScript, mas outros buscadores e as prévias de link no WhatsApp/Instagram leem
só o HTML: por isso título e descrição também estão escritos no `<head>` de cada página.
Se o tráfego orgânico virar prioridade, o próximo passo é gerar HTML estático a partir
do mesmo `conteudo.js`.
