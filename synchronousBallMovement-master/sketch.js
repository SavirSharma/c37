var canvas, bgImage, playerCount, database, form, player,game;
var gameState=0;
var allPlayers;
function setup(){
  canvas=createCanvas(400,400);
  database=firebase.database();
  game=new Game();
  game.gameState();
  game.start();

}
function draw(){
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }
}
