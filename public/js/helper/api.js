"use strict";

import { emptyDOM, renderCards } from "../cards.js"
import { addLoading } from "../../loading.js"

const config = {
  endpoint:"https://api.magicthegathering.io/v1/cards",
  cmc: document.querySelector("#CMC").value,
  rarity: document.querySelector("#rarity").value,
  type: document.querySelector("#type").value,
  colors: document.querySelector("#colors").value
}

async function getData() {
  addLoading()
  let url = `${config.endpoint}?types=${config.type}&rarity=${config.rarity}&cmc=${config.cmc}&colors=${config.colors}`;

  let result = await fetch(url)
    .then(data => {
      return data.json();
    })
    .then(res => {
      localStorage.setItem("data", JSON.stringify(res.cards))
      emptyDOM();
      renderCards(res.cards)
    });

}

export { getData }
