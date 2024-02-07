let obj;
let objs = [];
let objs_count = 30;

function setup() {
   createCanvas(windowWidth, windowHeight);
   //obj = new object(); 
   for(let i = 0; i<objs_count; i++){
      objs[i] = new object();
   }
}

function draw() {
   background(0);

   //create circle under mouse
   circle(mouseX, mouseY, 20);
   
   //show each obect on the screen, then update each objects
   //position for the next frame
   for(let i = 0; i<objs_count; i++){
      objs[i].show();
      objs[i].update();
   }
}

//create objects
class object{
   constructor(){
      this.pos = createVector(width/2, height/2);
      this.vel = createVector(0, 0);
      //this.acc = createVector(0, 0);
      this.size = random(25, 100);
      this.c1 = random(0, 255);
      this.c2 = random(0, 255);
      this.c3 = random(0, 255);
   }
   
   //Update object position once per frame
   update(){
      //Create mouse vector to compare to later
      let mouse = createVector(mouseX, mouseY);

      //Subtract the mouse vector from the position vector using
      //static subtraction function; store vector as acceleration
      this.acc = p5.Vector.sub(mouse, this.pos);

      //After storing the distance between the position vector and the
      //mouse vector (into the acceleration vector), we can change the 
      //magnitude of the acceleration. This retains the angle of vector 
      //while modifying the x and y values. The direction of the acceleration
      //is maintained, while the "strength" of it is decreased.
      this.acc.setMag(this.size/75);

      //The velocity is now incremented by the controlled acceleration
      this.vel.add(this.acc);

      //This simulaton requires a velocity limit to prevent objects from 
      //moving too fast. Implementing mass could solve this problem.
      this.vel.limit(this.size/5);

      //Add velocity vector to position vector. Acceleration updates velocity
      //and velocity updates position. This allows for a change in velocity
      //over time (refreshes) which allows the object to move at different 
      //rates as apposed to moving linearly.
      this.pos.add(this.vel);
   }
   
   //The commented lines of code allow us to include an ellipse on the screen, 
   //the strength of the x on the velocity vector, and/or the strength of the y
   //value on the velocity vector. The current settings include a line showing 
   //the actual direction of the velocity vector in addition to it's strength.
   show(){
      //stroke(this.c1, this.c2, this.c3);
      strokeWeight(4);
      fill(this.c1, this.c2, this.c3, 100);
      //ellipse(this.pos.x, this.pos.y, (this.pos.x + 5*(this.vel.x))/5, (this.pos.y + 5*(this.vel.y))/5);
      //stroke('red');
      //line(this.pos.x, this.pos.y, (this.pos.x + 5*(this.vel.x)), (this.pos.y));
      //stroke('blue');
      //line(this.pos.x, this.pos.y, (this.pos.x), (this.pos.y + 5*(this.vel.y)));
      //stroke('lime);
      stroke(this.c1, this.c2, this.c3);
      line(this.pos.x, this.pos.y, (this.pos.x + 5*(this.vel.x)), (this.pos.y + 5*(this.vel.y)));
      //stroke(255);
   }
}