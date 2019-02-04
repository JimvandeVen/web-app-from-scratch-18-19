'use strict'


let request = new XMLHttpRequest()

request.open("GET", "https://api.magicthegathering.io/v1/cards?page=311>", true)

request.onload = function(){
  let data = JSON.parse(this.response)
  if (request.status >= 200 && request.status< 400) {
    data.cards.forEach(card=>{
      console.log(card.name)
    })
  } else {
    console.log("error")
  }

  // console.log("data", data)
}

request.send()
