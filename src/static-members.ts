export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = "tomoe";
  static lastName: string = "hori";

  static work() {
    return `Hey, guys! this is ${this.firstName}. Are you interested in Typescript?`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
