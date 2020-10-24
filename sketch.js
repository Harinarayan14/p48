var game =0;
var score =0;
function setup() {
  canvas = createCanvas(1200,600);
  player = createSprite(600, 300, 50, 50);
  player.shapeColor="blue";
  player.visible = false;
  enemy1 = createSprite(random(50,1150),random(50,200),20,20);
  enemy1.visible=false;
  enemy2 = createSprite(random(50,1150),random(400,550),20,20);
  enemy2.visible=false;
  enemy1.velocityX= random(-4,4);
    enemy1.velocityY= random(-4,4);
    enemy2.velocityX= random(-4,4);
    enemy2.velocityY= random(-4,4);
  enemy3 = createSprite(random(50,500),random(50,550),20,20);
  enemy3.visible=false;
  enemy4 = createSprite(random(700,1150),random(50,550),20,20);
  enemy4.visible=false;
  enemy3.velocityX= random(-10,10);
    enemy3.velocityY= random(-10,10);
    enemy4.velocityX= random(-10,10);
    enemy4.velocityY= random(-10,10);

    coin1 = createSprite(random(50,1150),random(50,550),20,20);
    coin1.visible=false;
    coin1.shapeColor="yellow";
    coin2 = createSprite(random(50,1150),random(50,550),20,20);
    coin2.visible=false;
    coin2.shapeColor="yellow";
    coin3 = createSprite(random(50,1150),random(50,550),20,20);
    coin3.visible=false;
    coin3.shapeColor="yellow";
    coin4 = createSprite(random(50,1150),random(50,550),20,20);
    coin4.visible=false;
    coin4.shapeColor="yellow";
    coin5 = createSprite(random(50,1150),random(50,550),20,20);
    coin5.visible=false;
    coin5.shapeColor="yellow";
  
  wall1 = createSprite(25,300,50,600);
  wall1.visible=false;
  wall2 = createSprite(625,25,1150,50);
  wall2.visible=false;
  wall3 = createSprite(1175,325,50,550);
  wall3.visible=false;
  wall4 = createSprite(600,575,1100,50);
  wall4.visible=false;
}

function draw() {
  background(255,0,0); 
  console.log(game); 
  if(game===0){
    fill("yellow");
  textSize(25)
  text("Instructions",100,100);
  text("Press Up, Left, Right & Down arrow keys to move.",100,130);
  text("Don't allow enemies to collide with player and collide with walls.",100,160);
  text("Collect 5 golden coins to win.",100,190);
  text("Press Space to start.", 100,220);
  }
  if (game===1){
    player.visible=true;
    wall1.visible=true;
    wall2.visible=true;
    wall3.visible=true;
    wall4.visible=true;
    enemy1.visible=true;
    enemy2.visible=true;
    enemy3.visible=true;
    enemy4.visible=true;
    coin1.visible=true;
    coin2.visible=true;
    coin3.visible=true;
    coin4.visible=true;
    coin5.visible=true;
    
    if(enemy1.y>590){
      enemy1.y=-20;
    }
    if(enemy2.y>590){
      enemy2.y=-20;
    }
    if(enemy3.y>590){
      enemy3.y=-20;
    }
    if(enemy4.y>590){
      enemy4.y=-20;
    }
    if(enemy1.y<10){
      enemy1.y=610;
    }
    if(enemy2.y<10){
      enemy2.y=610;
    }
    if(enemy3.y<10){
      enemy3.y=610;
    }
    if(enemy4.y<10){
      enemy4.y=610;
    }
    if(enemy1.x>1190){
      enemy1.x=-20;
    }
    if(enemy2.x>1190){
      enemy2.x=-20;
    }
    if(enemy3.x>1190){
      enemy3.x=-20;
    }
    if(enemy4.x>1190){
      enemy4.x=-20;
    }
    if(enemy1.x<10){
      enemy1.x=1220;
    }
    if(enemy2.x<10){
      enemy2.x=1220;
    }
    if(enemy3.x<10){
      enemy3.x=1220;
    }
    
    if(enemy4.x<10){
      enemy4.x=1220;
    }
  

    if(player.isTouching(wall1)){
      game =2;
    }
    if(player.isTouching(wall2)){
      game =2;
    }
    if(player.isTouching(wall3)){
      game =2;
    }
    if(player.isTouching(wall4)){
      game =2;
    }
    if(enemy1.isTouching(wall1)){
      enemy1.velocityX= enemy1.velocityX*-1;
      enemy1.velocityY= enemy1.velocityY*-1;
    }
    if(enemy1.isTouching(wall2)){
      enemy1.velocityX= enemy1.velocityX*-1;
      enemy1.velocityY= enemy1.velocityY*-1;
    }
    if(enemy1.isTouching(wall3)){
      enemy1.velocityX= enemy1.velocityX*-1;
      enemy1.velocityY= enemy1.velocityY*-1;
    }
    if(enemy1.isTouching(wall4)){
      enemy1.velocityX= enemy1.velocityX*-1;
      enemy1.velocityY= enemy1.velocityY*-1;
    }
    if(enemy2.isTouching(wall1)){
      enemy2.velocityX= enemy2.velocityX*-1;
      enemy2.velocityY= enemy2.velocityY*-1;
    }
    if(enemy2.isTouching(wall2)){
      enemy2.velocityX= enemy2.velocityX*-1;
      enemy2.velocityY= enemy2.velocityY*-1;
    }
    if(enemy2.isTouching(wall3)){
      enemy2.velocityX= enemy2.velocityX*-1;
      enemy2.velocityY= enemy2.velocityY*-1;
    }
    if(enemy2.isTouching(wall4)){
      enemy2.velocityX= enemy2.velocityX*-1;
      enemy2.velocityY= enemy2.velocityY*-1;
    }
    if(enemy3.isTouching(wall1)){
      enemy3.velocityX= enemy3.velocityX*-1;
      enemy3.velocityY= enemy3.velocityY*-1;
    }
    if(enemy3.isTouching(wall2)){
      enemy3.velocityX= enemy3.velocityX*-1;
      enemy3.velocityY= enemy3.velocityY*-1;
    }
    if(enemy3.isTouching(wall3)){
      enemy3.velocityX= enemy3.velocityX*-1;
      enemy3.velocityY= enemy3.velocityY*-1;
    }
    if(enemy3.isTouching(wall4)){
      enemy3.velocityX= enemy3.velocityX*-1;
      enemy3.velocityY= enemy3.velocityY*-1;
    }
    if(enemy4.isTouching(wall1)){
      enemy4.velocityX= enemy4.velocityX*-1;
      enemy4.velocityY= enemy4.velocityY*-1;
    }
    if(enemy4.isTouching(wall2)){
      enemy4.velocityX= enemy4.velocityX*-1;
      enemy4.velocityY= enemy4.velocityY*-1;
    }
    if(enemy4.isTouching(wall3)){
      enemy4.velocityX= enemy4.velocityX*-1;
      enemy4.velocityY= enemy4.velocityY*-1;
    }
    if(enemy4.isTouching(wall4)){
      enemy4.velocityX= enemy4.velocityX*-1;
      enemy4.velocityY= enemy4.velocityY*-1;
    }
    if(player.isTouching(enemy1)){
      game =2;
    }
    if(player.isTouching(enemy2)){
      game =2;
    }
    if(player.isTouching(enemy3)){
      game =2;
    }
    if(player.isTouching(enemy4)){
      game =2;
    }
    
    if(player.isTouching(coin1)){
      score = score+1;
      coin1.destroy();
    }
    if(player.isTouching(coin2)){
      coin2.destroy();
      score = score+1;
    }
    if(player.isTouching(coin3)){
      coin3.destroy();
      score = score+1;
    }
    if(player.isTouching(coin4)){
      coin4.destroy();
      score = score+1;
    }
    if(player.isTouching(coin5)){
      coin5.destroy();
      score = score+1;
    }
    if(score===5){
      game=3;
    }
  }
  if(game===2){
    
    fill("yellow");
  textSize(30)
  text("Game Over !!!",400,300);
  }
  if(game===3){
    
    fill("yellow");
  textSize(30)
  text("You Won !!!",400,300);
  }
  drawSprites();
}
function keyPressed(){

  if(game ===0){
    if(keyCode===32){
      game =1;
    }
  }
  if(game===1){
    if(keyCode===37){
      player.velocityX = -4;
      player.velocityY = 0;
    }
    if(keyCode===39){
      player.velocityX = 4;
      player.velocityY = 0;
    }
    if(keyCode===38){
      player.velocityX = 0;
      player.velocityY = -4;
    }
    if(keyCode===40){
      player.velocityX = 0;
      player.velocityY = 4;
    }}
}
