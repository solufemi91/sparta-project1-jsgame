$(function(event) {

var $goalkeeper = $('#goalkeeper');
var $footballImage = $('#football');
var $keeperScore = $('#keeperScore');
var $strikerScore = $('#strikerScore');
var goal = 0;
var save = 0;
var ballDistance = 0;
var $startAgain = $('button');
var $theActualGoal = $('#theActualGoal');
var $container = $('.container');
var $body = $('body');
var $goalKeeperLeftArray = [0,0,0,250,250];
var $goalKeeperRightArray = [250,250,250,0,0];
var $goalKeeperCentreArray = [111,111,111,0,250];
var keeperPosition = 0;
var ballPosition = 0;
var ballTopPosition = 0;
var $winnerBoard = $('#winner');
var $playAgainTextBoard = $('#playAgainTextBoard')



//generates a random move for the keeper

function randomKeeperMove(){

  if(ballPosition > 678 && ballPosition < 805){
    keeperPosition = $goalKeeperLeftArray[Math.floor(Math.random() * 5)]
    $goalkeeper.animate({
      left: keeperPosition + "px"
    },100);
  }
  else if(ballPosition > 747 && ballPosition < 913){
    keeperPosition = $goalKeeperCentreArray[Math.floor(Math.random() * 5)]
    $goalkeeper.animate({
      left: keeperPosition + "px"
    },100);
  }
  else if(ballPosition > 884 && ballPosition < 1001){
    keeperPosition = $goalKeeperRightArray[Math.floor(Math.random() * 5)]
    $goalkeeper.animate({
      left: keeperPosition + "px"
    },100);
  }


}

// event listener for when an area of the goal is clicked

$theActualGoal.click(function(event){

  // moves the keeper

  // moves the ball to where the person choose to shoot
  $footballImage.animate({
    top: event.pageY -30 + "px",
    left: event.pageX -33.5 + "px",
  }, 50);

  ballTopPosition = event.pageY -30;
  ballPosition = event.pageX -33.5;
  console.log("The keeper position is: " + keeperPosition);
  console.log("The ball position is: " + ballPosition);

  randomKeeperMove();

  saveOrGoal();

  // return football to default position
  $footballImage.animate({
    top: '338px',
    left: '835px' ,

  },1000);
  // return keeper to  default position
  $goalkeeper.animate({
    left: '111px'
  }, 1000)

});


function saveOrGoal() {

  if(keeperPosition == 0 && ballPosition > 678 && ballPosition < 805){
    save++;
    $keeperScore.html('Keeper: ' + save);
  } else if(keeperPosition == 111 && ballPosition > 747 && ballPosition < 913){
    save++;
    $keeperScore.html('Keeper: ' + save);
  } else if(keeperPosition == 250 && ballPosition > 884 && ballPosition < 1001){
    save++;
    $keeperScore.html('Keeper: ' + save);
  } else if(ballPosition < 677 || ballPosition > 1001){
    save++;
    $keeperScore.html('Keeper: ' + save);
  } else if(ballTopPosition < 99 || ballTopPosition > 139){
    save++;
    $keeperScore.html('Keeper: ' + save);
  } else {
    goal++;
    $strikerScore.html('Striker: ' + goal);
  }
    checkScore();
}

// resets the game

$startAgain.click(function(){
  goal = 0;
  save = 0;
  $keeperScore.html("Keeper: " + save);
  $strikerScore.html("Striker: " + goal);
  $winnerBoard.html('');
  $playAgainTextBoard.html('');


});

// checks the bestscore out of a possible 5
function checkScore(){
  // each time a score is gained, check to see the whether someone has one the best of five
  if(goal == 10) {
    $winnerBoard.append('You won!! ');
    $playAgainTextBoard.append("Click Play Again");

  } else if(save == 10) {
    $winnerBoard.append('You loose!!');
    $playAgainTextBoard.append("Click Play Again");

  }

}









});
