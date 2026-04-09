// Função para criar e mostrar o modal
function criarModal(conteudoTexto) {
    // Verifica se já existe um modal e remove
    const modalExistente = document.querySelector('.modal-flutuante');
    if (modalExistente) {
        modalExistente.remove();
    }

    // Cria a estrutura do modal
    const modal = document.createElement('div');
    modal.className = 'modal-flutuante';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-conteudo';
    
    const botaoFechar = document.createElement('span');
    botaoFechar.className = 'modal-fechar';
    botaoFechar.innerHTML = '&times;';
    botaoFechar.onclick = function() {
        modal.remove();
    };
    
    const textoModal = document.createElement('p');
    textoModal.className = 'modal-texto';
    textoModal.textContent = conteudoTexto;
    
    modalContent.appendChild(botaoFechar);
    modalContent.appendChild(textoModal);
    modal.appendChild(modalContent);
    
    document.body.appendChild(modal);
    
    // Fechar modal ao clicar fora do conteúdo
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.remove();
        }
    };
    
    // Fechar modal com tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const modalAtual = document.querySelector('.modal-flutuante');
            if (modalAtual) {
                modalAtual.remove();
            }
        }
    });
}

// Seleciona todos os cards e adiciona evento de clique
const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
    card.style.cursor = 'pointer';
    
    card.addEventListener('click', function() {
        // Textos específicos para cada card
        const textosCard = [
            "Apoio a uma gestão sistematizada e orientada a resultados. Criamos soluções de dados à medida que transformam informação bruta em inteligência acionável. Através de ferramentas avançadas de análise, dashboards e integrações com AI, construímos ecossistemas robustos que suportam decisões informadas e crescimento sustentável.",
            "Implementação, auditorias e acompanhamento contínuo. Executamos soluções totalmente alinhadas com os objetivos da sua empresa, garantindo que cada etapa — da configuração inicial à integração com processos existentes — é realizada com precisão e foco em resultados. Transformamos necessidades em soluções práticas, escaláveis e orientadas ao desempenho, assegurando que a tecnologia trabalha a favor da estratégia e impulsiona o crescimento do seu negócio.",
            "Projetadas para resultados mensuráveis. Ajudamos empresas a estruturar, transformar e visualizar os seus dados de forma eficiente e orientada à tomada de decisão. A nossa consultoria foca-se na criação de bases sólidas para uma estratégia de dados robusta, começando pela implementação de pipelines fiáveis, tratamento adequado da informação e utilização de arquiteturas modernas como lakehouses e bases de dados MPP, garantindo escalabilidade, performance e governança. Uma arquitetura de dados bem definida é o alicerce para desenvolver dashboards interativos, intuitivos e visualmente apelativos. Combinamos tecnologia, design e experiência do utilizador para criar visualizações que traduzem insights relevantes e facilitam decisões estratégicas em todos os níveis da organização. Transformamos dados dispersos em conhecimento acionável, acessível e visualmente impactante. Ajudamos a sua empresa a evoluir de dados brutos para inteligência real, potenciando eficiência, inovação e crescimento sustentado.",
            "Identificamos oportunidades e criamos um plano estratégico. Analisamos o estado atual dos seus processos, sistemas e dados para identificar oportunidades, desafios e prioridades estratégicas. A partir desse diagnóstico, desenvolvemos um roadmap claro e orientado a resultados, definindo etapas, prazos e ações que alinham tecnologia, negócio e objetivos de crescimento. Entregamos uma visão estruturada que guia a tomada de decisão e prepara a sua empresa para evoluir com segurança e eficiência.",
            "Monitorização contínua e melhoria constante. Monitorização contínua, análise recorrente e melhoria constante para garantir decisões cada vez mais precisas e estratégicas."
        ];
        
        // Usa diretamente o texto do array baseado no índice do card
        const textoParaMostrar = textosCard[index];
        criarModal(textoParaMostrar);
    });
});