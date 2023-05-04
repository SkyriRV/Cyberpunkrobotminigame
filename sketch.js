let backgroundImage, personnageImage, personnageY, personnageX, obstacleImage, obstacleY, obstacleX, randomY
let vie, score //variable

function setup() {
  createCanvas(displayWidth, displayHeight);
  backgroundImage = loadImage("backgroundtown.webp")
  backgroundImage.resize(width, height)
  personnageImage = loadImage("robotsprite-removebg-preview.png")
  personnageY = 480
  obstacleImage = loadImage("Ennemi-removebg-preview.png") // fonction pour charger image
  obstacleX = width
  obstacleY = 582
  vie = 3
  score = 0
}

function draw() {
  background(backgroundImage) // mettre une image en arrire plan
  joueur()
  obstacle()
}

function joueur() {
  image(personnageImage, 100, personnageY, 315, 250) 
  if (keyIsPressed && key == ' ') {
    personnageY = 380
  } else {
    personnageY = 480
  }
  fill(250)
  textSize(30)
  text("Life : " + vie, 10, 80);
  text("SCORE : " + score, 10, 120);


}

function obstacle() {
  image(obstacleImage, obstacleX, obstacleY, obstacleImage.width / 4, obstacleImage.height / 4)
  obstacleX -= 5;
  if (obstacleX < 0) {
    obstacleX = width
    randomY = int(random(2))
    score += 1
  }

  if (randomY == 0) {
    obstacleY = 582;
  }
  if (randomY == 1) {
    obstacleY = 380;
  }
  if ((obstacleX < 100 + 190  && obstacleX + obstacleImage.width / 8 > 100) && ((personnageY == 380 && obstacleY== 380) ||(personnageY == 480 && obstacleY== 582) ) ) {
    obstacleX = width
    randomY = int(random(2))
    vie -= 1
  }
  if (vie == 0){
    fill(255)
    textSize(80)
    text("Game Over", 250, 250);
    textSize(80)
    text("Click for restart", 250, 350);
    noLoop()
  }
}

function mousePressed(){
  if (vie == 0)
    vie = 3
    scrore =0
    loop()
}


