"use strict";


function addLoading() {
  const markup = `
    <img class="loading" src="https://backgroundcheckall.com/wp-content/uploads/2017/12/loading-gif-transparent-background-9.gif"><img>
  `

  document.querySelector(".cards").insertAdjacentHTML("afterBegin", markup)
}

export { addLoading}
