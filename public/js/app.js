"use strict";

import { Router } from "./router.js"
import { getData } from "./helper/api.js"

const submit = document.querySelector("#submit");

submit.addEventListener("click", getData, false);

const router = new Router()

router.init()
