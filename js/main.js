$( document ).ready(function() {

  var white = true;
  var black = false;
  var current = [];
  var enemy = [];
  var pos = [];

  $(".container").hide();
  $("#play").click(revealBoard);

  //Function to hide button and reveal board
  function revealBoard() {
    $(".container").show();
    $("#play").hide();
    countDown();
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
  }

  //checks if piece is white or black
  function checkPiece(piece){
    debugger
    if(piece.indexOf("w") >= 0){
      return true;
    }else if(piece.indexOf("b") >= 0){
      return false;
    }
  }

  //sets the timer to 30 seconds
  var i = 30;
  var countDownInterval;
  function countDown() {
    countDownInterval = setInterval(function () {
      console.log('interval running')
      document.getElementById("time").innerHTML = "Time remaining: " + i + "s";
      i--;
      if(i < 0){
        changeTurn();
        i = 30;
      }
    }, 1000);
  }


});
