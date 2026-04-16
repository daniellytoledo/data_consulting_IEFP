# InSyte Consultoria — Site Institucional

## Contexto do Projeto

Este projeto foi desenvolvido no âmbito do curso **CET em Aplicações de Informática de Gestão**, na unidade curricular de **Criar e Desenvolver Ideias de Negócios**.

O objetivo era criar um site para uma empresa fictícia de consultoria de dados — a **InSyte Consultoria** —, simulando um produto real com identidade visual, estrutura de navegação, apresentação de serviços e página de equipa. O projeto foi desenvolvido a pares por **Géssica Nonato** e **Danielly Toledo**.

---

## Sobre o Projeto

A InSyte Consultoria é uma empresa fictícia especializada em análise de dados, visualização de informação e conformidade com a proteção de dados. O site foi criado para apresentar a empresa, os seus serviços e a equipa de forma profissional.

O projeto é composto por:

- `index.html` — Página principal com hero, secção de serviços e navegação flutuante
- `pages/sobre.html` — Página "Sobre Nós" com os perfis da equipa
- `pages/plano.html` — Página do plano de negócios
- `css/` — Folhas de estilo para cada componente
- `js/` — Scripts para o menu flutuante e interações

---

## O Que Aprendi

### HTML

**Estrutura semântica**
Aprendi a usar tags semânticas como `<header>`, `<section>`, `<article>`, `<footer>` e `<nav>` em vez de usar `<div>` para tudo. Estas tags tornam o código mais legível e acessível, transmitindo o significado de cada bloco ao navegador.

**Atributos e acessibilidade**
Percebi a importância de atributos como `alt` nas imagens (para descrever o conteúdo a quem usa leitores de ecrã), `target="_blank"` com `rel="noopener"` para links externos seguros, e `aria-label` para botões sem texto visível.

**Ligação entre páginas**
Aprendi como funciona a navegação entre ficheiros HTML com caminhos relativos (`href="../index.html"`, `href="pages/sobre.html"`), e como organizar uma estrutura de pastas que faça sentido para o projeto.

**Formulários e botões**
Trabalhei com elementos interativos como `<button>` com `onclick`, percebendo a diferença entre um botão que submete um formulário e um que executa uma ação de navegação.

**Meta tags**
Aprendi a usar a meta tag `description` para descrever o conteúdo da página para motores de busca, e `viewport` para garantir que o site se adapta a dispositivos móveis.

---

### CSS

**Box model**
Entendi como funciona o modelo de caixa no CSS — o papel do `margin`, `padding`, `border` e `width` — e como isso afeta o espaço e o tamanho dos elementos na página.

**Flexbox**
Flexbox foi uma das principais ferramentas usadas neste projeto. Aprendi a usar `display: flex`, `justify-content`, `align-items`, `flex-direction` e `gap` para organizar elementos de forma eficiente tanto em linha como em coluna, sem recorrer a hacks antigos com `float`.

**CSS Grid**
Usei `display: grid` com `grid-template-columns` para criar grelhas responsivas (como os cards de serviços). Aprendi a diferença entre `1fr` e valores fixos, e como o `repeat(auto-fit, minmax(...))` permite que a grelha se adapte automaticamente ao tamanho do ecrã.

**Posicionamento**
Aprendi a diferença entre `position: static`, `relative`, `fixed` e `absolute`. Usei `position: fixed` para manter o header e o menu flutuante sempre visíveis durante o scroll.

**Variáveis CSS (Custom Properties)**
Aprendi a declarar variáveis com `--nome-da-variavel` dentro de `:root` e a reutilizá-las em todo o ficheiro CSS. Isto facilita muito manter a consistência de cores, fontes e espaçamentos, e torna qualquer alteração de estilo muito mais rápida.

**Pseudo-classes e transições**
Aprendi a usar `:hover` para criar efeitos ao passar o rato sobre elementos, e `transition` para animar suavemente essas mudanças de estado — tornando a experiência mais fluida e profissional.

**Responsividade com Media Queries**
Usei `@media (max-width: ...)` para adaptar o layout a ecrãs mais pequenos, como passando de uma grelha de duas colunas para uma só coluna em mobile.

**Animações com `@keyframes`**
Criei animações de entrada com `@keyframes` e `animation`, como o efeito de `fadeUp` na página "Sobre Nós" que faz os perfis aparecerem suavemente ao carregar a página.

**Seletores e especificidade**
Aprendi a usar seletores de classe (`.card`), de ID (`#gessica`), combinados (`.profile-half:hover .avatar-wrap`) e pseudo-elementos (`::before`), e como a especificidade determina qual regra prevalece quando há conflitos.

**Tipografia e Google Fonts**
Aprendi a importar fontes externas via `<link>` do Google Fonts e a combiná-las: uma fonte display para títulos (com personalidade) e uma fonte mais limpa para o corpo do texto.

**Backdrop-filter e efeitos modernos**
Usei `backdrop-filter: blur()` para criar o efeito de vidro fosco no header, tornando-o visualmente mais sofisticado sem perder a legibilidade.

---

## Principais Desafios

- Fazer o layout dividido em duas metades iguais (split-screen) de forma responsiva, sem que uma coluna "quebrasse" a outra em ecrãs mais pequenos — resolvido com CSS Grid e `min-height`.
- Manter a consistência visual entre várias páginas sem um framework, criando variáveis CSS partilhadas.
- Ligar corretamente os ficheiros CSS e JS com caminhos relativos quando as páginas estão em subpastas diferentes.

---

## Tecnologias Utilizadas

- HTML5
- CSS3 (Flexbox, Grid, Custom Properties, Animations)
- JavaScript (vanilla) — menus e interações
- Font Awesome 6 — ícones sociais
- Google Fonts — tipografia (Syne + DM Sans)

---

## Autoras

| | |
|---|---|
| **Géssica Nonato** | [LinkedIn](https://www.linkedin.com/in/géssica-nonato-7b706093/) · [GitHub](https://github.com/gessicanonato) |
| **Danielly Toledo** | [LinkedIn](https://www.linkedin.com/in/daniellytoledo/) · [GitHub](https://github.com/daniellytoledo) |

---

*CET em Aplicações de Informática de Gestão · UFCD Negócios · 2026*
