$( document ).ready(function() {
  console.log( "ready!" );

  var white = true;
  var black = false;

  // $(".container").hide();
  $("#play").click(revealBoard);
  //Function to hide button and reveal board
  function revealBoard() {
      $(".container").show();
      $("#play").hide();
  }

  //changes the players turn
  function changeTurn(){
    white = !white;
    black = !black;
  }

  var start = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

});
