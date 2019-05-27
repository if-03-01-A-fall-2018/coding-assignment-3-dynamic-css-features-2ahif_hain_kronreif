window.onload = function() {
  let usernameInput = document.querySelector("#username-input")
  usernameInput.onkeydown = function(event) {
    if (usernameInput.value.length > 10 && !(event.keyCode == 8) && !(event.keyCode == 37) && !(event.keyCode == 39)) {
        return false
    }
  }
}
