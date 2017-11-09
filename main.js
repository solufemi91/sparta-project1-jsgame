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
var $goalKeeperPositionsArray = [0,0,111,250,250];
var keeperPosition = 0;
var ballPosition = 0;
var ballTopPosition = 0



//generates a random move for the keeper

function randomKeeperMove(){
  keeperPosition = $goalKeeperPositionsArray[Math.floor(Math.random() * 5)]
  $goalkeeper.animate({
    left: keeperPosition +"px"
  },100);

}

// event listener for when an area of the goal is clicked

$theActualGoal.click(function(event){

  // moves the keeper
  randomKeeperMove();

  // moves the ball to where the person choose to shoot
  $footballImage.animate({
    top: event.pageY -30 + "px",
    left: event.pageX -33.5 + "px",
  }, 50);

  ballTopPosition = event.pageY -30;
  ballPosition = event.pageX -33.5;
  console.log("The keeper position is: " + keeperPosition);
  console.log("The ball position is: " + ballPosition);

  saveOrGoal();

  $footballImage.animate({
    top: '338px',
    left: '835px' ,

  },1000);

  $goalkeeper.animate({
    left: '111px'
  }, 1000)

});


function saveOrGoal() {

  if(keeperPosition == 0 && ballPosition > 678 && ballPosition < 805){
    save++;
    $keeperScore.html('Keeper: ' + save);
  } else if(keeperPosition == 44 && ballPosition > 677 && ballPosition < 853){
    save++;
    $keeperScore.html('Keeper: ' + save);
  } else if(keeperPosition == 111 && ballPosition > 747 && ballPosition < 913){
    save++;
    $keeperScore.html('Keeper: ' + save);
  } else if(keeperPosition == 194 && ballPosition > 831 && ballPosition < 997){
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
  }
    else {
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


});

// checks the bestscore out of a possible 5
function checkScore(){
  // each time a score is gained, check to see the whether someone has one the best of five
  if(goal == 10) {
    alert("You have won");

  } else if(save == 10) {
    alert("Unfortunatley you have been the worst out 5. Sorry LOOOOOSER!");

  }

}









});
