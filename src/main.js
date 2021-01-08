/* eslint-disable */
import "bootstrap";
import "./style.css";

var generateRandomNumber = () => {
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let randomNumber = Math.floor(Math.random() * numbers.length);
  return numbers[randomNumber];
};
var generateRandomSuit = () => {
  let suits = ["♠", "♣", "♦", "♥"];
  let randomSuit = Math.floor(Math.random() * suits.length);
  return suits[randomSuit];
};
//var colorCard = () => {
//  "♥" || "♦" ? (card.style.color = "red") : (card.style.color = "black");
//};

window.onload = function() {
  //console.log("Hello Rigo from the console!");
  document.querySelector("body").style.background = "#0E7E12";
  var card = document.querySelector(".card");
  card.style.background = "white";
  var top = document.querySelector(".suit-top");
  var middle = document.querySelector(".suit-middle");
  var bottom = document.querySelector(".suit-bottom");

  middle.textContent = generateRandomNumber();
  var suit = generateRandomSuit();
  top.textContent = suit;
  bottom.textContent = suit;

  if (suit === "♥" || suit === "♦") {
    card.style.color = "red";
  } else {
    card.style.color = "black";
  }
};
