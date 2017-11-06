$(function(event) {

var $goalkeeper = $('#goalkeeper')

$goalkeeper.click(function(){
  rightMove();

})


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
    } else {
    pos--;
    $goalkeeper.css("margin-left", pos + 'px');
  }
}


}








})
