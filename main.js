noseX="" ;
noseY="" ;
difference = 0 ;

function setup() {
canvas=createCanvas(550,500) ;
canvas.position(550,150) ;

video = createCapture(VIDEO) ;
video.size(550,500) ;

posenet=ml5.poseNet(video,modelloaded) ;
posenet.on("pose" , gotresults) ;
}

function draw() {
    background('#89CFF0') ;
    stroke('black') ;
    fill("black") ;
    square(noseX , noseY , difference ) ;
    document.getElementById("square_side" ) .innerHTML = "Width and the Height of the Square is " + difference + " px" ;
}

function modelloaded() {
    console.log("PoseNet model is loaded") ;
}

function gotresults(results) {
    if(results.length>0) {
        console.log(results) ;
        noseX=results[0].pose.nose.x ;
        noseY=results[0].pose.nose.y ;
        console.log("nose X = " + noseX + " nose Y = "+ noseY) ;
        rightWristX = results[0].pose.rightWrist.x ;
        leftWristX = results[0].pose.leftWrist.x  ;
        difference = floor(leftWristX - rightWristX) ;
        console.log("rightwristX = " + rightWristX + " leftWristX = "+ leftWristX) ;

    }
}