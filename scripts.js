window.onscroll = function() {handleScroll()}

function handleScroll() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("fixed-top").classList = "navbar-grey";
  } else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) {
    document.getElementById("fixed-top").className = "navbar-extend";
  }

}