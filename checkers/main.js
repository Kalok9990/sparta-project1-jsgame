$(document).ready(function() {

  var gameboard = [
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0]
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
    dictionary: ["0vmin", "10vmin", "20vmin", "30vmin", "40vmin", "50vmin", "60vmin", "70vmin", "80vmin", "90vmin"],
    intialise: function(){
      var countPieces = 0;
      var countTiles = 0;
      for(row in this.board){
        for(column in this.board[row]){
          if(row%2 === 1){
            if(column%2 === 0){
              this.tilesElem.append('<div class="tile" id="tile'+countTiles+'"  style="top:'+this.dictionary[row]+';left:'+this.dictionary[column]+';"></div>')
            }
          }else{
            if(column%2 === 1){
              this.tilesElem.append('<div class="tile" id="tile'+countTiles+'"  style="top:'+this.dictionary[row]+';left:'+this.dictionary[column]+';"></div>')
              tiles[countTiles] = new Tile($("#tile"+countTiles), [parseInt(row), parseInt(column)]);
              countTiles += 1;
            }
          }
          if(this.board[row][column] == 1) {
            $(".player1pieces").append('<div class="piece" id="'+countPieces+'" style="top:'+this.dictionary[row]+';left:'+this.dictionary[column]+';"></div>');
            pieces[countPieces] = new Piece($("#"+countPieces), [parseInt(row), parseInt(column)]);
            countPieces += 1;
          }else if(this.board[row][column] == 2){
            $(".player2pieces").append('<div class="piece" id="'+countPieces+'" style="top:'+this.dictionary[row]+';left:'+this.dictionary[column]+';"></div>');
            pieces[countPieces] = new Piece($("#"+countPieces), [parseInt(row), parseInt(column)]);
            countPieces += 1;
          }
        }
      }
    },
    
    isValidToMove: function(row, column){
      if(this.board[row][column] === 0){
        return true;
      }
      return false;
    }

    clear: function(){
      //reload page?
    }

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
    if(this.element.attr("id") < 12){
      this.player = player 1;
    }else{
      this.player = player 2;
    }
  }

  Board.intialise();

});
