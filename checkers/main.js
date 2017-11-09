$(document).ready(function() {

  // $(".container").hide();
  $("#play").click(revealBoard);

  //Function to hide button and reveal board
  function revealBoard() {
    $(".container").show();
    $("#play").hide();
    countDown();
  }

  var gameboard = [
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [2, 0, 2, 0, 2, 0, 2, 0],
    [0, 2, 0, 2, 0, 2, 0, 2],
    [2, 0, 2, 0, 2, 0, 2, 0]
  ];

  //stores instances as arrays
  var pieces = [];
  var tiles =[];
  var player1 = true;
  var player2 = false;
  var king = false;
  //Pythagoras' Theorem
  function getDistance(x1, x2, y1, y2){
    return Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
  }

  var Board = {
    board: gameboard,
    playerTurn: 1,
    tilesElem: $(".alltiles"),
    viewpoint: ["0vmin", "10vmin", "20vmin", "30vmin", "40vmin", "50vmin", "60vmin", "70vmin", "80vmin", "90vmin"],
    //initialise 8x8 board
    initialise: function(){
      var countPieces = 0;
      var countTiles = 0;
      for(row in this.board){
        for(column in this.board[row]){
          if(row%2 === 1){
            if(column%2 === 0){
              this.tilesElem.append('<div class="tiles" id="tile'+countTiles+'" data-num=' + countTiles +' style="top:'+this.viewpoint[row]+';left:'+this.viewpoint[column]+'; background-color: gray;"></div>');
              tiles[countTiles] = new Tile($("#tile"+countTiles), [parseInt(row), parseInt(column)]);
              countTiles++;
            }else if(column%2 === 1){
              this.tilesElem.append('<div class="tiles" id="tile'+countTiles+'" data-num=' + countTiles +'  style="top:'+this.viewpoint[row]+';left:'+this.viewpoint[column]+'; background-color: #f4a460;"></div>');
              tiles[countTiles] = new Tile($("#tile"+countTiles), [parseInt(row), parseInt(column)]);
              countTiles++;
            }
          }else{
            if(column%2 === 0){
              this.tilesElem.append('<div class="tiles" id="tile'+countTiles+'" data-num=' + countTiles +'  style="top:'+this.viewpoint[row]+';left:'+this.viewpoint[column]+'; background-color: #f4a460;"></div>');
              tiles[countTiles] = new Tile($("#tile"+countTiles), [parseInt(row), parseInt(column)]);
              countTiles++;
            }else if(column%2 === 1){
              this.tilesElem.append('<div class="tiles" id="tile'+countTiles+'" data-num=' + countTiles +'  style="top:'+this.viewpoint[row]+';left:'+this.viewpoint[column]+'; background-color: gray;"></div>');
              tiles[countTiles] = new Tile($("#tile"+countTiles), [parseInt(row), parseInt(column)]);
              countTiles++;
            }
          }
          if(this.board[row][column] == 1) {
            $(".player1pieces").append('<div class="piece" id="'+countPieces+'" style="top:'+this.viewpoint[row]+';left:'+this.viewpoint[column]+';"></div>');
            pieces[countPieces] = new Piece($("#"+countPieces), [parseInt(row), parseInt(column)]);
            countPieces++;
          }else if(this.board[row][column] == 2){
            $(".player2pieces").append('<div class="piece" id="'+countPieces+'" style="top:'+this.viewpoint[row]+';left:'+this.viewpoint[column]+';"></div>');
            pieces[countPieces] = new Piece($("#"+countPieces), [parseInt(row), parseInt(column)]);
            countPieces++;
          }
        }
      }
    },

    //checks if tile is ok to move to
    isValidToMove: function(row, column){
      if(this.board[row][column] === 0){
        return true;
      }
      return false;
    }

    // clear: function(){
    //   //reload page?
    // }
  }

  function changeTurn(){
    player1 != player1;
    player2 != player2;
    if(player1){
      this.player = 1;
      $(".playerTurn").html("It is player 1's turn");
    }else if(player2){
      this.player = 2;
      $(".playerTurn").html("It is player 2's turn");
    }
  }

  function Tile(element, position){
    //links the DOM element
    this.element = element;
    //position of tile
    this.position = position;
  }

  function inRange(selectpiece, x, y){
    debugger;
    if(getDistance(x, y, selectpiece.position[0], selectpiece.position[1]) === Math.sqrt(2)){
      return "regular";
    }else if(getDistance(x, y, selectpiece.position[0], selectpiece.position[1]) === 2*Math.sqrt(2)){
      return "jumpover";
    }
  }


  function Piece(element, position){
    //links DOM element
    this.element = element;
    //position of piece
    this.position = position;
    //player
    this.player = " ";
    //assigns id to pieces which defines wich player it belongs to
    if(this.element.attr("id") < 12){
      this.player = 1;
    }else{
      this.player = 2;
    };
  }

  //function to king the piece
  function kingify(selectpiece){
    $(selectpiece).html("K");
  }

  //moves piece
  function movepiece(tile, selectpiece){
    $(selectpiece.element[0]).removeClass("selected");
    if(!Board.isValidToMove(tile.position[0], tile.position[1])){
      return false;
    }
    // //ensure piece cannot go backwards (unless its king)
    // if(player1 === true && king === false){
    //   if(tile.position[0] > piece.position[0]){
    //     return false;
    //   }
    // }else if(player2 === true && king === false){
    //   if(tile.position[0] < piece.position[0]){
    //     return false;
    //   }
    // }
    //removes piece and places in new tile
    Board.board[selectpiece.position[0]][selectpiece.position[1]] = 0;
    Board.board[tile.position[0]][tile.position[1]] = this.player;
    selectpiece.position = [tile.position[0], tile.position[1]];
    selectpiece.element.css('top', Board.viewpoint[selectpiece.position[0]]);
    selectpiece.element.css('left', Board.viewpoint[selectpiece.position[1]]);
    //kings the piece if it reaches the other side of the Board
    // if(!king && selectpiece.position[0] === 0 || selectpiece.position[0] === 7){
    //   piece.kingify();
    // }
    changeTurn();
    return true;
  }

  //checks to see if it is valid for the piece to jump
  function jump(){
    if(this.canjump(this.position[0]+2, this.position[1]+2 || this.position[0]+2, this.position[1]-2 || this.position[0]-2, this.position[1]+2 || this.position[0]-2, this.position[1]-2)){
      return true;
    }else{
      return false;
    }
  }

  function canjump(newTile, piece){
    //find difference in distance
    var dx = newTile[1] - piece.position[1];
    var dy = newTile[0] - piece.position[0];
    //ensure cant go backwards
    if(player1 === true && piece.king === false){
      if(newTile[0] < piece.position[0]){
        return false;
      }
    }else if(player2 === true && piece.king === false){
      if(newTile[0] > piece.position[0]){
        return false;
      }
    }
    //define the tile in the middle
    var midx = piece.position[1] + (dx/2);
    var midy = piece.position[0] + (dy/2);
    //check if there is space after
    if(!Board.isValidPlacetoMove(midx, midy) && Board.isValidPlacetoMove(newTile[0], newTile[1])) {
      //find which object instance is sitting there
      for(pieceIndex in pieces) {
        if(pieces[pieceIndex].position[0] == midy && pieces[pieceIndex].position[1] == midx) {
          if(this.player != pieces[pieceIndex].player) {
            //return the piece sitting there
            return pieces[pieceIndex];
          }
        }
      }
    }
  }

  //Click Events

  //check if piece selected
  $(".pieces").on("click", function(event){
    var selected = false;
    if(!selected){
      $(event.target).addClass("selected");
    }else if($("this").hasClass("selected")){
      selected = true;
    }
  });

  //move piece when tile clicked
  $(".alltiles").on("click", function(event){
    //check if selected
    if($(".selected").length != 0){
      //get tile being clicked
      var tile = tiles[$(event.target).attr("id").replace("tile", "")];
      //get piece id
      var piece = pieces[$(".selected").attr("id")];

      var test = $('.tiles')[tile.element[0].getAttribute('data-num')];
      var id = parseInt(test.getAttribute('data-num'));
      var x = tile.position[0];
      var y = tile.position[1];


      //check if tile is in range
      var inrange = inRange(piece, x, y);
      debugger
      if(inrange){
        //if piece can jumpover, check if it can jump again
        if(inrange == "jumpover"){
          console.log("jumpover");
        }else if(inrange == "regular"){
          movepiece(tile, piece);
        }
      }
    }
  });

  //sets the timer to 30 seconds
  var i = 30;
  var countDownInterval;
  function countDown() {
    countDownInterval = setInterval(function () {
      document.getElementById("time").innerHTML = "Time remaining: " + i + "s";
      i--;
      if(i < 0){
        changeTurn();
        i = 30;
      }
    }, 1000);
  }

  Board.initialise();

});
