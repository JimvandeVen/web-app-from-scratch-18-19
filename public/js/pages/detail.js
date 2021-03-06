"use strict"

import { emptyDOM } from "../cards.js"
import { addLoading } from "../../loading.js"

async function getDetails(multiverseid){
  addLoading()
  let url = `https://api.magicthegathering.io/v1/cards?multiverseid=${multiverseid}`

  let result = await fetch(url)
    .then(data => {
      return data.json();
    })
    .then(res => {
      emptyDOM();
      populateDetail(res.cards[0])
    });
}

function populateDetail(data) {
  const markup = `
    <h1>${data.name}</h1>
    <img src="${data.imageUrl}"></img>
    <ul>
      <li>Colors: ${data.colors}</li>
      <li>Mana cost: ${data.manaCost}</li>
      <li>Original text: ${data.originalText}</li>
      <li>Original type: ${data.originalType}</li>
      <li>Set name: ${data.setName}</li>
      <li>Rarity: ${data.rarity}</li>
      <li>Subtypes: ${data.subtypes}</li>
    </ul>
  `
  document.querySelector(".cards").insertAdjacentHTML("afterBegin", markup)
  window.scrollTo(0,0)
}

export { getDetails }
