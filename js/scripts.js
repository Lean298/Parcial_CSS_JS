const secciones = document.querySelectorAll("section[data-section]");
  const links = document.querySelectorAll(".links-head a");

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          const id = entrada.target.id;
          links.forEach((link) => {
            link.classList.toggle(
              "activo",
              link.getAttribute("href") === `#${id}`
            );
          });
        }
      });
    },
    {
      threshold: 0.5, // 50% visible para considerarlo “activo”
    }
  );

  secciones.forEach((sec) => observador.observe(sec));