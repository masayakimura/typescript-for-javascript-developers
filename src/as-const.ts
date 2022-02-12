export {};

let name = "Atsushi";

name = "ham";

let nickname = "Ham" as const;
nickname = "Ham";

let profile = {
  name: "Atsushi",
  height: 178,
} as const;

// profile.height = 188;
