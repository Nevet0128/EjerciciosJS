export default function isOnline(onlineStatus) {
  /*El objeto NAVIGATOR permite saber si está conectado a la red el dispositivo 
    El objeto WINDOW tiene el EVENTO de la conexión y desconexión*/

  addEventListener("online", () => {
    document.querySelector(onlineStatus).style.setProperty("display", "block");
    document.querySelector(onlineStatus).innerHTML = "Conectado a la red";
    document
      .querySelector(onlineStatus)
      .style.setProperty("background-color", "green");

    setTimeout(() => {
      document.querySelector(onlineStatus).style.setProperty("display", "none");
    }, 3000);
  });

  addEventListener("offline", () => {
    document.querySelector(onlineStatus).style.setProperty("display", "block");
    document.querySelector(onlineStatus).innerHTML = "Desconectado de la red";
    document
      .querySelector(onlineStatus)
      .style.setProperty("background-color", "red");

    setTimeout(() => {
      document.querySelector(onlineStatus).style.setProperty("display", "none");
    }, 3000);
  });
}
