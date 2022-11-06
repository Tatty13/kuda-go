const toTopBtn = document.querySelector('.to-top-btn');

function showToTopBtn() {
  const currScroll = window.pageYOffset;
  const deviceHeight = document.documentElement.clientHeight; 

  if (currScroll > deviceHeight) {
    toTopBtn.classList.add('to-top-btn_visible');
  } else {
    toTopBtn.classList.remove('to-top-btn_visible');
  }
}

function scrollToTheTop() {
  const currScroll = window.pageYOffset;
  if (currScroll > 0)
  window.scrollBy(0, -currScroll);
}

window.addEventListener('scroll', showToTopBtn);
toTopBtn.addEventListener('click', scrollToTheTop);

export {};