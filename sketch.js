//Create variables here
var dog,dog_img
var happyDog
var database
var foodS = 0
var foodStock 
function preload()
{
  //load images here
  dog_img = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
  console.log(database);
	createCanvas(500, 500);
  dog = createSprite(250,300,20,20)
  dog.addImage(dog_img)
  dog.scale = 0.2
  food = new Food();
  food.getFood();
}


function draw() {  
  
  background(46,139,87)
  textSize(20)  
  fill("yellow")
  text("Note: Press UP_ARROW Key To Feed Jiji Milk!!",45,25)
  textSize(25)
  fill("purple")
  text("Food Left :"+foodS,190,200)
  
  //add styles here
  if(keyWentDown(UP_ARROW))
  {
    food.updateFood(foodS);
    changeImage(dog)
  }
  drawSprites();
}

function changeImage(sprite) 
{
 
  sprite.addImage(happyDog)
  sprite.scale =0.2
}

