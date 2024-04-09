import "./style.css";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomCard() {
  const suits = ["♥️", "♠️", "♣️", "♦️"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const randomSuit = suits[getRandomInt(0, suits.length - 1)];
  const randomValue = values[getRandomInt(0, values.length - 1)];

  return {
    suit: randomSuit,
    value: randomValue
  };
}

function displayCard(card) {
  const cardElement = document.getElementById("card");
  cardElement.innerHTML = `
    <div class="${getSuitClass(card.suit)}">${card.suit}</div>
    <div class="value">${card.value}</div>
    <div class="${getSuitClass(card.suit)}">${card.suit}</div>
  `;
}

function getSuitClass(suit) {
  switch (suit) {
    case "♥️":
    case "♦️":
      return "red-suit";
    case "♠️":
    case "♣️":
      return "black-suit";
    default:
      return "";
  }
}

window.onload = function() {
  const randomCard = generateRandomCard();
  displayCard(randomCard);
};
