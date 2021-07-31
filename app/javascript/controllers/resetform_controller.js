import { Controller } from "stimulus"
// import Rails from '@rails/ujs';

export default class extends Controller {
  // static targets = [ "myform", "content", "send" ]
  static targets = [ "content", "send" ]


  initialize() {
    console.log("Just initialize")
  }
  connect() {
    console.log("Just connect")
    // console.log("Connect (myformTarget): ", this.myformTarget)
    // console.log("Connect (element): ", this.element)
    this.contentTarget.focus()
  }

  reset() {
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
