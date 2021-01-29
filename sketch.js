var garden,gardenImg;
var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;




function preload() {
    //load the images here
    gardenImg = loadImage("garden.png");

    catImg1 = loadImage("cat1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png")
    catImg3 = loadAnimation("cat4.png");
    
    mouseImg1=loadImage("mouse1.png");
    mouseImg2=loadAnimation("mouse2.png","mouse3.png");
    mouseImg3=loadAnimation("mouse4.png");

    
    
}
function setup(){
    createCanvas(800,600);

    
  

    

    
    //create tom and jerry sprites here
    cat = createSprite(600,450);
    cat.addAnimation("cat", catImg1);
    cat.scale=0.2;

    mouse = createSprite(100,450);
    mouse.addImage("mouse",mouseImg1);
    mouse.scale=0.1;
    

    

    
    
}

function draw() {

    background(gardenImg);

    
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.addAnimation("catLastImage", catImg3);
        cat.changeAnimation("catLastImage");
        cat.velocityX=0;
        cat.x=200;
        mouse.addAnimation("mouseLastImage", mouseImg3);
        mouse.changeAnimation("mouseLastImage");


    }
    
    console.log(cat.x);
    

    drawSprites();
}

function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");

        mouse.addAnimation("mouseWaiting", mouseImg2);
        mouse.changeAnimation("mouseWaiting");

        

    }


}


    

    




