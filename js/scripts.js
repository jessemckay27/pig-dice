function NewPlayer(playerName) {
  this.playerName = playerName;
  this.score = 0;
  this.number = playersArray.length;
}

NewPlayer.prototype.roll = function (){
  var dice = Math.floor((Math.random() * 6) + 1);
  return dice;
}

NewPlayer.prototype.getID = function (){
  var i = this.number;
  return i;
}

var playersArray = [];

$(document).ready(function() {
  $("form#user-name").submit(function(event) {
    event.preventDefault();
    var playerName = $("#user-name input").val();
    var player = new NewPlayer(playerName);
    playersArray.push(player);





    $("#box-holder").append("<div id='box" + (playersArray.length) + "' class='col-lg-6 col-md-6 col-sm-6 col-xs-12 '><div class='box'><div class='box-top'><h2>"+ playerName +"</h2><div>Player "+(playersArray.length)+"</div></div><div class='box-mid'><h3>Current Score:</h3><div><span>0</span></div></div><div class='box-btm'><div class='box-btm-top'><h3>Turn Total</h3><div>0</div></div><div class='box-btm-mid'></div><div class='box-btm-btm'></div></div></div></div>");


    if (playersArray.length ===  2) {
      $("div#user-wrap").fadeOut(0, function (){
        $(".box").fadeIn(0);
      });
    }
    $('#user-name span').text(playersArray.length+1)

    var playerName = $("#user-name input").val("");
  });



    $("#roll").click(function (){
      console.log(player.getID());
      var i = player.getId();
      console.log(i);
      $("#box"  + i + " .box-btm-top div").text(playersArray[].roll());

    });
    $("#hold").click(function (){

    });



});
