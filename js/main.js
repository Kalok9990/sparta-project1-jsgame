$(document).ready(function(){

  console.log("hi");
  $(".chess").click(chesspage);
  $(".checkers").click(checkerspage);

  function chesspage(){
    window.open("./chess/index.html", "_self");
  }

  function checkerspage(){
    window.open("./checkers/index.html", "_self");
  }
});
