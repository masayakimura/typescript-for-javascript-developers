export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "tomoe",
  age: 23,
};

me.age++; //
console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: "shigeru",
  age: 40,
};

// friend.name++;

type YomitorSenyo<T> = {
  readonly [P in keyof T]: T[P];
};
