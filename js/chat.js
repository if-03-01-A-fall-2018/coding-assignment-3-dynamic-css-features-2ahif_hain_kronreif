window.onload = function() {
  let usernameInput = document.querySelector("#username-input")
  usernameInput.onkeydown = function(event) {
    if (usernameInput.value.length > 10 ) {
      if (!(usernameInput.value == "Backspace")) {
        return false
      }
    }
  }
}
