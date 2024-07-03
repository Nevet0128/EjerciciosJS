const d = document;

export default function responisveLinks(section) {
  function reportWindowSize() {
    if (window.innerWidth > 800) {
      d.querySelector(
        section
      ).innerHTML = `<h2>Responsive maps & Youtube video</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/1cfM533xIfk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7528.994562913372!2d-99.02056399686829!3d19.347609000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fd5679449ba3%3A0xf897e43f864fe5e!2sPlaza%20Ermita%20Iztapalapa!5e0!3m2!1ses-419!2smx!4v1677144140136!5m2!1ses-419!2smx" width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" credentialless: true ></iframe>`;
    } else {
      d.querySelector(
        section
      ).innerHTML = `<h2>Responsive maps & Youtube video</h2>
    <h3>Links</h3>
        <a href="https://youtu.be/1cfM533xIfk">Video</a>
        <a
          href="https://goo.gl/maps/7ahbAoyHGtLk7ETX8" >Maps</a
        >`;
    }
  }
  reportWindowSize();
  window.onresize = reportWindowSize;
}
