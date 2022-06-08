noseX = 0;
noseY = 0;
function preload() {
clown_nose = loadImage("https://i.postimg.cc/yx6rDbDK/download-removebg-preview-1.png");
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function take_snapshot() {
    save('Me.png');
}
function modelLoaded() {
    console.log("poseNet is initialised");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x -24;
        noseY = results[0].pose.nose.y -4;
    }
}
function draw() {
    image(video, 0, 0, 300, 300);
    //fill(2, 52, 250);
    //stroke(0, 0, 0);
    //circle(noseX, noseY, 10);
    image(clown_nose, noseX, noseY, 50, 50);
}