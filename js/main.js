$( document ).ready(function() {
  console.log( "ready!" );

  var white = true;
  var black = false;

  // setPieces();
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

  // function setPieces(){
  //   for(var a, col, td, tr, i = 1; i < 33; i++){
  //     switch (i) {
  //       case 1:
  //         (a = "bRook", col = "black", td = "a", tr = "1")
  //         break;
  //       case 2:
  //         (a = "bKnight", col = "black", td = "a", tr = "2")
  //         break;
  //       case 3:
  //         (a = "bBishop", col = "black", td = "a", tr = "3")
  //         break;
  //       case 4:
  //         (a = "bQueen", col = "black", td = "a", tr = "4")
  //         break;
  //       case 5:
  //         (a = "bKing", col = "black", td = "a", tr = "5")
  //         break;
  //       case 6:
  //         (a = "bBishop", col = "black", td = "a", tr = "6")
  //         break;
  //       case 7:
  //         (a = "bKnight", col = "black", td = "a", tr = "7")
  //         break;
  //       case 8:
  //         (a = "bRook", col = "black", td = "a", tr = "8")
  //         break;
  //       case 17:
  //         (a = "wRook", col = "white", td = "h", tr = "1")
  //         break;
  //       case 18:
  //         (a = "wKnight", col = "white", td = "h", tr = "2")
  //         break;
  //       case 19:
  //         (a = "wBishop", col = "white", td = "h", tr = "3")
  //         break;
  //       case 20:
  //         (a = "wQueen", col = "white", td = "h", tr = "4")
  //         break;
  //       case 21:
  //         (a = "wKing", col = "white", td = "h", tr = "5")
  //         break;
  //       case 22:
  //         (a = "wBishop", col = "white", td = "h", tr = "6")
  //         break;
  //       case 23:
  //         (a = "wKnight", col = "white", td = "h", tr = "7")
  //         break;
  //       case 24:
  //         (a = "wRook", col = "white", td = "h", tr = "8")
  //         break;
  //       default:
  //         (a = "Pawn", col = "white", td = "a", tr = "1")
  //     }
  //     $("#board").append(
  //       a != "Pawn"
  //       ? '<div class="piece ' + col +'" data-piece="' + a + '" data-row="' + tr + '" data-num="' + td + '></div>'
  //       : 17 > i
  //         ? '<div class="piece black" data-piece="' + a + '" data-step="first" data-row="2" data-num="' + (i % 9 + 1) + '></div>'
  //         : '<div class="piece white" data-piece="' + a + '" data-step="first" data-row="7" data-num="' + (i % 8 + 1) + '></div>'
  //     )
  //   }
  // }

  //return piece and which square its on
  function sq_and_piece(){

  }

  function Pawn(){

  }


});
