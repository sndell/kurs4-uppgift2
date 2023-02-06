import Deck from './deck.mjs';
import Player from './player.mjs';
import Trash from './trash.mjs';

// Del 1
const deck = new Deck();
console.log(deck.cards);
deck.shuffle();
console.log(deck.cards);

// Del 2
const player1 = new Player('Slim');
const player2 = new Player('Luke');
console.log(player1.cards);
console.log(player2.cards);
player1.deal(deck.take(5));
player2.deal(deck.take(5));
console.log(deck.cards);
console.log(player1.cards);
console.log(player2.cards);
console.log(player1.value());
console.log(player2.value());

// Del 3
const trash = new Trash();
trash.trash(player1.take(2));
trash.trash(player2.take(2));
player1.deal(deck.take(2));
player2.deal(deck.take(2));
console.log(deck.cards);
console.log(player1.cards);
console.log(player2.cards);
console.log(player1.value());
console.log(player2.value());
trash.trash(player1.takeAll());
trash.trash(player2.takeAll());
deck.add(trash.takeAll());
deck.shuffle();
console.log(deck.cards);
