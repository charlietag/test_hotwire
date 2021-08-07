// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import "@hotwired/turbo-rails"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
ActiveStorage.start()

import "controllers"


// document.addEventListener("turbo:load", function() {
//   If no using with stimulus,
//     I have to bind event like click using jquery ,
//     and all jquery binding must be placed within Event turbo:load
//     But if with simulus , I rarely need to use turbo:load manually
// })

// document.addEventListener("turbo:load", function() {
//   ref. https://www.youtube.com/watch?v=mQ_Vosc4tkM
//   GA()
// })

// Use Turbo with stimulus, do not put script in <body>
