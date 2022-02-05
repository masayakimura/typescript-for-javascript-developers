export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard("ともえ");
console.log(myVisaCard.owner);
// myVisaCard.owner = "tomoe";
