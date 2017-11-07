$(function(event) {

var $goalkeeper = $('#goalkeeper');
var $footballImage = $('#football');
var $shootButton = $('button');
var $keeperScore = $('#keeperScore')
var $strikerScore = $('#strikerScore')
var score = 0
var ballDistance = 0;

//EVENT LISTENERS
// $shootButton.click(function(){
//   kickBall();
// })

$footballImage.click(function(){
  kickBall();
})


$goalkeeper.click(function(){
  var i = 0;
  while (i < 5) {
    moveKeeper();
    i++;

  }

});


function moveKeeper(){
  $goalkeeper.animate({marginLeft: "323px"});
  $goalkeeper.animate({marginLeft:"-13px"})
}


function kickBall(){
  var ballDistance = 16;
  var id = setInterval(frame,1);
  function frame() {
    if (ballDistance == -356){
      clearInterval(id);
      ballDistance = 16;
      alert("goal")
      score++;
      $strikerScore.html("Striker: " + score)
      $footballImage.css("margin-top", ballDistance + 'px')
    } else {
      ballDistance-- ;
      $footballImage.css("margin-top", ballDistance + 'px')
    }
  }
}

/// GOALKEEPER MOVING SIDE TO SIDE
//
// function rightMove() {
//
//   var pos = -13;
//   var id = setInterval(frame, 5);
//   var id2 = 0
//
//   function frame() {
//     if (pos == 323) {
//       clearInterval(id);
//       var id2 = setInterval(leftMove, 5)
//     } else {
//       pos++;
// //
//       $goalkeeper.css("margin-left", pos + 'px');
//     }
//   }
//   function leftMove() {
//     if (pos == -13){
//       clearInterval(id2);
//       setInterval(frame, 5)
//
//
//     } else {
//     pos--;
//     $goalkeeper.css("margin-left", pos + 'px');
//   }
// }
//
//
// }








})
