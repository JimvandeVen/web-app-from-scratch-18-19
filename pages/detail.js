function detail(data) {
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
  document.querySelector(".cards").innerHTML = markup
}

export { detail }
