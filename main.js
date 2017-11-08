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
var $goalKeeperPositionsArray = [0, 44, 111, 194, 250]
var keeperDirection = 0



//generates a random move for the keeper

function randomKeeperMove(){
  keeperDirection = $goalKeeperPositionsArray[Math.floor(Math.random() * 5)]
  $goalkeeper.animate({
    left: keeperDirection +"px"
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

  

 getKeeperPosition();

});

// check if its a save or a goal
// get position of keeper and check if its in the same position as where the ball is.
function getKeeperPosition() {
  console.log(keeperDirection);
  var footballposition   = $footballImage.position()
  console.log(footballposition.left)
  // if keeper position is 44, query if the ball is in a particular range to be saved
  // if so, then its  save.

}
 //if so, then its a save.
// if not, then its a goal


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
