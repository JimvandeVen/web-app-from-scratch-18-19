"use strict";


function addLoading() {
  const markup = `
    <img class="loading" src="http://expertblogz.com/sz6b1605-8566-4611-b085-0fea430a6525/images/loading.gif"><img>
  `

  document.querySelector(".cards").insertAdjacentHTML("afterBegin", markup)
}

export { addLoading}
