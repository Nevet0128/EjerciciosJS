export default function scrollSpy() {
  const d = document,
    //Lo que vamos a observar con la variable
    //instanciada del Intersection Observer
    $sections = d.querySelectorAll(".section"),
    //Se va a usar solamente para cambiar el fondo del menu
    $menu = d.querySelectorAll("a[data-menu]");
  //Esta callback recibe los elementos que van a ser observados por el viewport
  const callBack = (entries) => {
    entries.forEach((entry) => {
      //Si el ID de la sección visible COINCIDE
      // con alguna del menu, entonces cambiar el highligth
      $menu.forEach((menuSection) => {
        if (entry.target.id == menuSection.dataset.menu) {
          menuSection.classList.add("highligth");
        } else {
          menuSection.classList.remove("highligth");
        }
      });
    });
  };

  const observer = new IntersectionObserver(callBack, { threshold: 0.7 });

  $sections.forEach((el) => {
    observer.observe(el); //seteo del observador por cada sección del main
  });
}

/* export default function scrollSpy(idSections, idMenu) {
  const d = document,
    $sections = d.querySelectorAll(idSections),
    $menu = d.querySelectorAll(idMenu),
    options = {
      threshold: 0.3,
    };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      $menu.forEach((el) => {
        el.classList.add("highligth");
        if (e.target.id === el.dataset.menu) {
          console.log(el.dataset.menu);
          el.classList.remove("highligth");
        }
      });
    });
  }, options);

  $sections.forEach((section) => {
    observer.observe(section);
  });
} */
