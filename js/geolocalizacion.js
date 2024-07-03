export default function localizacion(location) {
  const $geoLoc = window.document.querySelector(location);

  function success(pos) {
    const crd = pos.coords;

    $geoLoc.innerHTML = `
    <p>Tu ubicación actual es:</p>
    <p>Latitud : ${crd.latitude}</p>
    <p>Longitud: ${crd.longitude}</p>
    <p>Más o menos ${crd.accuracy} metros de presición.</p>`;

    let link = document.createElement("a");
    link[
      "href"
    ] = `https://maps.google.com/?q=${crd.latitude},${crd.longitude}`;

    link["target"] = "_blank";

    link.innerText = "Link a google maps";
    document
      .getElementById("geoLocation")
      .insertAdjacentElement("beforeend", link);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    $geoLoc.innerHTML = `
    <p>¡Sucedió un error! : <mark>${err.code} = ${err.mesage}</mark></p>
    `;
  }
  navigator.geolocation.getCurrentPosition(success, error);
}
