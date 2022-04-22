// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

import './utilities.js';

import initMobileMenu from './menu.js';
import initFilterizr from '../../modules/sections/portfolio/portfolio.js';
import countTextareaCharacters from '../../modules/sections/contact/contact.js';

window.addEventListener('load', () => {
  initMobileMenu();
  initFilterizr();
  countTextareaCharacters();
});
