import { Controller } from "stimulus"
// import Rails from '@rails/ujs';

export default class extends Controller {
  // static targets = [ "myform", "content", "send" ]
  static targets = [ "content", "send" ]


  initialize() {
    // Trigger twice - Expected behavior
    //   1. preview from cache
    //   2. load from updated content from http request

    // data-turbo-preview can deal with this

    // console.log("Just initialize")
    if (document.documentElement.hasAttribute("data-turbo-preview")) {
      console.log("Just initialize - Preview")
      } else {
      console.log("Just initialize")

    }
  }

  connect() {
    // Trigger twice - Expected behavior
    //   1. preview from cache
    //   2. load from updated content from http request

    // data-turbo-preview can deal with this


    // console.log("Just connect")
    // console.log("Connect (myformTarget): ", this.myformTarget)
    // console.log("Connect (element): ", this.element)
    this.contentTarget.focus()

    if (document.documentElement.hasAttribute("data-turbo-preview")) {
      console.log("Just connect - Preview")
      } else {
      console.log("Just connect")

    }
  }

  disconnect() {
    // Trigger once - Expected behavior
    //   1. leave preview from cache for new http request
    console.log("Just disconnect")
  }



  reset() {
    // Trigger once - Expected behavior
    //   So --- almost event in Turbo+Stimulus is triggered normally
    console.log("Reset (element): ", this.element)

    this.element.reset()
    // this.myformTarget.reset()

    // Rails.enableElement(this.element)


    // document.getElementById("ss").disabled=false
    this.sendTarget.disabled = false

    // this.contentTarget.focus()
    this.contentTarget.focus()
  }
}
