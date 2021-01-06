 
var keyEventsEl = document.querySelector("#key-events");

function keydownAction(event) {
  // TODO: Complete keydown function
  var keyPressed = event.key;
  var keyCode = event.code;
  var keyBoard = event.altkey;
  
  
  document.querySelector("#key").innerHTML = keyPressed ;
  document.querySelector("#code").innerHTML = keyCode;
  document.querySelector("#altkey").innerHTML = keyBoard;

  document.querySelector("#status").innerHTML = "KEYDOWN Event";


}



function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event

document.addEventListener("keydown", keydownAction);