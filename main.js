window.addEventListener('resize', calculaMargin);

function calculaMargin() {
  var main = document.getElementsByTagName('main')[0];

  main.style.marginLeft = (window.innerWidth - 1060) / 2
}

calculaMargin();
