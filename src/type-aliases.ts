export {};

type Mojiretsu = string;

const fooString: string = "Hello";
const fooMojirestu: Mojiretsu = "Hello";

const example1 = {
  name: "tomoe",
  age: 24,
};

type Profile = { name: string; age: number };

const example2: Profile = {
  name: "nyannyan",
  age: 24,
};

type Profiles = typeof example1;
