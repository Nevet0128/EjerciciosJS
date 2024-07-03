const d = document;
export default function goTop(btnTop) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnTop)) {
      scroll(0, 0);
    }
  });

  d.addEventListener("scroll", () => {
    if (d.documentElement.scrollTop <= 700) {
      d.querySelector(btnTop).style.setProperty("display", "none");
    } else {
      d.querySelector(btnTop).style.setProperty("display", "block");
    }
  });
}
