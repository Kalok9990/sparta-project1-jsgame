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

  function checkThisOut() {
    if ($(this).hasClass("piece")) {
      sq_and_piece($(this));
    }
  }

  // $(".piece").click(sq_and_piece);
  $("td").dblclick(checkArray); //eventually change to finding class of empty

  function checkArray(){
    debugger
    //if info in array call move
    if(current.length != 0){
      move($(this));
    }
    current = [];
    pos = [];
  }

  function move(selectedPiece){
    debugger
    selectedPiece.addClass("piece")
    selectedPiece.attr("id", current[0]);
    var $previousPiece = $("td")[pos[0]];
    $($previousPiece).removeClass("piece");


    // $(this).removeAttr("id");
    // if(unit){
    //   if(!($(unit).indexOf(char))){
    //     $(this).addClass("piece").attr("id", unit);
    //   }
    //   else{
    //     alert("Cannot take your own piece!");
    //   }
    // }
  }

  function sq_and_piece(selectedsq){ //get info of square and piece
    debugger
    var $td = selectedsq.attr("data-num");
    var $piece = selectedsq.attr("id");
    current.push($piece);
    pos.push($td);
    console.log($td);
    console.log($piece);
  }

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
