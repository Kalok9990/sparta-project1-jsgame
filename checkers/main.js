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
    }
  }

  function Tile(element, position){
    this.element = element;
    //position of tile
    this.position = position;
    this.inRange = function(piece){

    }
  }

  function Piece(element, position){
    this.element = element;
    this.position = position;
  }

  Board.intialise();

});
