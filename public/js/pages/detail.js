"use strict"

import { removeCards } from "../cards.js"

function getDetails(multiverseid){
  let url = `https://api.magicthegathering.io/v1/cards?multiverseid=${multiverseid}`
  fetch(url)
    .then(data => {
      return data.json();
    })
    .then(res => {
      console.log(res);
      removeCards();
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
}

export { getDetails }
