document.addEventListener("DOMContentLoaded", () => {
    // 1. Seleciona todos os elementos que você quer animar
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
  
    // 2. Opções para o "observador" (IntersectionObserver)
    const observerOptions = {
      root: null, // Observa em relação à viewport inteira
      rootMargin: '0px',
      threshold: 0.1 // A animação começa quando 10% do item estiver visível
    };
  
    // 3. Cria o "observador"
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // 4. Verifica se o elemento está visível
        if (entry.isIntersecting) {
          // 5. Adiciona a classe 'is-visible' para ativar a animação
          entry.target.classList.add('is-visible');
          
          // 6. (Opcional mas recomendado) Para de observar o elemento
          //    depois que a animação já ocorreu.
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    // 7. Inicia a observação para cada elemento
    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  });