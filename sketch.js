var bgImg, btImg;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12;
var s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;

function preload(){

    bgImg = loadImage("bg.jpg");

    btImg = loadImage("bt.jpg");

    s1 = loadSound("1.mp3");
    s2 = loadSound("2.mp3");
    s3 = loadSound("3.mp3");
    s4 = loadSound("4.mp3");
    s5 = loadSound("5.mp3");
    s6 = loadSound("6.mp3");
    s7 = loadSound("7.mp3");
    s8 = loadSound("8.mp3");
    s9 = loadSound("9.mp3");
    s10 = loadSound("10.mp3");
    s11 = loadSound("11.mp3");
    s12 = loadSound("12.mp3");

}

function setup(){

    canvas = createCanvas(1280, 720);

}

function draw(){

    background(bgImg);

    buttonSystem();

    musicSystem();

    drawSprites();

}

function buttonSystem(){

    b1 = createSprite(150, 230, 50, 50);
    b1.addImage(btImg);
    b1.scale = 0.25;

    b2 = createSprite(150, 430, 50, 50);
    b2.addImage(btImg);
    b2.scale = 0.25;

    b3 = createSprite(150, 630, 50, 50);
    b3.addImage(btImg);
    b3.scale = 0.25;

    b4 = createSprite(350, 230, 50, 50);
    b4.addImage(btImg);
    b4.scale = 0.25;

    b5 = createSprite(350, 430, 50, 50);
    b5.addImage(btImg);
    b5.scale = 0.25;

    b6 = createSprite(350, 630, 50, 50);
    b6.addImage(btImg);
    b6.scale = 0.25;

    b7 = createSprite(550, 230, 50, 50);
    b7.addImage(btImg);
    b7.scale = 0.25;

    b8 = createSprite(550, 430, 50, 50);
    b8.addImage(btImg);
    b8.scale = 0.25;

    b9 = createSprite(550, 630, 50, 50);
    b9.addImage(btImg);
    b9.scale = 0.25;

    b10 = createSprite(750, 230, 50, 50);
    b10.addImage(btImg);
    b10.scale = 0.25;

    b11 = createSprite(750, 430, 50, 50);
    b11.addImage(btImg);
    b11.scale = 0.25;

    b12 = createSprite(750, 630, 50, 50);
    b12.addImage(btImg);
    b12.scale = 0.25;

}

function musicSystem(){

    if(mousePressedOver(b1)){

        s1.play();

    }

    if(mousePressedOver(b2)){

        s2.play();

    }

    if(mousePressedOver(b3)){

        s3.play();

    }

    if(mousePressedOver(b4)){

        s4.play();

    }

    if(mousePressedOver(b5)){

        s5.play();

    }

    if(mousePressedOver(b6)){

        s6.play();

    }

    if(mousePressedOver(b7)){

        s7.play();

    }

    if(mousePressedOver(b8)){

        s8.play();

    }

    if(mousePressedOver(b9)){

        s9.play();

    }

    if(mousePressedOver(b10)){

        s10.play();

    }

    if(mousePressedOver(b11)){

        s11.play();

    }

    if(mousePressedOver(b12)){

        s12.play();

    }

}