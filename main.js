function preload() {
    
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,100, 70, 300, 250);
    stroke(150, 20, 20);
    fill(150, 20, 20);

    circle(40,40,50);
    circle(460,40,50);
    circle(40,360,50);
    circle(460,360,50);

    stroke(50, 168, 82);
    fill(50, 168, 82);

    rect(63, 27, 375, 25);
    rect(63, 347, 375, 25);
    rect(27, 63, 25, 275);
    rect(448, 63, 25, 275);
    
}

function take_snapshot() {
    save("snapshot.png");
}