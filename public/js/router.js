"use strict";

import { getDetails } from "./pages/detail.js"

import { removeCards, renderCards } from "./cards.js"

class Router {
  constructor(){
}

  init() {
    // Set listener for router changes
    window.addEventListener("hashchange", ()=>{
      let multiverseid = window.location.hash.substr(1)
      console.log("changed hash", multiverseid)
      if (multiverseid == ""){
        let data = JSON.parse(localStorage.getItem("data"))
        renderCards(data)
      } else {
          getDetails(multiverseid)
      }
    })

}
}

export { Router }