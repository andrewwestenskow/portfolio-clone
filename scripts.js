window.onscroll = function() {handleScroll()}

function handleScroll() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("fixed-top").classList = "navbar-grey";
  } else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) {
    document.getElementById("fixed-top").className = "navbar-extend";
  }

}

function handleMenu() {
  if(mobileMenu.classList.contains('hidden-menu')){
    mobileMenu.classList.add('showing-menu')
    mobileMenu.classList.remove('hidden-menu')
  } else if(mobileMenu.classList.contains('showing-menu')){
    mobileMenu.classList.add('hidden-menu')
    mobileMenu.classList.remove('showing-menu')
  }
}

const mobileMenus = document.getElementsByClassName('mobile-menu')
const mobileMenu = mobileMenus[0]
const mobileMenuButtons = document.getElementsByClassName('menu')
const mobileMenuButton = mobileMenuButtons[0]

mobileMenuButton.addEventListener('click', handleMenu)