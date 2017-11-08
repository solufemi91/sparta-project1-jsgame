$(function(event) {

var $goalkeeper = $('#goalkeeper');
var $footballImage = $('#football');
var $keeperScore = $('#keeperScore');
var $strikerScore = $('#strikerScore');
var goal = 0;
var save = 0;
var ballDistance = 0;
var $startAgain = $('button');

alert("Click the football to shoot");

moveKeeperLoop();
$startAgain.click(function(){
  goal = 0;
  save = 0;
  $keeperScore.html("Keeper: " + save);
  $strikerScore.html("Striker: " + goal);

  moveKeeperLoop();
});

$footballImage.click(function(){
  kickBall();

});


function moveKeeperLoop(){
  var i = 0;
  while (i < 50) {
    moveKeeper();
    i++;
  }
};

function moveKeeper(){
  $goalkeeper.animate({left: "284px"});
  $goalkeeper.animate({left:"0px"});
};


function stopKeeper(){
  $goalkeeper.clearQueue();
  $goalkeeper.stop();


};



function kickBall(){
  var ballDistance = -16;
  var id = setInterval(frame,1);
  function frame() {
    if (ballDistance == -213){
      clearInterval(id);
      ballDistance = -16;
      var $keeperPosition = $goalkeeper.position();

      if($keeperPosition.left > 50 && $keeperPosition.left < 227){
        alert("Oh what a fantastic save from the keeper!");
        save++;
        checkScore();
        $keeperScore.html("Keeper: " + save);
        $footballImage.css("top", ballDistance + 'px');
      } else {
        alert("Cool, carm and collected. You scored!");
        goal++;
        checkScore();
        $strikerScore.html("Striker: " + goal);
        $footballImage.css("top", ballDistance + 'px');
      }
    } else {
      ballDistance-- ;
      $footballImage.css("top", ballDistance + 'px');
    }
  }
}

// checks the bestscore out of a possible 5
function checkScore(){
  // each time a score is gained, check to see the whether someone has one the best of five
  if(goal == 3) {
    alert("You have won the best out of 5. Congratulations you are the winner");
    stopKeeper();
  } else if(save == 3) {
    alert("Unfortunatley you have been the worst out 5. Sorry LOOOOOSER!");
    stopKeeper();
  } else {
    alert("Next round");
  }


}


});
