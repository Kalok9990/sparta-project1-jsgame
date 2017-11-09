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

  //Pythagoras' Theorem
  function getDistance(x1, x2, y1, y2){
    return Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
  }

  var Board = {
    board: gameboard,
    playerTurn: 1,
    tilesElem: $(".tiles"),
    viewpoint: ["0vmin", "10vmin", "20vmin", "30vmin", "40vmin", "50vmin", "60vmin", "70vmin", "80vmin", "90vmin"],
    //initialise 8x8 board
    initialise: function(){
      var countPieces = 0;
      var countTiles = 0;
      for(row in this.board){
        for(column in this.board[row]){
          if(row%2 === 1){
            if(column%2 === 0){
              this.tilesElem.append('<div class="tiles" id="tile'+countTiles+'"  style="top:'+this.viewpoint[row]+';left:'+this.viewpoint[column]+'; background-color: gray;"></div>');
              tiles[countTiles] = new Tile($("#tile"+countTiles), [parseInt(row), parseInt(column)]);
              countTiles++;
            }else if(column%2 === 1){
              this.tilesElem.append('<div class="tiles" id="tile'+countTiles+'"  style="top:'+this.viewpoint[row]+';left:'+this.viewpoint[column]+'; background-color: #f4a460;"></div>');
              tiles[countTiles] = new Tile($("#tile"+countTiles), [parseInt(row), parseInt(column)]);
              countTiles++;
            }
          }else{
            if(column%2 === 0){
              this.tilesElem.append('<div class="tiles" id="tile'+countTiles+'"  style="top:'+this.viewpoint[row]+';left:'+this.viewpoint[column]+'; background-color: #f4a460;"></div>');
              tiles[countTiles] = new Tile($("#tile"+countTiles), [parseInt(row), parseInt(column)]);
              countTiles++;
            }else if(column%2 === 1){
              this.tilesElem.append('<div class="tiles" id="tile'+countTiles+'"  style="top:'+this.viewpoint[row]+';left:'+this.viewpoint[column]+'; background-color: gray;"></div>');
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
      $(".playerTurn").html("It is player 1's turn");
    }else if(player2){
      $(".playerTurn").html("It is player 2's turn");
    }
  }

  function Tile(element, position){
    //links the DOM element
    this.element = element;
    //position of tile
    this.position = position;
    //check what range tile is to the piece
    this.inRange = function(piece){
      if(getDistance(this.position[0], this.position[1], piece.position[0], piece.position[1]) === Math.sqrt(2)){
        return "regular";
      }else if(getDistance(this.position[0], this.position[1], piece.position[0], piece.position[1]) === 2*Math.sqrt(2)){
        return "jumpover";
      }
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
    //function to king the piece
    this.king = false;
    this.kingify =  function(){
      this.king = true;
      //need image of crown to put on piece
    };

    //moves piece
    this.move = function(tile){
      this.removeClass("selected");
      if(!Board.isValidToMove(tile.position[0], tile.position[1])){
        return false;
      }
      //ensure piece cannot go backwards (unless its king)
      if(player1 === true && this.king === false){
        if(tile.position[0] < this.position[0]){
          return false;
        }
      }else if(player2 === true && this.king === false){
        if(tile.position[0] < this.position[0]){
          return false;
        }
      }
      //kings the piece if it reaches the other side of the Board
      if(!this.king && this.position[0] === 0 || this.position[0] === 7){
        this.kingify();
      }
      changeTurn();
      return true;
    }

    //checks to see if it is valid for the piece to jump
    this.jump = function(){
      if(this.canjump(this.position[0]+2, this.position[1]+2 || this.position[0]+2, this.position[1]-2 || this.position[0]-2, this.position[1]+2 || this.position[0]-2, this.position[1]-2)){
        return true;
      }else{
        return false;
      }
    }

    this.canjump = function(newTile){
      //find difference in distance
      var dy = newTile[0] - this.position[0];
      var dx = newTile[1] - this.position[1];
      //ensure cant go backwards
      if(player1 === true && this.king === false){
        if(newTile[0] < this.position[0]){
          return false;
        }
      }else if(player2 === true && this.king === false){
        if(newTile[0] < this.position[0]){
          return false;
        }
      }
      //define the tile in the middle
      var midy = this.position[0] + (dy/2);
      var midx = this.position[1] + (dx/2);
      //check if there is space after
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
  $(".tiles").on("click", function(event){
    console.log("hi");
    debugger
    //check if selected
    if($(".selected").length != 0){
      //get tile being clicked
      var tile = $("this").attr("id");
      //get piece id
      var piece = $("this").attr("id");
      //check if tile is in range
      var inRange = tile.inRange(piece);
      if(inRange){
        //if piece can jumpover, check if it can jump again
        if(inRange == "jumpover"){

        }else if(inRange == "regular"){

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
