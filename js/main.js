const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function init() {
  setTimeout(() => {
    loader.style.display = 'none';
    loader.style.opacity = 0;

    main.style.display = 'block';
    setTimeout(() => {
      main.style.opacity = 1;
    }, 50);
  }, 4000);
}

init();
