$( document ).ready(function() {

  var white = true;
  var black = false;
  var current = [];
  var enemy = [];
  var pos = [];

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

  $(".piece").click(sq_and_piece);
  $("td").click(move);

  // function check(){
  //   debugger
  //   //if info in array call move
  //   if(current.length != 0){
  //     move();
  //   }
  // }

  function move(){
    //debugger
    $(this).addClass("piece")
    $(this).attr("id", current[0]);
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

  function sq_and_piece(){ //get info of square and piece
    var $td = $(this).attr("data-num");
    var $piece = $(this).attr("id");
    current.push($piece);
    pos.push($td);
    console.log($td);
    console.log($piece);
  }


});
