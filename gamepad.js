function checkGamepad(){
  var isSupported = false;
  if(navigator.getGamepads){
    var message = "gamepad api IS supported";
    var node = document.createElement("div");
    var textnode = document.createTextNode(message);
    node.appendChild(textnode);
    document.body.appendChild(node);
    isSupported = true;
  } else {
    var message = "gamepad api NOT supported";
    var node = document.createElement("div");
    var textnode = document.createTextNode(message);
    node.appendChild(textnode);
    document.body.appendChild(node);
  }
  return isSupported;
}

document.addEventListener("DOMContentLoaded", function(event) { 
  if (checkGamepad()){
    var gamepads = navigator.getGamepads();
  }
});

//meh - do it later

	
