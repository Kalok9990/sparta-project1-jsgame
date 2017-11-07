$( document ).ready(function() {

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

  $("td").click(sq_and_piece);

  function move(tr, td, piece){
    debugger
    $(tr).addClass("active");

  }

  function sq_and_piece(){
    var tr = $(this).closest("tr").attr("id");
    var td = $(this).attr("data-num");
    var piece = $(this).attr("id");
    $(this).addClass("active");
    console.log(tr);
    console.log(td);
    console.log(piece);
    $("td").click(move(tr, td, piece));
  }


});
