import '../../node_modules/jquery/dist/jquery.js'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'
import '../../node_modules/swiper/swiper-bundle.min.js'
import '../../node_modules/plyr/dist/plyr.js'
import '../../node_modules/countup.js/dist/countUp.umd.js'
import '../../node_modules/scrollreveal/dist/scrollreveal.js'
import './sliders.js'
import './videos.js'
import './countup.js'

events()
function events () {
  const menuItems = document.querySelectorAll('.header--section .list--items .item a')

  for (let index = 0; index < menuItems.length; index++) {
    menuItems[index].addEventListener('click', () => {
      scrollInTo(menuItems[index].getAttribute('data-link'))
    })
  }

  document.querySelector('.menu').addEventListener('click', () => {
    scrollSituation('hidden')
  })

  document.querySelector('.close--menu').addEventListener('click', () => {
    scrollSituation('auto')
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
      scrollSituation('auto')
    }
  })
}

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header--section')
  const stickyUp = document.querySelector('.sticky--up__button')
  const scrollY = window.scrollY
  scrollY >= 200 ? header.style.height = '76px' : header.style.height = '96px'
  scrollY >= 800 ? stickyUp.classList.replace('animate__backOutDown', 'animate__backInUp') : stickyUp.classList.replace('animate__backInUp', 'animate__backOutDown')
})

// eslint-disable-next-line no-unused-vars
function scrollInTo (element) {
  document.getElementById(element).scrollIntoView(true)
}

function scrollSituation (situation) {
  document.querySelector('html').style.overflow = situation
}

// eslint-disable-next-line no-undef
ScrollReveal().reveal('#partners', {
  afterReveal: function callAnother () {
    partnersScrolling.scroll()
  }
})
// eslint-disable-next-line no-undef
ScrollReveal().reveal('.academies--col', {
  afterReveal: function callAnother () {
    academiesScrolling.scroll()
  }
})

class scrollingX {
  constructor (listElement, listWidth, screenWidth) {
    this.listElement = listElement
    this.listWidth = listWidth
    this.screenWidth = screenWidth
  }

  scroll () {
    for (let i = 0; i < this.listWidth - this.screenWidth; i++) {
      setTimeout(() => {
        // document.querySelector('#partners .content--visibility').scroll(-i, 0)
        this.listElement.scroll(-i, 0)
      }, i * 10)
    }
  }
}

// eslint-disable-next-line new-cap
const partnersScrolling = new scrollingX(document.querySelector('#partners .content--visibility'), document.querySelector('.partners--list').offsetWidth, window.innerWidth)
// eslint-disable-next-line new-cap
const academiesScrolling = new scrollingX(document.querySelector('.academies--col'), document.querySelector('.academies--title').offsetWidth, document.querySelector('.academies--col').offsetWidth)
