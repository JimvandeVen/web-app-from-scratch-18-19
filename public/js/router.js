"use strict";

import { getDetails } from "./pages/detail.js"
import { emptyDOM, renderCards } from "./cards.js"

class Router {
  constructor(){
}

  init() {
    window.addEventListener("hashchange", ()=>{
      let multiverseid = window.location.hash.substr(1)
      if (multiverseid == ""){
        emptyDOM()
        let data = JSON.parse(localStorage.getItem("data"))
        renderCards(data)
      } else {
          getDetails(multiverseid)
      }
    })

}
}

export { Router }
