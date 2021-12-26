

function setup() {
  createCanvas(800,600);
  var m1 = createSprite(208,444,15,100);
  var m2 = createSprite(155,498,120,15);
  var m3 = createSprite(261,387,120,15);
  var m4 = createSprite(313,330,15,100);
  var m5 = createSprite(225,273,190,15);

}

function draw() {
  background("blue");  
  text(mouseX+","+mouseY, mouseX, mouseY);
  
  drawSprites();
}