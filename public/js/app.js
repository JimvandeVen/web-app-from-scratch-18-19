"use strict";

// import { Router } from "./router.js"

import { getData } from "./helper/api.js"

import { getDetails } from "./pages/detail.js"

import { removeCards, renderCards } from "./cards.js"


const submit = document.querySelector("#submit");

submit.addEventListener("click", getData, false);

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
