export {};

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(seacretNumber: number) {
    this._secretNumber = seacretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard("ともえ", 123456789);
// card.owner = "tomoe";
console.log(card.debugPrint());
card.secretNumber = 111111111;
console.log(card.debugPrint());
console.log(card.secretNumber);

// card._secretNumber;
