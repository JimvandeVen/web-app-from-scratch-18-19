"use strict";

import { removeCards, renderCards } from "../cards.js"

function getData() {
  let cmc = document.querySelector("#CMC").value;
  let rarity = document.querySelector("#rarity").value;
  let type = document.querySelector("#type").value;
  let colors = document.querySelector("#colors").value;

  let url = `https://api.magicthegathering.io/v1/cards?types=${type}&rarity=${rarity}&cmc=${cmc}&colors=${colors}`;

  fetch(url)
    .then(data => {
      return data.json();
    })
    .then(res => {
      localStorage.setItem("data", JSON.stringify(res.cards))
      removeCards();
      renderCards(res.cards)
    });
}

export { getData }
