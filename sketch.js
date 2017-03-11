var canvas

function setup() {
  canvas = new Canvas();
  canvas.init()
}

function draw () {
  clear()
  canvas.display()
  if (windowWidth != canvas.Width || windowHeight != canvas.Height) {
    canvas = new Canvas();
    canvas.init();
  }
}

function Canvas(){
  this.clouds = [];
  this.Width = windowWidth
  this.Height = windowHeight
  this.raining = false
  this.canvas = createCanvas(windowWidth, windowHeight)
  this.canvas.parent('canvasp')

  this.init = function(){
    for(var i = 0; i < 30; i++){
      this.clouds[i] = new Cloud()
    }
  }

  this.display = function(){
    s = second()
    // background(156,227,250); // sky
    for(var i = 0; i < this.clouds.length; i++){
      this.clouds[i].display();
    }
  }
}

function Cloud(){
  this.x = random(0, width)
  this.y = random(0, height)
  this.radius = 25;
  this.size = floor(random(5, 12));
  this.end;
  this.up = 0;
  this.speed = random(.05, .2);
  
  this.init = function(){
    fill(255);
    noStroke();
    this.makeCloud();
  }
  this.display = function(){
    this.move();
    this.makeCloud();
    this.offPage();
  }
  this.move = function(){
    this.x += this.speed;
    this.end = (this.x + (((this.size)/2) * this.radius))
  }
  this.makeCloud = function(){
    for(var i = 0; i < this.size; i++){
      //offset for circles
      if (i%2 == 1){
        this.up = this.radius/2
      }else{
        this.up = 0;
      }
      //draw circle
      fill(255);
      noStroke();
      ellipse(this.x + (i * this.radius)/1.5, this.y + this.up, this.radius*2, this.radius*2);
    }
  }
  this.offPage = function(){
    //cloud off page
    if (this.x > width + this.radius){
      //bad
      this.x = -150;
    }
  }
}
