var hasGP = false;
var repGP;

function canGame() {
  return "getGamepads" in navigator;
}

function reportOnGamepad() {
  var gp = navigator.getGamepads()[0];
  var html = "";
    html += "id: "+gp.id+"<br/>";

  for(var i=0;i<gp.buttons.length;i++) {
    html+= "Button "+(i+1)+": ";
    if(gp.buttons[i].pressed) html+= " pressed";
    html+= "<br/>";
  }

  for(var i=0;i<gp.axes.length; i+=2) {
    var axis1 = parseFloat(gp.axes[i]).toFixed(2);
    var axis2 = parseFloat(-1*gp.axes[i+1]).toFixed(2);
    axis1 = axis1 === "-0.00" ? "0.00" : axis1;
    axis2 = axis2 === "-0.00" ? "0.00" : axis2;
    html+= "Stick "+(Math.ceil(i/2)+1)+": "+ axis1 +"," + axis2 +"<br/>";
  }

  $("#gamepadDisplay").html(html);
}

$(document).ready(function() {

  if(canGame()) {

    var prompt = "To begin using your gamepad, connect it and press any button!";
    $("#gamepadPrompt").text(prompt);

    $(window).on("gamepadconnected", function() {
      hasGP = true;
      $("#gamepadPrompt").html("Gamepad connected!");
      //console.log("connection event");
      repGP = window.setInterval(reportOnGamepad,100);
    });

    $(window).on("gamepaddisconnected", function() {
      //console.log("disconnection event");
      $("#gamepadPrompt").text(prompt);
      window.clearInterval(repGP);
    });

    //setup an interval for Chrome
    var checkGP = window.setInterval(function() {
        if(navigator.getGamepads()[0]) {
        if(!hasGP) $(window).trigger("gamepadconnected");
        $(window).trigger("gamepadconnected");
        window.clearInterval(checkGP);
        }
    }, 500);
  }

});
