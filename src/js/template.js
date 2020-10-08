import templates from '../templates/menu-item.hbs'
import menu from '../menu.json'
const markup = templates(menu);
const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);
