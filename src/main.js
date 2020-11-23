/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //console.log("Hello Rigo from the console!");
  document.querySelector("body").style.background = "#0E7E12";
  var card = (document.querySelector(".card").style.background = "white");
  var top = (document.querySelector(".suit-top").style.justifyContent =
    "flex-start");
  var middle = (document.querySelector(".suit-middle").style.justifyContent =
    "center");
  var bottom = (document.querySelector(".suit-bottom").style.justifyContent =
    "flex-end");
  
  var generateRandomNumber = middle => {
    let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
    let randomNumber = Math.floor(Math.random() * numbers.length);
    return numbers[randomNumber];
  };
  var generateRandomSuit = (top, bottom) => {
    let suits = ["♠", "♣", "♦", "♥"];
    let randomSuit = Math.floor(Math.random() * suits.length);
    return suits[randomSuit];
  };
  var colorCard = card => {
    "♥" && "♦" ? (card.style.color = "red") : (card.style.color = "black");
  };
  
};