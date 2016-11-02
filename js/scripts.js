function NewPlayer(playerName) {
  this.playerName = playerName;
  this.score = 0;
  this.playing = 0;
}



var playersArray = [];


$(document).ready(function() {
  $("form#user-name").submit(function(event) {
    event.preventDefault();
    var playerName = $("#user-name input").val();
    var player = new NewPlayer(playerName);
    playersArray.push(player);

    $("#box-holder").append("



    ")


    if (playersArray.length ===  2) {
      $("div#user-wrap").fadeOut(500);
      $(".initial-hidden").show();
    }



    $('user-name span').text(playersArray.length + 1)


  });
});
