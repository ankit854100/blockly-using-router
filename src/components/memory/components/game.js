import fries from "../images/fries.png";
import cheeseburger from "../images/cheeseburger.png";
import iceCream from "../images/ice-cream.png";
import pizza from "../images/pizza.png";
import milkshake from "../images/milkshake.png";
import hotdog from "../images/hotdog.png";
import blank from "../images/blank.png";
import white from "../images/white.png";

const cardArray = [
  {
    name: "fries",
    img: fries
  },
  {
    name: "cheeseburger",
    img: cheeseburger
  },
  {
    name: "ice-cream",
    img: iceCream
  },
  {
    name: "pizza",
    img: pizza
  },
  {
    name: "milkshake",
    img: milkshake
  },
  {
    name: "hotdog",
    img: hotdog
  },
  {
    name: "fries",
    img: fries
  },
  {
    name: "cheeseburger",
    img: cheeseburger
  },
  {
    name: "ice-cream",
    img: iceCream
  },
  {
    name: "pizza",
    img: pizza
  },
  {
    name: "milkshake",
    img: milkshake
  },
  {
    name: "hotdog",
    img: hotdog
  }
];

cardArray.sort(() => 0.5 - Math.random());

// variales
let currentCardId;
let isClicked = false;
let noOfCards = 0;
let score = 0;

const grid = document.querySelector(".grid");
// const resultDisplay = document.querySelector("#result");
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

//create your board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    var card = document.createElement("img");
    card.setAttribute("src", blank);
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}

//check for matches
function checkForMatch() {
  var cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];

  if (optionOneId === optionTwoId) {
    cards[optionOneId].setAttribute("src", blank);
    cards[optionTwoId].setAttribute("src", blank);
    alert("You have clicked the same image!");
  } else if (cardsChosen[0] === cardsChosen[1]) {
    alert("You found a match");
    cards[optionOneId].setAttribute("src", white);
    cards[optionTwoId].setAttribute("src", white);
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", blank);
    cards[optionTwoId].setAttribute("src", blank);
    // alert("Sorry, try again");
  }
  cardsChosen = [];
  cardsChosenId = [];
  // resultDisplay.textContent = cardsWon.length;
  // if (cardsWon.length === cardArray.length / 2) {
  //   resultDisplay.textContent = "Congratulations! You found them all!";
  // }

  // console.log(cardsChosen, cardsChosenId, cardsWon);
}

function sameCards() {
  var cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];

  cards[optionOneId].setAttribute("src", white);
  cards[optionTwoId].setAttribute("src", white);
  cards[optionOneId].removeEventListener("click", cardClickFunction());
  cards[optionTwoId].removeEventListener("click", cardClickFunction());
  cardsWon.push(cardsChosen);

  cardsChosen.length = 0;
  cardsChosenId.length = 0;
  noOfCards = 0;
}

//cards onClick function
function cardClickFunction() {
  currentCardId = this.getAttribute("id");
  isClicked = true;
  noOfCards++;
}

function flipCard() {
  if (currentCardId !== -1) {
    var card = document.getElementById(currentCardId);
    cardsChosen.push(cardArray[currentCardId].name);
    cardsChosenId.push(currentCardId);
    card.setAttribute("src", cardArray[currentCardId].img);
    console.log(cardsChosen);
    // if (cardsChosen.length === 2) {
    //   setTimeout(checkForMatch, 500);
    // }
  }
  isClicked = false;
}

function resetArrays() {
  cardsChosen.length = 0;
  cardsChosenId.length = 0;
  noOfCards = 0;
}

function restore() {
  var cards = document.querySelectorAll("img");
  if (cards.length > 0) {
    for (let i = 0; i < 12; i++) {
      cards[i].remove();
    }
  }

  cardsChosen.length = 0;
  cardsChosenId.length = 0;
  cardsWon.length = 0;
  noOfCards = 0;
  currentCardId = -1;
  isClicked = false;
  cardArray.sort(() => 0.5 - Math.random());
}

function incrementScore() {
  score++;
  var s = document.getElementById("score");
  s.innerHTML = "Score: " + score;
}

function removeScore() {
  var s = document.getElementById("score");
  s.innerHTML = "";
}

function wonCardsPush(data) {
  cardsWon.push(data);
}

export default createBoard;
export {
  flipCard,
  cardArray,
  restore,
  isClicked,
  cardClickFunction,
  noOfCards,
  cardsChosen,
  cardsChosenId,
  blank,
  resetArrays,
  wonCardsPush,
  white,
  incrementScore,
  score,
  removeScore,
  sameCards
};
