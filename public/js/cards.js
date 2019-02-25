"use strict";

import { populateList } from "./pages/list.js"

function removeCards() {
  const markup = ``
  document.querySelector(".cards").innerHTML = markup
}

function renderCards(cards){
  (cards.length == 0 ? noCards() : populateList(cards))
}

function noCards(){
  const cards = document.querySelector(".cards")
  const cardContainer = document.createElement("div");
  cardContainer.setAttribute("class", "cardContainer");
  cardContainer.innerText = "No cards availible";
  cards.appendChild(cardContainer);
}

export { removeCards, renderCards }
