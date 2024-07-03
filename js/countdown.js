export function countDown(container, finalDate, countDown, show, hidde) {
  let D1 = new Date(),
    D3,
    clockTempo;

  const D2 = new Date("August 28, 2023 04:30"),
    d = document;
  /* console.log(D1);
  console.log(D1.toLocaleString());
  console.log(D1.toLocaleTimeString());

  console.log(D2);
  console.log(D2.toLocaleString());
  console.log(D2.toLocaleTimeString()); */

  //console.log(D3);
  //console.log(D3.toLocaleString());
  //console.log(D3.toLocaleTimeString());

  d.addEventListener("click", (e) => {
    if (e.target.matches(show)) {
      d.querySelector(container).style.setProperty("display", "block");

      d.querySelector(
        finalDate
      ).innerText = `Fecha de evento: ${D2.toLocaleString()}`;

      clockTempo = setInterval(() => {
        D1 = new Date();
        D3 = D2.getTime() - D1.getTime();

        let dias = Math.floor(D3 / 8.64e7),
          horas = Math.floor((D3 % 8.64e7) / 3.6e6),
          minutos = Math.floor(((D3 % 8.64e7) % 3.6e6) / 60000),
          segundos = Math.floor((((D3 % 8.64e7) % 3.6e6) % 60000) / 1000);

        d.querySelector(
          countDown
        ).innerText = `Faltan ${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos`;
      }, 1000);
    }

    if (e.target.matches(hidde)) {
      clockTempo = clearInterval;
      d.querySelector(container).style.setProperty("display", "none");
    }
  });
}
