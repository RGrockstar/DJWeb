song="";
scoreright=0;
scoreleft=0;

leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;

function preload(){
song=loadSound("Sunflower.mp3");
}
function setup() {
    canvas = createCanvas(560, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function modelLoaded(){
console.log("Posenet is on")
}
function draw(){
    image(video,0, 0, 560, 450);
}