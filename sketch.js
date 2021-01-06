var canvas, music, blueSurface, greenSurface, redSurface, yellowSurface, box, top_edge, 
bottom_edge, left_edge, right_edge;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    blueSurface = createSprite(700,580,190,30);
    blueSurface.shapeColor = "blue";

    greenSurface = createSprite(500,580,190,30);
    greenSurface.shapeColor = "green";

    redSurface = createSprite(300,580,190,30);
    redSurface.shapeColor = "red";

    yellowSurface = createSprite(100,580,190,30);
    yellowSurface.shapeColor = "yellow";

    box = createSprite(Math.round(random(20,750)),300,25,25);
    box.shapeColor = "white";
    box.velocityX = 2;
    box.velocityY = 2.7;

    top_edge = createSprite(400,0,800,2);
    bottom_edge = createSprite(400,600,800,2);
    left_edge = createSprite(0,300,2,600);
    right_edge = createSprite(800,300,2,600);


    

     music.loop()

    

}

function draw(){
    background("black");
    
    if(isTouching(box,blueSurface)){
       box.shapeColor = "blue";
    }
    
    if(isTouching(box,greenSurface)){
        box.shapeColor = "green";
     }
    
     if(isTouching(box,redSurface)){
        box.shapeColor = "red";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
     }
    
     if(isTouching(box,yellowSurface)){
        box.shapeColor = "yellow";
     }
     
     top_edge.visible = false;
     bottom_edge.visible = false;
     left_edge.visible = false;
     right_edge.visible = false;
     
     box.bounceOff(blueSurface);
     box.bounceOff(greenSurface);
     box.bounceOff(redSurface);
     box.bounceOff(yellowSurface);
     
     box.bounceOff(top_edge);
     box.bounceOff(bottom_edge);
     box.bounceOff(right_edge);
     box.bounceOff(left_edge);
    


    drawSprites();
}


