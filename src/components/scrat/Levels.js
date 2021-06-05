// 1-> web
// 2->tree
// 3->carrot
// 4->initial position of carrot
// 5->destination

const level0 = {
  coordinates: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 3, 3, 3, 3, 4, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ]
};

const level1 = {
  coordinates: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 5, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ]
};

const level2 = {
  coordinates: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 5, 0, 0, 0, 0, 0],
    [0, 0, 3, 3, 3, 4, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ]
};

const level3 = {
  coordinates: [
    [0, 0, 0, 0, 2, 0, 4],
    [0, 5, 3, 0, 3, 3, 3],
    [0, 3, 0, 3, 0, 2, 0],
    [0, 0, 2, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ]
};

const level4 = {
  coordinates: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 0, 0],
    [0, 0, 5, 3, 0, 2, 0],
    [0, 0, 0, 0, 0, 1, 3],
    [0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0, 1, 4]
  ]
};

const level5 = {
  coordinates: [
    [0, 0, 0, 0, 2, 0, 4],
    [0, 0, 0, 0, 0, 3, 0],
    [0, 0, 0, 3, 1, 0, 0],
    [0, 0, 0, 0, 0, 3, 2],
    [0, 0, 0, 3, 0, 1, 0],
    [0, 0, 0, 0, 3, 5, 0],
    [0, 0, 0, 0, 1, 0, 0]
  ]
};

const level6 = {
  coordinates: [
    [0, 0, 0, 0, 2, 0, 4],
    [0, 0, 0, 3, 0, 0, 3],
    [0, 0, 0, 1, 3, 1, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 0, 1, 2, 3],
    [0, 0, 0, 5, 2, 0, 0],
    [0, 0, 0, 0, 0, 3, 0]
  ]
};

const level7 = {
  coordinates: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 2, 0],
    [0, 0, 5, 3, 0, 3, 0],
    [0, 0, 1, 0, 1, 0, 2],
    [0, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 0, 1, 3, 2],
    [0, 0, 1, 0, 0, 0, 4]
  ]
};

const level8 = {
  coordinates: [
    [5, 0, 0, 2, 0, 0, 0],
    [3, 3, 1, 0, 3, 0, 0],
    [1, 0, 0, 2, 0, 0, 0],
    [0, 2, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 0, 0],
    [0, 0, 2, 0, 3, 0, 0],
    [0, 0, 0, 0, 0, 0, 4]
  ]
};

const level9 = {
  coordinates: [
    [3, 0, 0, 0, 3, 0, 5],
    [0, 1, 2, 0, 1, 3, 2],
    [0, 3, 0, 0, 2, 0, 0],
    [0, 0, 2, 0, 3, 0, 0],
    [1, 3, 0, 0, 0, 2, 0],
    [3, 0, 1, 0, 0, 0, 0],
    [4, 1, 0, 0, 0, 0, 0]
  ]
};

const level10 = {
  coordinates: [
    [0, 0, 0, 0, 2, 0, 4, 0],
    [0, 0, 0, 2, 3, 0, 3, 0],
    [0, 0, 3, 0, 0, 1, 0, 0],
    [2, 0, 0, 0, 1, 0, 3, 0],
    [1, 0, 1, 0, 1, 0, 2, 0],
    [3, 3, 3, 0, 0, 3, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 0]
  ]
};

// [0, 0, 0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0];

// loop levels

const level11 = {
  coordinates: [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]
};

const level12 = {
  coordinates: [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 0, 0, 0, 0, 0, 0]
  ]
};

const level13 = {
  coordinates: [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 3]
  ]
};

const level14 = {
  coordinates: [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 3, 3, 3, 3, 3, 3],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]
};

const level15 = {
  coordinates: [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 0, 0],
    [0, 0, 0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 3]
  ]
};

const level16 = {
  coordinates: [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 0, 0, 0, 0, 0, 0],
    [0, 3, 3, 0, 0, 0, 0, 0],
    [0, 3, 3, 0, 0, 0, 0, 0],
    [0, 3, 3, 0, 0, 0, 0, 0],
    [0, 3, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]
};

const level17 = {
  coordinates: [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 0, 0, 0, 0, 0, 0],
    [0, 3, 0, 0, 0, 0, 0, 0],
    [0, 3, 3, 3, 0, 0, 0, 0],
    [0, 3, 0, 0, 0, 0, 0, 0],
    [0, 3, 3, 3, 0, 0, 0, 0],
    [0, 3, 0, 0, 0, 0, 0, 0],
    [0, 3, 3, 3, 0, 0, 0, 0]
  ]
};

const level18 = {
  coordinates: [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 0, 0, 0, 0, 0, 0],
    [3, 0, 3, 0, 0, 0, 0, 0],
    [0, 3, 0, 0, 0, 0, 0, 0],
    [3, 0, 3, 0, 0, 0, 0, 0],
    [0, 3, 0, 0, 0, 0, 0, 0],
    [3, 0, 3, 0, 0, 0, 0, 0],
    [0, 3, 0, 0, 0, 0, 0, 0]
  ]
};

const level19 = {
  coordinates: [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 0, 0, 0, 0, 0, 0],
    [0, 3, 3, 3, 0, 0, 0, 0],
    [0, 3, 3, 3, 0, 0, 0, 0],
    [0, 3, 3, 3, 0, 0, 0, 0],
    [0, 3, 3, 3, 0, 0, 0, 0],
    [0, 3, 3, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]
};

const level20 = {
  coordinates: [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 0, 0, 0, 0, 0, 0],
    [0, 3, 3, 3, 3, 3, 3, 0],
    [0, 3, 3, 3, 3, 3, 3, 0],
    [0, 3, 3, 3, 3, 3, 3, 0],
    [0, 3, 3, 3, 3, 3, 3, 0],
    [0, 3, 3, 3, 3, 3, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]
};

const level21 = {
  coordinates: [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 3, 3, 3, 3, 3, 3],
    [0, 0, 3, 0, 3, 0, 3, 0],
    [0, 0, 3, 3, 3, 3, 3, 3],
    [0, 0, 3, 0, 3, 0, 3, 0],
    [0, 0, 3, 3, 3, 3, 3, 3],
    [0, 0, 3, 0, 3, 0, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]
};

const level22 = {
  coordinates: [
    [0, 0, 0, 3, 0, 3, 0, 3],
    [0, 4, 3, 0, 3, 0, 3, 0],
    [0, 0, 0, 3, 0, 3, 0, 3],
    [0, 0, 3, 0, 3, 0, 3, 0],
    [0, 0, 0, 3, 0, 3, 0, 3],
    [0, 0, 3, 0, 3, 0, 3, 0],
    [0, 0, 0, 3, 0, 3, 0, 3],
    [0, 0, 3, 0, 3, 0, 3, 0]
  ]
};

const level23 = {
  coordinates: [
    [0, 0, 0, 3, 0, 0, 3, 0],
    [0, 4, 3, 0, 3, 3, 0, 3],
    [0, 0, 0, 3, 0, 0, 3, 0],
    [0, 0, 0, 3, 0, 0, 3, 0],
    [0, 0, 3, 0, 3, 3, 0, 3],
    [0, 0, 0, 3, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]
};

const level24 = {
  coordinates: [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 1, 3, 1, 3, 1, 3],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 3, 1, 3, 1, 3],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 3, 1, 3, 1, 3],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 3, 1, 3, 1, 3]
  ]
};

const level25 = {
  coordinates: [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 0, 3, 0, 3, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 0, 3, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]
};

export default level1;
export {
  level2,
  level3,
  level4,
  level5,
  level6,
  level7,
  level8,
  level9,
  level10,
  level0,
  level11,
  level12,
  level13,
  level14,
  level15,
  level16,
  level17,
  level18,
  level19,
  level20,
  level21,
  level22,
  level23,
  level24,
  level25
};