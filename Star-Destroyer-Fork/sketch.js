// Arrays for the X and Y positions of the Aliens
// var sphereCoordsX = [0, 0, 0, 0, 0];
// var sphereCoordsY = [0, 0, 0, 0, 0];
let aliens = [];

// Array for the laser
// var laserBeamY = [];
// var laserBeamX = [];
let lasers = [];

// Other variables
var sphereDia = 25, speed = 1, score = 0;
var end = false, shoot = false, bang = false; click = true;
var xPos = 600, yPos = 725; ySpeed = 2/3;
var laserSpeed = -5;
var blaster;
var screech;
var alien;
var spaceship;
var backdrop;
var earth;
var alieninvasion;



class Sphere {
  constructor(){

    this.x = random(20, width - 20);
    this.y = 0;
    this.r = 20;

  }

  drawSpheres(){
    // Set the color of the Aliens
    fill(108, 196, 23);
  imageMode(CENTER);
    // Draw each of the aliens,
    // you should use a loop here. DONE

      image(alien, this.x, this.y, this.r, this.r);

  }

  moveSpheres(){
    // Move Spheres down the screen,
    // i.e. change sphereCoordsY DONE

      this.y += ySpeed * 1.5;


  }

}

class Bullet {
<<<<<<< HEAD
  constructor(){
    this.x = xPos;
    this.y = yPos;
=======
  constructor(xPosition, yPosition){
    this.x = xPosition;
    this.y = yPosition;
    this.r = 5;
>>>>>>> e2abc1392a998b9ac2d198748dbbfce94cd68344
  }



  makeLaser(){


      noStroke();
    	fill(255, 0, 0);

      ellipse(this.x, this.y, this.r, this.r);




      // this.y += laserSpeed;
      // if(this.y < 0){
      //   this.x.splice(i, 1);
      //   this.y.splice(i, 1);
      //
      //   i--;
      //   score--;
      // }

  }
  moveLaser(){
  this.y += laserSpeed;
  }
}



function preload(){
  blaster = loadSound("blastertrimmed.wav");
  alien = loadImage("alien.png");
  spaceship = loadImage("spaceship.png");
  screech = loadSound("screech.wav");
  backdrop = loadImage("space.jpg");
  earth = loadImage("startscreen.jpg");
  alieninvasion = loadImage("alieninvasion.jpg");


}

function setup() {
  // Create an area that is not the full screen DONE
  createCanvas(1200, 800);
imageMode(CENTER);
  for(let i = 0; i < 5; i++){
    aliens[i] = new Sphere();  // add x and y and r values to aliens
  }





  // set the x position of each alien randomly
  // for( var i = 0; i < 5; i++){
  //   sphereCoordsX[i] = random(20, width-20);
    // The variable width is the width of the Canvas
    // We would use height for the height of the Canvas
  //}

  textSize(40);
  // Setting this for the size the score will be displayed at
}

function draw() {
  if(click){
    sleep(2000);
    start();
  } else {


    image(backdrop, 600, 400, 1200, 800);

  noStroke();
    for(i = 0; i < 5; i++){
    aliens[i].drawSpheres();
    aliens[i].moveSpheres();
  }
  for(i = 0; i < lasers.length; i++){
    lasers[i].moveLaser();
  }
  drawShip();
checkShoot();


//    if (shoot){
//      for(i = 0; i < lasers.length; i++){
//      lasers[i].makeLaser();
//    }
//
// //      checkShoot();
// // for(i = 0; i < lasers.length; i++){
// // if(lasers[i] < 0){
// //   lasers[i].x.splice(i, 1);
// //   lasers[y].y.splice(i, 1);
// //
// //   i--;
// //   score--;
// // }
//  }

  // for(i = 0; i < lasers.length; i++){
  //   lasers[i].moveLaser();
  // }

  endCheck();
  if (end){
    image(alieninvasion, 600, 400, 1200, 800);
    fill(255,0,0);
    text ("Game Over", width/2 - 80, height/2);


    click = !click;

    //setTimeout(start, 1000);
  }

  // Write a line to Display the Score,
  // near the top, cenetered would be best DONE
  fill(255, 0, 0);
  text("Score", width/2 - 40, height/8);
  text(score, width/2 - 5, height/5.5);

}
}



// function drawSpheres(){
//   // Set the color of the Aliens
//   fill(108, 196, 23);
// imageMode(CENTER);
//   // Draw each of the aliens,
//   // you should use a loop here. DONE
//   for(var i = 0; i < 5; i++) {
//     image(alien, sphereCoordsX[i], sphereCoordsY[i], 20, 20);
//   }
// }

// function moveSpheres(){
//   // Move Spheres down the screen,
//   // i.e. change sphereCoordsY DONE
//   for(i = 0; i < 5; i++) {
//     sphereCoordsY[i] += ySpeed * 1.5;
//   }
//
// }

function drawShip(){
  // Draw the ship so that it follows the mouse left to right
  // but stays the same distance from the botom of the screen DONE
  fill(255, 0, 0);
  imageMode(CENTER);
  image(spaceship, xPos, yPos, 40, 40);
  //triangle(xPos, yPos, xPos - 20, yPos + 35, xPos + 20, yPos + 35);
  if(keyIsDown(65)) {
    xPos -= 10;
  }
  if(keyIsDown(68)) {
    xPos += 10;
  }
  if(xPos < 20) {
    xPos = 20;
  }
  if(xPos > width - 20) {
    xPos = width - 20;
  }


}

// function moveLaser(){
//
// for(var i = 0; i < laserBeamY.length; i++){
//     noStroke();
//   	fill(255, 0, 0);
//
//     ellipse(laserBeamX[i], laserBeamY[i], 5, 5);
//
//   }
//
  // for(var i = 0; i < laserBeamY.length; i++){
  //   laserBeamY[i] += laserSpeed;
  //   if(laserBeamY[i] < 0){
  //     laserBeamX.splice(i, 1);
  //     laserBeamY.splice(i, 1);
  //
  //     i--;
  //     score--;
  //   }
//
// }
// }


function checkShoot(){
<<<<<<< HEAD
  for(var j = 0; j < 5; j++){
    for(var i = 0; i < lasers.length; i++){
    if(aliens[j].x - 20 <= lasers[i].x  &&
       aliens[j].x + 20 >= lasers[i].x  &&
       aliens[j].y + 20 >= lasers[i].y  &&
       lasers[i].y - 20 <= lasers[i].y){

  // for(var i = 0; i < lasers.length; i++){
  //   for(var j = 0; j < 5; j++){
  //   if(lasers[i].x >= aliens[j].x - 20 &&
  //      lasers[i].x <= aliens[j].x + 20 &&
  //      lasers[i].y <= aliens[j].y + 20 &&
  //      lasers[i].y >= aliens[j].y - 20){
=======
  console.log(lasers);
  for(i = 0; i < lasers.length; i++){
    lasers[i].makeLaser();
  }
for(i = 0; i < lasers.length; i++){
  lasers[i].moveLaser();
}
  for(var i = 0; i < lasers.length; i++){
    for(var j = 0; j < aliens.length; j++){
    if(lasers[i].x >= aliens[j].x - 20 &&
       lasers[i].x <= aliens[j].x + 20 &&
       lasers[i].y <= aliens[j].y + 20 &&
       lasers[i].y >= aliens[j].y - 20){

>>>>>>> e2abc1392a998b9ac2d198748dbbfce94cd68344
         screech.play();
         console.log(lasers[i].x);
     score += 2;

    aliens[j].x = random(20, width-20);
    aliens[j].y = 0;
      lasers.splice(i, 1);
<<<<<<< HEAD
=======
      //console.log(lasers[i].x);
>>>>>>> e2abc1392a998b9ac2d198748dbbfce94cd68344


      i--;

    }
    }
  }
  for(var i = 0; i < lasers.length; i++){
    lasers[i].y += laserSpeed;
    if(lasers[i].y < 0){
      lasers.splice(i, 1);

      i--;
      score--;
    }
  }


  // Check to see if you hit
  // Use a loop to see if any of the aliens was hit.

  // Probably some sort of If like checking if your
  // padle hit your ball in last challenge.
  // If you hit, you should probably increase the score


}

// function makeBullet(){
//  strokeWeight(3);
//   stroke(255,0,0);
//   fill(255,0,0);
//    laserBeamX.push(xPos);
//   laserBeamY.push(yPos);
//   shoot = false;
//   strokeWeight(3);
// }

function mousePressed(){
  if(mouseX >= width/2 - 100 && mouseX <= width/2 + 20 &&
     mouseY >= height/2 + 180 && mouseY <= height/2 + 240){
      click = !click;
    end = false;
    score = 0;
    for(var i = 0; i < 5; i++){
    aliens[i].y = 0;
    }
    }
  // shoot = true;
  print(mouseX+ ", " +mouseY);


}

function endCheck(){
  // Check to see if any of the Aliens made it past the ship
  // You'll probably need some sort of loop here DONE
  for(var i = 0; i < 5; i++){
  if(aliens[i].y >= height){
      end = true;
    }
  }
}

function keyTyped() {
  if (key === 'w') {
    shoot = true;

      lasers.push(new Bullet);
      for(i = 0; i < lasers.length; i++){
        lasers[i].makeLaser();
      }
    // lasers.push(new Bullet(xPos, yPos));
    blaster.play();

  }

}

function start(){
  image(earth, 600, 400, 1200, 800);
  fill(255, 0, 0);
  text("Star Destroyer", width/2 - 140, height/2 + 25);
  text("Play", width/2 - 40, height/2 + 200);
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
