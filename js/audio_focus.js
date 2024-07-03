export default function audioFocus() {
  const $audio = document.querySelector("#section13 audio"),
    $section = document.getElementById("section13");

  const done = (section) => {
    if (section[0].isIntersecting) {
      $audio.play();
    } else {
      $audio.pause();
    }
  };

  const observer = new IntersectionObserver(done, {});

  observer.observe($section);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      $audio.pause();
    } else {
      $audio.play();
    }
  });
}
