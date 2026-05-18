// ========================================
// FUNCIONALIDADE 1: Botões WhatsApp em cada produto
// ========================================

// Seleciona todos os botões com a classe "btn-card"
const botoesCard = document.querySelectorAll('.btn-card');

// Para cada botão, adiciona um evento de clique
botoesCard.forEach(function(botao) {
    botao.addEventListener('click', function() {
        // Acha o card pai do botão clicado
        const card = botao.closest('.card');
        
        // Pega o nome do produto guardado no atributo data-produto
        const produto = card.dataset.produto;
        
        // Monta a mensagem personalizada
        const mensagem = `Olá! Gostaria de pedir: ${produto} 🌹`;
        
        // Codifica a mensagem pra URL (substitui espaços, acentos, emojis)
        const mensagemCodificada = encodeURIComponent(mensagem);
        
        // Monta o link do WhatsApp com a mensagem
        const linkWhatsApp = `https://wa.me/5511999999999?text=${mensagemCodificada}`;
        
        // Abre o WhatsApp em uma nova aba
        window.open(linkWhatsApp, '_blank');
    });
});


// ========================================
// FUNCIONALIDADE 2: Animação de fade-in dos cards
// ========================================

// Seleciona todos os cards
const cards = document.querySelectorAll('.card');

// Cria um "observador" que detecta quando o card entra na tela
const observador = new IntersectionObserver(function(entradas) {
    entradas.forEach(function(entrada) {
        // Se o elemento entrou na tela (visivel)
        if (entrada.isIntersecting) {
            // Adiciona a classe "visivel" pra ativar a animação
            entrada.target.classList.add('visivel');
        }
    });
}, {
    threshold: 0.2  // Ativa quando 20% do card está visível
});

// Aplica o observador em cada card
cards.forEach(function(card) {
    observador.observe(card);
});