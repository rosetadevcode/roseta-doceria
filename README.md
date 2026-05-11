# 🌹 Roseta - Doces e Sabores

Site institucional de doceria fictícia, desenvolvido como projeto de aprendizado em desenvolvimento web. A "Roseta" é uma marca autoral que mistura confeitaria artesanal com estética clean e sofisticada.

## ✨ Funcionalidades

- **Catálogo interativo** com 4 produtos
- **Botão WhatsApp personalizado** em cada produto (mensagem dinâmica)
- **Animação de fade-in** nos cards do catálogo (Intersection Observer)
- **Layout responsivo** (adaptado pra celular)
- **Navegação suave** entre seções via âncoras
- **Efeitos de hover** em botões e cards

## 🛠️ Tecnologias utilizadas

- **HTML5** — estrutura semântica
- **CSS3** — estilização, Flexbox, gradientes, transitions, media queries
- **JavaScript (Vanilla)** — interatividade, manipulação do DOM, Intersection Observer API

## 🎨 Identidade visual

- **Paleta:** rosa pastel, branco, dourado/caramelo, marrom suave
- **Tipografia:** Georgia (serifada, elegante)
- **Vibe:** clean, sofisticada, feminina

## 🧠 Conceitos aplicados

### HTML
- Estrutura semântica (header, section, footer, nav)
- Atributos `data-*` para armazenar informações em elementos
- Navegação por âncoras (`href="#secao"`)
- Integração de arquivos externos (CSS e JS)

### CSS
- Reset universal e `box-sizing: border-box`
- Flexbox para layout do header, menu e cards
- Gradientes lineares (`linear-gradient`)
- Sombras (`box-shadow`)
- Transições e transformações (`transition`, `transform`)
- Pseudo-classe `:hover` para interatividade
- Media queries para responsividade
- Bordas arredondadas e tipografia personalizada

### JavaScript
- Seleção de elementos do DOM (`querySelectorAll`)
- Iteração com `forEach`
- Event listeners (`addEventListener`)
- Manipulação de atributos `data-*`
- Codificação de URL (`encodeURIComponent`)
- Abertura de novas abas (`window.open`)
- **Intersection Observer API** para detectar elementos visíveis na tela
- Manipulação de classes CSS via JavaScript (`classList.add`)

## 💡 Decisões de design

- **Sem JS no Hero:** mantive a primeira tela simples e leve, focando no impacto visual da tipografia e gradiente. A interatividade aparece conforme o usuário explora.
- **Botão por produto vs botão único:** poderia haver apenas um botão de WhatsApp geral, mas optei por um em cada card pra simplificar o fluxo do cliente (clica e já chega no chat com produto especificado).
- **Animação só nos cards:** evitei animações em excesso pra não distrair do conteúdo principal. Os cards têm fade-in porque visualmente eles "ganham vida" um a um conforme o scroll.
- **Marca autoral:** o nome "Roseta" não é genérico — vincula o projeto à minha identidade dev (mesmo nome do meu GitHub: rosetadevcode).

## ▶️ Como executar

1. Clone este repositório:

       git clone https://github.com/rosetadevcode/roseta-doceria.git

2. Acesse a pasta:

       cd roseta-doceria

3. Abra o `index.html` no navegador (clique duplo) ou use a extensão **Live Server** no VS Code.

## 🚀 Possíveis melhorias futuras

- Galeria de fotos reais dos produtos
- Formulário de contato com validação
- Sistema de carrinho com cálculo de total
- Animações mais elaboradas (paralax, scroll suave)
- Integração com backend pra pedidos reais
- Otimização SEO e meta tags Open Graph
- Acessibilidade aprimorada (ARIA labels)

## 👩‍💻 Autora

**Alice Oliveira**  
[GitHub](https://github.com/rosetadevcode)