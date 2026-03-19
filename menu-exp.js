// menu-exp.js
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.menu-button');
  const heroSection = document.querySelector('.hero-video');
  const menuLines = document.querySelectorAll('.menu-line');
  
  // Função para verificar posição do botão em relação ao vídeo
  function checkButtonPosition() {
    const heroBottom = heroSection.getBoundingClientRect().bottom;
    const buttonTop = menuButton.getBoundingClientRect().top;
    
    if (buttonTop > heroBottom) {
      // Botão está abaixo da seção do vídeo (sobre fundo branco)
      menuButton.classList.add('bg-change');
    } else {
      // Botão está sobre a seção do vídeo
      menuButton.classList.remove('bg-change');
    }
  }
  
  // Adiciona evento de clique em cada linha para navegação
  menuLines.forEach((line) => {
    line.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const wordElement = this.querySelector('.menu-word');
      if (wordElement) {
        const linkText = wordElement.textContent.trim().toLowerCase();
        
        const links = {
          'home': '#home',
          'serviços': '#servicos',
          'clientes': '#clientes',
          'sobre nós': '#sobre',
          'contacte-nos': '#contactos'
        };
        
        if (links[linkText]) {
          window.location.href = links[linkText];
        }
      }
    });
  });
  
  // Verificar posição inicial
  checkButtonPosition();
  
  // Verificar quando o usuário rolar a página
  window.addEventListener('scroll', checkButtonPosition);
  window.addEventListener('resize', checkButtonPosition);
});