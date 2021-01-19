var tom, jerry, background;

function preload() {

    backgroundImage = loadImage("garden.png");
     
    tomImage1 = loadImage("tomOne.png");
    tomImage2 = loadImage("tomTow.png");
    tomImage3 = loadImage("tomThree.png");

    jerryImage1 = loadImage("jerryOne.png");
    jerryImage2 = loadImage("jerryTwo.png");
    jerryImage3 = loadImage("jerryThree.png");
    jerryImage4 = loadImage("jerryFour.png")
}

function setup(){
    createCanvas(1000,800);

    //creating garden
    background = createSprite(0,0,1000,800);
    background.addImage(backgroundImage);
    background.scale = 2.5

     //creating tom
     
     tom = createSprite(200, 200, 50, 80);
     tom.addImage(tomImage1);
     tom.addImage(tomImage2);
     tom.addImage(tomImage3);
     tom.scale = 1;


    // creating jerry
     jerry = createSprite(400, 200, 80, 30);
     jerry.addImage(jerryImage1);
     jerry.addImage(jerryImage2);
     jerry.addImage(jerryImage3);
     jerry.addImage(jerryImage4);

     

    

}

function draw() {

    background(255);
    
    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    {
        tom.addAnimation("tomLastImage", tomImage2);
        tom.changeAnimation("tomLastImage");
    }

    if(jerry.x - tom.x< (jerry.width - tom.width)/2)
    {
        jerry.addAnimation("jerryLastImage", jerryImage4);
        jerry.changeAnimationAnimation("jerryLastImage");
    }

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("tomRunning", tomImage2);
        tom.changeAnimation("tomRunning");

        text(jerry + ',' +jerryY, 10 , 45);
    }


}
