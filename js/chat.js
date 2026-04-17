(function () {
  const DELAY_MS   = 3000;   // aparece após 3 segundos
  const TYPING_MS  = 800;    // duração do efeito de digitação
  const STORAGE_KEY = 'insyte_chat_closed';

  const MESSAGE =
    'Estás interessado(a)? Entre em contacto conosco pelo telefone ' +
    '+351 000 000 000 ou pelo email insyte@negocios.com, ou fale ' +
    'diretamente com nossa equipe pelo WhatsApp em horário comercial ' +
    'das 9h00 às 17h00.';

  const popup  = document.getElementById('chat-popup');
  const bubble = document.getElementById('chatBubble');
  const closeBtn = document.getElementById('chatClose');

  if (!popup || !bubble || !closeBtn) return;

  // Se o utilizador já fechou nesta sessão, não mostra de novo
  if (sessionStorage.getItem(STORAGE_KEY)) return;

  function typeMessage(text, el, callback) {
    el.classList.add('typing');
    el.textContent = '';
    let i = 0;
    const speed = Math.max(18, TYPING_MS / text.length); // velocidade proporcional
    const timer = setInterval(function () {
      el.textContent += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        el.classList.remove('typing');
        if (typeof callback === 'function') callback();
      }
    }, speed);
  }

  function showPopup() {
    popup.classList.add('visible');
    // Pequeno atraso antes de começar a escrever
    setTimeout(function () {
      typeMessage(MESSAGE, bubble);
    }, 300);
  }

  function hidePopup() {
    popup.classList.add('hidden');
    popup.classList.remove('visible');
    sessionStorage.setItem(STORAGE_KEY, '1');
  }

  closeBtn.addEventListener('click', hidePopup);

  // Dispara após o delay definido
  setTimeout(showPopup, DELAY_MS);
})();