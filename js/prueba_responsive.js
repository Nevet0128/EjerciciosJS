const d = document;

export default function responsiveTester(form) {
  const $form = d.getElementById(form);

  let tester;

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      //OTRA FORMA DE COINCIDIR LAS COSAS
      e.preventDefault(); //para que no mande nada

      tester = window.open(
        $form.direccion.value,
        "tester",
        `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`
      ); /*Una cadena, sin espacios en blanco, que especifica el nombre del contexto de navegación en el que se carga el recurso. Si el nombre no identifica un contexto existente, se crea un nuevo contexto y se le asigna el nombre especificado. También se pueden utilizar las palabras clave de destino especiales, _self, _blank, _parent y _top.
Este nombre se puede utilizar como atributo de destino de los elementos <a> o <form>. */
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target === $form.cerrar) tester.close();
  });
}
