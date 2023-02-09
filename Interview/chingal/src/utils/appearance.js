const defaultTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
const html = document.querySelector('html')

export const appearanceSetter = (appearance) => {
  html.setAttribute('data-theme', appearance.theme == 'default' ? defaultTheme : appearance.theme) // set theme in html attribute
}