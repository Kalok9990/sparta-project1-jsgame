$( document ).ready(function() {

  var white = true;
  var black = false;
  var current = [];
  var enemy = [];

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


  function move(){
    $(this).addClass("piece").attr("id", current[0]);
    current = [];
    // $(this).removeAttr("id");
    changeTurn();
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
    current.push($tr, $td, $piece);
    console.log($td);
    console.log($piece);
  }


});
