export default function textSpeech(select, text, submit) {
  const $select = document.getElementById(select),
    $text = document.getElementById(text),
    $submit = document.getElementById(submit),
    speechMessage = new SpeechSynthesisUtterance();

  let voices = [];

  speechMessage.volume = 0.3;

  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }

    voices = window.speechSynthesis.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const $option = document.createElement("option");
      $option.textContent = `${voices[i].name} (${voices[i].lang})`;
      if (voices[i].default) {
        $option.textContent += " — DEFAULT";
      }

      $option.setAttribute("data-lang", voices[i].lang);
      $option.setAttribute("data-name", voices[i].name);
      $select.appendChild($option);
    }
  }

  window.speechSynthesis.addEventListener("voiceschanged", (e) => {
    populateVoiceList();
    if (
      typeof speechSynthesis !== "undefined" &&
      speechSynthesis.onvoiceschanged !== undefined
    ) {
      speechSynthesis.onvoiceschanged = populateVoiceList;
    }
  });

  document.addEventListener("change", (e) => {
    if (e.target === $select) {
      voices.forEach((voice) => {
        if (`${voice.name} (${voice.lang})` === e.target.value) {
          speechMessage.voice = voice;
        }
      });
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target === $submit) {
      speechMessage.text = $text.value;
      window.speechSynthesis.speak(speechMessage);
    }
  });
}
