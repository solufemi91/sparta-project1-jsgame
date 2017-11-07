$(function(event) {

var $goalkeeper = $('#goalkeeper')
var $football = $('#football')
var $shootButton = $('button')

$shootButton.click(function(){
  kickBall();
})

$football.click(function(){
  kickBall();
})

$goalkeeper.click(function(){
  rightMove();


})

function kickBall(){
  var ballDistance = 16;
  var id = setInterval(frame,5);
  function frame() {
    if (ballDistance == -156){
      clearInterval(id);
      ballDistance = 16;
      $football.css("margin-top", ballDistance + 'px')
    } else {
      ballDistance-- ;
      $football.css("margin-top", ballDistance + 'px')
    }
  }
}

function rightMove() {

  var pos = -13;
  var id = setInterval(frame, 5);
  var id2 = 0
  function frame() {
    if (pos == 323) {
      clearInterval(id);
      var id2 = setInterval(leftMove, 5)
    } else {
      pos++;
//
      $goalkeeper.css("margin-left", pos + 'px');
    }
  }
  function leftMove() {
    if (pos == -13){
      clearInterval(id2);
      setInterval(frame, 5)
    } else {
    pos--;
    $goalkeeper.css("margin-left", pos + 'px');
  }
}


}








})
