const d = document,
  n = navigator,
  ua = navigator.userAgent;
export default function userDeviceInfo(id) {
  const $id = d.getElementById(id), //Para imprimir en la página
    //Para desplegar informacion en un SO preciso
    //any para todos los SO móviles
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(),
      any: function () {
        return this.android() || this.ios() || this.windows;
      },
    },
    //para poner al usuario el instalador correspondiente a su sistema operativo
    //any es para todos los OS de escritorio
    isDesktop = {
      windows: () => ua.match(/windows nt/i),
      linux: () => ua.match(/linux/i),
      ios: () => ua.matches(/mac os/i),
      any: function () {
        return this.windows() || this.linux() || this.ios();
      },
    },
    //Para que aparezca que no se le da más soporte a internet explorer o versiones viejas(se necesita más codigo)
    //any para cualquier navegador
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera() ||
          this.ie() ||
          this.edge()
        );
      },
    };

  $id.innerHTML = `<ul>
  <li>User Agent: ${ua}</li>
  <br/>
  <li>Sistema operativo: ${isDesktop.any()}</li>
  <br/>
  <li>Navegador: ${isBrowser.any()}</li>
  <br/>
  </ul>`;

  //internet explorer
  /* if (isBrowser.ie()) {
    $id.innerHTML += `Este navegador ya no es compatible con esta versión de la página`;
  }

  if (isDesktop.linux()) {
    $id.innerHTML += `<p>Descarga el instalador para Linux aquí!!!</p>`;
  }

  if (isDesktop.windows()) {
    $id.innerHTML += `<p>Hola, estás en windows</p>`;
  }

  //Redireccionamiento 

  if (isMobile.android()) {
    window.location.href = "https://youtu.be/WHfyN411fd4";
  } */
}
