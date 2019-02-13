function populateList(cards){
  const markup = cards.map(card => {
    if (card.imageUrl == undefined) return
    return `<a href="#${card.multiverseid}" class="cardContainer">
              <img src="${card.imageUrl}"></img>
            </a>`
  }).join('')

  document.querySelector(".cards").innerHTML = markup

  cards.innerHTML = markup
}

export { populateList }
