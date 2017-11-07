$(function(event) {

var $goalkeeper = $('#goalkeeper');
var $footballImage = $('#football');
var $shootButton = $('button');
var $keeperScore = $('#keeperScore')
var $strikerScore = $('#strikerScore')
var score = 0
var ballDistance = 0;

// alert("Click the keeper first to start him moving. Then when ready, click the football to shoot");


$footballImage.click(function(){
  kickBall();

})

$goalkeeper.click(function(){

  moveKeeperLoop();
})


function moveKeeperLoop(){
  var i = 0;
  while (i < 10000) {
    moveKeeper();
    i++;

  }

}

function moveKeeper(){
  // $goalkeeper.animate({marginLeft: "338px"});
  // $goalkeeper.animate({marginLeft:"0px"})
  $goalkeeper.animate({left: "338px"});
  $goalkeeper.animate({left:"0px"})
}

//stop goalkeeper
function stopKeeper(){
  $goalkeeper.clearQueue();
  $goalkeeper.stop();


}

//create function to stop the goalie

function kickBall(){
  var ballDistance = 16;
  var id = setInterval(frame,1);
  function frame() {
    if (ballDistance == -147){
      clearInterval(id);

      ballDistance = 16;
      // $goalkeeper.position();
      console.log('Goalie', $goalkeeper.position());
      console.log('Ball', $footballImage.position());
      alert("goal")
      stopKeeper();
      score++;
      $strikerScore.html("Striker: " + score)
      $footballImage.css("top", ballDistance + 'px')
    } else {
      ballDistance-- ;
      $footballImage.css("top", ballDistance + 'px')
    }
  }
}

// function collision($footballImage,$goalkeeper){
//   var x1 = $footballImage.offset().left;
//       var y1 = $footballImage.offset().top;
//       var h1 = $footballImage.outerHeight(true);
//       var w1 = $footballImage.outerWidth(true);
//       var b1 = y1 + h1;
//       var r1 = x1 + w1;
//       var x2 = $goalkeeper.offset().left;
//       var y2 = $goalkeeper.offset().top;
//       var h2 = $goalkeeper.outerHeight(true);
//       var w2 = $goalkeeper.outerWidth(true);
//       var b2 = y2 + h2;
//       var r2 = x2 + w2;
//
//       if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
//       return true;
//
// };
//
// window.setInterval(function() {
//     $('#result').text(collision($('#football'), $('#goalkeeper')));
// }, 200);
//
//
// $('#football,#goalkeeper').draggable();





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
