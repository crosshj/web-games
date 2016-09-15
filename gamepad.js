function checkGamepad(){
  if(navigator.getGamepads){
    var message = "gamepad api IS supported";
    var node = document.createElement("div");
    var textnode = document.createTextNode(message);
    node.appendChild(textnode);
    document.body.appendChild(node);
  } else {
    var message = "gamepad api NOT supported";
    var node = document.createElement("div");
    var textnode = document.createTextNode(message);
    node.appendChild(textnode);
    document.body.appendChild(node);
  }
}

document.addEventListener("DOMContentLoaded", function(event) { 
  checkGamepad();
});
