//Create variables here
var dogimg, happyDog, database, foodS, foodStock;

function preload()
{
  dogimg=loadImage("images/Dog.png")
  happyDog=loadImage("images/happydog.png")
	//load images here
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,250,100,100)
  dog.addImage(dogimg)
  dog.scale=0.25
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
textSize(20);
}


function draw() {  
  background(46, 139, 87)
  if(keyWentDown(UP_ARROW)){ 
    writeStock(foodS); 
    dog.addImage(dogImg1);
   }
   drawSprites();
   fill(255,255,254); 
   stroke("black"); 
   text("Food remaining : "+foodS,170,150); 
   textSize(13);
    text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20)

  //add styles here

}
//Function to read values from DB
 function readStock(data){
    foodS=data.val(); 
  }
  //Function to write values in DB
  function writeStock(x){
    if(x<=0){ x=0; }
    else{
       x=x-1; 
    } 
    database.ref('/').update({ Food:x })
   }




