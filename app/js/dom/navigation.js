import _ from 'lodash';

(function navigation() {
  const button = document.querySelector('.navigation-toggler');

  button.addEventListener('click', () => {
    const navbar = document.querySelectorAll('.navigation-list');

    _.each(navbar, element => {
      element.classList.toggle('toggled');
    })
  });
})();

export function close() {
  const navbar = document.querySelectorAll('.navigation-list');

  _.each(navbar, element => {
    element.classList.remove('toggled');
  });
}
