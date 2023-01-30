const mobileNavBtn = document.querySelector('.btn-nav')
const navLinks = document.querySelector('.nav-links')
const navBkg = document.querySelector('.nav-bkg')
const closeBtn = document.querySelector('#close-btn')

const toggleOpenAttribute = (items) => {
  const isOpen = items[0].hasAttribute('open')
  items.forEach(element => {
    isOpen ? element.removeAttribute('open') : element.setAttribute('open', '') 
  });
}

const handleMobileNavClick = (e) => {
  const isOpen = JSON.parse(e.target.getAttribute("aria-expanded"))
  e.target.setAttribute('aria-expanded', !isOpen)
  toggleOpenAttribute([navLinks, navBkg])
}

const handleCloseMobileNav = (e) => {
  console.log('event')
  mobileNavBtn.setAttribute('aria-expanded', false)
  toggleOpenAttribute([navLinks, navBkg])
}

mobileNavBtn.addEventListener('click', handleMobileNavClick)
navBkg.addEventListener('click', handleCloseMobileNav)
closeBtn.addEventListener('click', handleCloseMobileNav)
