/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";
const suits = ["\u25ca", "\u2665", "\u2660", "\u2663"];
const number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

window.onload = function() {
  randomCard();
};

let myButton = document.querySelector("#myBtn");

myButton.addEventListener("click", function() {
  randomCard();
});

function randomCard() {
  let suit = Math.floor(Math.random() * suits.length);
  let n = Math.floor(Math.random() * number.length);

  cardColor(suit);

  let divSuitA = document.querySelector("#deckSuitA");
  let divSuitB = document.querySelector("#deckSuitB");
  let divNumber = document.querySelector("#cardNumber");

  divSuitA.innerHTML = suits[suit];
  divSuitB.innerHTML = suits[suit];
  divNumber.innerHTML = number[n];
}

function cardColor(suit) {
  if (suit == 0 || suit == 1) {
    let reDcolorA = document.querySelector("#deckSuitA");
    let reDcolorB = document.querySelector("#deckSuitB");
    reDcolorA.className = "paloa text-danger";
    reDcolorB.className = "palob text-danger";
  } else {
    let blackcolorA = document.querySelector("#deckSuitA");
    let blackcolorB = document.querySelector("#deckSuitB");
    blackcolorA.className = "paloa text-dark";
    blackcolorB.className = "palob text-dark";
  }
}
