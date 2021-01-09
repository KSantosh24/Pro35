//Create variables here

function preload()
{
  //load images here
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}

function setup() {
	createCanvas(500, 500);
  
}


function draw() { 
  background(46,139,87) 
if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();
  //add styles here
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  Food:x
}
}



