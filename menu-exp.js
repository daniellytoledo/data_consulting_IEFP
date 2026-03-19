// script.js
document.addEventListener('DOMContentLoaded', function() {
  const menuLines = document.querySelectorAll('.menu-line');
  
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
});