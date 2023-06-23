img="";
status="";
function preload(){
    img=loadImage('headphones.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.position(400,200);
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
}

function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img,gotResult);
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Headphones",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}

function home(){
    window.location="index.html";
}