class Trash {
  constructor() {
    this.cards = [];
  }

  trash = function (cards) {
    this.cards = [...this.cards, ...cards];
  };

  takeAll = function () {
    const cards = this.cards;
    this.cards = [];
    return cards;
  };
}

export default Trash;
