"use strict";

let submit = document.querySelector("#form");
submit.addEventListener("change", renderCards, false);

function renderCards() {
  removeCards();
  const app = document.querySelector("#root");
  let cmc = document.querySelector("#CMC").value;
  let rarity = document.querySelector("#rarity").value;

  let url = `https://api.magicthegathering.io/v1/cards?rarity=${rarity}&cmc=${cmc}`;

  fetch(url)
    .then(data => {
      console.log("searching");
      return data.json();
    })
    .then(res => {
      let filteredData = res.cards.filter(card => {
        let isLand = true;
        card.types.forEach(type => {
          if (type == "Land") {
            console.log("true", card);
            isLand = false;
          }
        });
        return isLand;
      });
      console.log(filteredData);

      if (filteredData.length == 0) {
        const cardContainer = document.createElement("div");
        cardContainer.setAttribute("class", "cardContainer");
        cardContainer.innerText = "No cards availible";
        app.appendChild(cardContainer);
      } else {
        filteredData.forEach(card => {
          if (card.imageUrl !== undefined) {
            const cardContainer = document.createElement("div");
            cardContainer.setAttribute("class", "cardContainer");
            app.appendChild(cardContainer);

            const cardImg = document.createElement("img");
            cardImg.src = card.imageUrl;
            cardContainer.appendChild(cardImg);
          }
        });
      }
    });
}

function removeCards() {
  // Removes an element from the document
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
