const d = document;
let x = 0,
  y = 0;

export function movemeBall(e, stage, ball) {
  const $stage = d.querySelector(stage),
    $ball = document.querySelector(ball);

  let limitsStage = $stage.getBoundingClientRect(),
    limitsBall = $ball.getBoundingClientRect();

  //console.log(limitX, limitY);

  //console.clear();

  /*console.log(
    `ESCENARIO:
    bottom: ${limitsStage.bottom}
    height: ${limitsStage.height}
    left: ${limitsStage.left}
    right: ${limitsStage.right}
    top: ${limitsStage.top}
    width: ${limitsStage.width}
    x: ${limitsStage.x}
    Y: ${limitsStage.y}`,
    `\n BOLA:
    bottom: ${limitsBall.bottom}
    height: ${limitsBall.height}
    left: ${limitsBall.left}
    right: ${limitsBall.right}
    top: ${limitsBall.top}
    width: ${limitsBall.width}
    x: ${limitsBall.x}
    Y: ${limitsBall.y}`
  ); */

  switch (e.keyCode) {
    case 37:
      if (limitsBall.left > limitsStage.left) {
        x--;
        e.preventDefault(); //Para no intervenir en las teclas de interacción que tiene por defecto el navegador
      }
      break;

    case 38:
      if (limitsBall.top > limitsStage.top) {
        y--;
        e.preventDefault();
      }
      break;

    case 39:
      if (limitsBall.right < limitsStage.right) {
        x++;
        e.preventDefault();
      }
      break;

    case 40:
      if (limitsBall.bottom < limitsStage.bottom) {
        y++;
        e.preventDefault();
      }
      break;

    default:
      break;
  }
  $ball.style.transform = `translate(${x * 8}px,${y * 8}px)`;
}

export function shortcuts(e) {
  if (e.altKey && e.key.toLowerCase() === "ñ") {
    // Add your code here
    alert("alt + ñ");
  }
}
