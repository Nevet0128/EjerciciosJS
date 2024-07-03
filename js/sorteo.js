export default function lottery(containerID, button) {
  let items = ["Ruby", "C++", "C#", "Python", "Java Script", "Java", "Go"],
    itemsLength = items.length,
    container = window.document.getElementById(containerID),
    selectWinner;

  for (let index = 0; index < itemsLength - 1; index++) {
    container.innerHTML += `${items[index]}</br>`;
  }

  addEventListener("click", (e) => {
    if (e.target.matches(button)) {
      selectWinner = Math.floor(Math.random() * itemsLength);
      alert(`El ganador es ${items[selectWinner]}`);
    }
  });
}
