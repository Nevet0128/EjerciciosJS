export default function animacion_carrusel(containerID) {
  const container = document.querySelector(containerID);
  let currentChild = 2;
  //console.log(container.children.length);
  //console.log(container.children);

  setInterval(() => {
    container.children[currentChild].classList.add("hidde");
    currentChild += 1;
    if (currentChild === 12) currentChild = 2;
    container.children[currentChild].classList.remove("hidde");
  }, 6000);
}
