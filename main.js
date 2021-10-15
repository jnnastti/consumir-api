window.addEventListener('resize', calculaMargin);

function calculaMargin() {
  var main = document.getElementsByTagName('main')[0];

  main.style.marginLeft = (window.innerWidth - 1260) / 2
}

calculaMargin();
