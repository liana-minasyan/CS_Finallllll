function Interferer() {
	this.x = 300;

	this.y = 300;

	this.length = 150;

	this.height = 30;
	this.obstacle = function(){
    	fill(0);
    	rect(this.x, this.y, this.length, this.height)
  	}
  	this.interact = function(){
  		if(ball.x >= this.x - this.length/2 && ball.x <= this.x + this.length/2){
  			if(((ball.y <= this.y + ball.rad/2 + this.height/2) && ball.y > this.y + ball.rad/2 + 2) || 
  				(ball.y >= this.y - ball.rad/2 - this.height/2 && ball.y < this.y - ball.rad/2 -2)){
  				ball.yspeed *= -1;
  			}
		}
		if(ball.y >= this.y - this.height/2 && ball.y <= this.y + this.height/2){
  			if(((ball.x <= this.x + ball.rad/2 + this.length/2) && ball.x > this.x + ball.rad/2 + 2) || 
  				(ball.x >= this.x - ball.rad/2 - this.length/2 && ball.x < this.x - ball.rad/2 -2)){
  				ball.xspeed *= -1;
  			}
  		}
  	}
}