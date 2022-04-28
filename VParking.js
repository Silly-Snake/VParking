canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")

green_width=100;
green_height=90;
greencar_x=10;
greencar_y=10;

background_image="parkingLot.jpg";
green_image="car2.png";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    green_imgTag = new Image();
    green_imgTag.onload = uploadBackground;
    green_imgTag.src = green_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar(){
    ctx.drawImage(green_imgTag, greencar_x, greencar_y, green_width, green_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == "38"){
        up();
        console.log("up");
    }
    if(keyPressed == "40"){
        down();
        console.log("down");
    }
    if(keyPressed == "37"){
        left();
        console.log("left");
    }
    if(keyPressed == "39"){
        right();
        console.log("right");
    }
}

function up(){
    if(greencar_y > 0){
        greencar_y = greencar_y - 10;
        uploadBackground();
        uploadcar();
    }
}
function down(){
    if(greencar_y <= 500){
        greencar_y = greencar_y + 10;
        uploadBackground();
        uploadcar();
    }
}
function left(){
    if(greencar_x >= 0){
        greencar_x = greencar_x - 10;
        uploadBackground();
        uploadcar();
    }
}
function right(){
    if(greencar_x <= 500){
        greencar_x = greencar_x + 10;
        uploadBackground();
        uploadcar();
    }
}
