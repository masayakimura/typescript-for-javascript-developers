export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstname: string,
      public middleName: string,
      public lastname: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person("ともえ");
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person("tomonyan");
console.log(meOsaka.name);

const michael = new English.Person("Michael", "Joseph", "Jackson");
console.log(michael);
