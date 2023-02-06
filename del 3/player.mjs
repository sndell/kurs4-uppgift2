class Player {
  constructor(name) {
    this.name = name;
    this.cards = [];
  }

  deal = function (cards) {
    console.log('cards');
    console.log(cards);
    this.cards = [...this.cards, ...cards];
  };

  value = function () {
    let value = 0;
    this.cards.forEach((card) => (value += card.value));
    return value;
  };

  take = function (amount) {
    const cards = this.cards.slice(0, amount);
    this.cards = this.cards.slice(amount, this.cards.length);
    console.log(this.cards);
    return cards;
  };

  takeAll = function () {
    const cards = this.cards;
    this.cards = [];
    return cards;
  };
}

export default Player;
