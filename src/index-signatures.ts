export {};

interface Profile {
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: "Hum", underTwenty: false };

// {[index:typeForIndex]: typeForValue}
profile.name = "Ham";
profile.age = 43;
profile.nationality = "Japan";
