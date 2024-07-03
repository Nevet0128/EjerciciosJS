const d = document,
  ls = localStorage

export default function darkMode(button) {
  let $selectors = d.querySelectorAll('[data-dark]')
  let sun = '☀️',
    moon = '🌙'

  const set_darkMode = () => {
    ls.setItem('theme', 'dark')
    d.querySelector(button).textContent = sun
    $selectors.forEach((el) => el.classList.add('darkMode-Theme'))
  }

  const set_lightMode = () => {
    ls.setItem('theme', 'light')
    d.querySelector(button).textContent = moon
    $selectors.forEach((el) => el.classList.remove('darkMode-Theme'))
  }

  d.addEventListener('click', (e) => {
    if (e.target.matches(button)) {
      if (d.querySelector(button).textContent === moon) set_darkMode()
      else set_lightMode()
    }
  })

  d.addEventListener('DOMContentLoaded', (e) => {
    if (ls.getItem('theme') === null) ls.setItem('theme', 'dark')
    if (ls.getItem('theme') === 'dark') set_darkMode()
    if (ls.getItem('theme') === 'light') set_lightMode()
  })
}
