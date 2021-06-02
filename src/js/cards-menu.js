import cards from '../menu.json';
import cardsMenuTpl from '../templates/cards-menu.hbs';
// import cardMenuTpl from './templates/card-menu.hbs';

const refs = {
  cardsMenu: document.querySelector('.js-menu'),
};

const cardsMenuMarkup = cardsMenuTpl(cards);
refs.cardsMenu.insertAdjacentHTML('beforeend', cardsMenuMarkup);

// function createMenuCardsMarkup() {
//   return cards.map(cardMenuTpl).join('');
// }
