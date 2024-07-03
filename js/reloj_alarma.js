export default function showClock(
  btnShowClock,
  btnHiddeClock,
  clk,
  startAlarm,
  stopAlarm,
  alarm
) {
  const d = document;
  let clockTempo,
    time = new Date();

  d.querySelector(alarm).volume = 0.1;

  d.querySelector(clk).style.setProperty("font-family", "14SegmentLED");
  d.querySelector(clk).style.setProperty("font-size", "60px");

  d.addEventListener("click", (e) => {
    /*MOSTRAR RELOJ */
    if (e.target.matches(btnShowClock)) {
      //d.querySelector(clk).classList.toggle("show");

      d.querySelector(clk).style.setProperty("display", "block");

      clockTempo = setInterval(() => {
        time = new Date();
        d.querySelector(clk).innerHTML = `${time.toLocaleTimeString()}`;
      }, 1000);

      /*Deshabilitar botón */
      d.querySelector(btnShowClock).style.setProperty("disable", "true");
      d.querySelector(btnShowClock).style.setProperty("cursor", "unset");
      d.querySelector(btnShowClock).style.setProperty(
        "background-color",
        "rgba(247, 222, 30, 0.4)"
      );
    }

    /**OCULTAR RELOJ */
    if (e.target.matches(btnHiddeClock)) {
      d.querySelector(clk).style.setProperty("display", "none");

      clockTempo = clearInterval();

      /*Habilitar botón */
      d.querySelector(btnShowClock).style.setProperty("disable", "false");
      d.querySelector(btnShowClock).style.setProperty("cursor", "pointer");
      d.querySelector(btnShowClock).style.setProperty(
        "background-color",
        "#f7df1e"
      );
    }

    if (e.target.matches(startAlarm)) {
      d.querySelector(alarm).load();
      d.querySelector(alarm).play();

      /*Habilitar botón */
      d.querySelector(startAlarm).style.setProperty("disable", "true");
      d.querySelector(startAlarm).style.setProperty("cursor", "unset");
      d.querySelector(startAlarm).style.setProperty(
        "background-color",
        "rgba(247, 222, 30, 0.4)"
      );
    }

    if (e.target.matches(stopAlarm)) {
      d.querySelector(alarm).pause();

      /*Deshabilitar botón */
      d.querySelector(startAlarm).style.setProperty("disable", "false");
      d.querySelector(startAlarm).style.setProperty("cursor", "pointer");
      d.querySelector(startAlarm).style.setProperty(
        "background-color",
        "#f7df1e"
      );
    }
  });
}
