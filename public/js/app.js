"use strict";

const submit = document.querySelector("#submit");
const app = document.querySelector("#root");
submit.addEventListener("click", getData, false);

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
      // let filteredData = res.cards.filter(card => {
      //   let isType = card.types.includes(type);
      //   return isType;
      // });
      console.log(res)
      removeCards();
      renderCards(res.cards)

    });
}

function renderCards(cards){
  if (cards.length == 0) {
    noCards()
  } else {
    populateContainer(cards)
  }
}

function noCards(){
  const cardContainer = document.createElement("div");
  cardContainer.setAttribute("class", "cardContainer");
  cardContainer.innerText = "No cards availible";
  app.appendChild(cardContainer);
}

function populateContainer(cards){
  const markup = cards.map(card => {
    if (card.imageUrl == undefined) return
    return `<a href="${card.multiverseid}">
              <img src="${card.imageUrl}"></img>
            </a>`
  }).join('')

  document.querySelector(".cards").innerHTML = markup


  cards.innerHTML = markup
}

function removeCards() {
  let cards = document.querySelectorAll(".cardContainer");
  cards.forEach(card => {
    card.parentNode.removeChild(card);
  });
}

// 0:
// artist: "Steve Prescott"
// cmc: 2
// colorIdentity: ["U"]
// colors: ["Blue"]
// foreignNames: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// id: "fab936d6-1de4-5182-916a-1ead4f764d8f"
// imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=122325&type=card"
// layout: "normal"
// legalities: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
// manaCost: "{1}{U}"
// multiverseid: 122325
// name: "Riptide Pilferer"
// number: "60"
// originalText: "Whenever Riptide Pilferer deals combat damage to a player, that player discards a card.↵Morph {U} (You may play this face down as a 2/2 creature for {3}. Turn it face up any time for its morph cost.)"
// originalType: "Creature - Merfolk Rogue"
// power: "1"
// printings: ["PLC"]
// rarity: "Uncommon"
// rulings: [{…}]
// set: "PLC"
// setName: "Planar Chaos"
// subtypes: (2) ["Merfolk", "Rogue"]
// supertypes: []
// text: "Whenever Riptide Pilferer deals combat damage to a player, that player discards a card.↵Morph {U} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its morph cost.)"
// toughness: "1"
// type: "Creature — Merfolk Rogue"
// types: ["Creature"]
// __proto__: Object
