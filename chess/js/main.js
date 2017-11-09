$( document ).ready(function() {

  var white = true;
  var black = false;
  var current = [];
  var enemy = [];
  var pos = [];
  var time;
  var countDownInterval;

  $(".container").hide();
  $(".lost").hide();
  $("#reset").hide();
  $("#play").click(revealBoard);
  $("#lose").click(forfeit);
  $("#reset").click(reset);

  //Function to hide button and reveal board
  function revealBoard() {
    $(".container").show();
    $("#play").hide();
    timers();
  }

  //function to forfeit
  function forfeit(){
    $(".lost").show();
    $("#reset").show();
    if(white){
      $(".lost").html("White forfeits. Black wins!!");
    }else{
      $(".lost").html("Black forfeits. White wins!!");
    }
    clearInterval(countDownInterval);
  }

  function reset(){
    location.reload();
  }

  //changes the players turn
  function changeTurn(){
    white = !white;
    black = !black;
    if(white){
      $(".playerTurn").html("It is White's move");
    }else if(black){
      $(".playerTurn").html("It is Black's move");
    }
  }

  $("td").click(checkThisOut);

  //selects the piece if the square contains a piece
  function checkThisOut() {
    if ($(this).hasClass("piece")) {
      sq_and_piece($(this));
    }
  }

  //gets info of square and piece
  function sq_and_piece(selectedsq){
    var $td = selectedsq.attr("data-num");
    var $piece = selectedsq.attr("id");
    current.push($piece);
    pos.push($td);
  }

  $("td").dblclick(checkArray); //eventually change to finding class of empty

  //Calls the function move if there is piece selected
  function checkArray(){
    // if($(this).hasClass("empty")){
    if(current.length != 0){
      move($(this));
    }
    current = [];
    pos = [];
  }

  //moves the selected piece to the square
  function move(selectedPiece){
    selectedPiece.addClass("piece").removeClass("empty")
    selectedPiece.attr("id", current[0]);
    var $previousPiece = $("td")[pos[0]];
    $($previousPiece).removeClass("piece").addClass("empty");
    clearInterval(countDownInterval);
    timers();
  }

  //checks if piece is white or black
  function checkPiece(piece){
    if(piece.indexOf("w") >= 0){
      return true;
    }else if(piece.indexOf("b") >= 0){
      return false;
    }
  }

  //sets the timer to 30 seconds
  function timers(){
    time = 30;
    // varcountDownInterval;
    countDownInterval = setInterval(function (){
      document.getElementById("time").innerHTML = "Time remaining: " + time + "s";
      time--;
      if(time < 0){
        changeTurn();
        time = 30;
      }
    }, 1000);
  }

});
