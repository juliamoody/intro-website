 btn.onclick = function() {
  print();
}
var buttons = document.querySelectorAll(button)
buttons.forEach(function (button) {
  var button = new bootstrap.Button(button)
  button.toggle()
})