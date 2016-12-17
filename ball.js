function Ball() {
  this.x = 300;

  this.y = 560;
  
  this.rad = 20;
  
  this.xspeed = 5;
  
  this.yspeed = -5;

  this.color = color(200, 200, 200);

  this.power = 1;
  
  this. display = function () {
    fill(this.color);
    ellipse(this.x, this.y, this.rad, this.rad)
    this.x = constrain( this.x, this.rad/2, width - this.rad/2)
    this.y = constrain( this.y, this.rad/2, height - this.rad/2)
    this.yspeed = constrain(this.yspeed, -6, 6)
    this.xspeed = constrain(this.xspeed, -6, 6)
  }
  
  this.move = function () {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  this.powBall = function() {
    if(powerBall >= powerLimit){
      this.color = color(25*powerBall, 50 * powerBall ,255 - int(this.power)*100);
      powerBall = this.power ++;
      powerLevel ++;
      powerLimit *= 2;

    }
  }


  this.bounce = function () {
    if(this.x < this.rad/2 || this.x > width - this.rad/2){
      this.xspeed *= -1;
    }
    if(this.y < this.rad/2 || this.y > height - this.rad/2){
      this.yspeed *= -1;
    } 
  }

   this.distroyLevelOne = function() {
    if(this.x >= breaks[i].x - breaks[i].length/2 && this.x <= breaks[i].x + breaks[i].length/2){
      if(this.y <= breaks[i].y + this.rad/2 + breaks[i].height/2 && this.y >= breaks[i].y - this.rad/2 - breaks[i].height/2){
      this.yspeed *= -1;
      breaks[i].lifeLength = breaks[i].lifeLength - this.power;
        total = total + 50;
        powerBall ++;
        if(breaks[i].lifeLength <=0){
          breaks.splice(i,1);
        }
      } 
    }

    else if(this.y >= breaks[i].y - breaks[i].height/2 && this.y <= breaks[i].y + breaks[i].height/2){
      if(this.x <= breaks[i].x + this.rad/2 + breaks[i].length/2 && this.x >= breaks[i].x - this.rad/2 - breaks[i].length/2){
        this.xspeed *= -1;
        breaks[i].lifeLength = breaks[i].lifeLength - this.power;
        total = total+50;
        powerBall ++;
        if(breaks[i].lifeLength <=0){
          breaks.splice(i,1);
        }
      }
    }
  }

  this.distroyLevelTwo = function() {
    if(this.x >= bar[j].x - bar[j].length/2 && this.x <= bar[j].x + bar[j].length/2){
      if(this.y <= bar[j].y + this.rad/2 + bar[j].height/2 && this.y >= bar[j].y - this.rad/2 - bar[j].height/2){
      this.yspeed *= -1;
      bar[j].lifeLength = bar[j].lifeLength - this.power;
        total = total + 50;
        powerBall++;
        if(bar[j].lifeLength <=0){
          bar.splice(j,1);
        }
      } 
    }

    else if(this.y >= bar[j].y - bar[j].height/2 && this.y <= bar[j].y + bar[j].height/2){
      if(this.x <= bar[j].x + ball.rad/2 + bar[j].length/2 && this.x >= bar[j].x - ball.rad/2 - bar[j].length/2){
        this.xspeed *= -1;
        bar[j].lifeLength = bar[j].lifeLength - this.power;
        total = total+50;
        powerBall++;
        if(bar[j].lifeLength <=0){
          bar.splice(j,1);
        }
      }
    }
  }

  this.distroyLevelThree = function() {
    if(this.x >= blocks[h].x - blocks[h].length/2 && this.x <= blocks[h].x + blocks[h].length/2){
      if(this.y <= blocks[h].y + this.rad/2 + blocks[h].height/2 && this.y >= blocks[h].y - this.rad/2 - blocks[h].height/2){
      this.yspeed *= -1;
      blocks[h].lifeLength = blocks[h].lifeLength - this.power;
        total = total + 50;
        powerBall++;
        if(blocks[h].lifeLength <=0){
          blocks.splice(h,1);
        }
      } 
    }

    else if(this.y >= blocks[h].y - blocks[h].height/2 && this.y <= blocks[h].y + blocks[h].height/2){
      if(this.x <= blocks[h].x + ball.rad/2 +blocks[h].length/2 && this.x >= blocks[h].x - ball.rad/2 - blocks[h].length/2){
        this.xspeed *= -1;
        blocks[h].lifeLength = blocks[h].lifeLength - this.power;
        total = total+50;
        powerBall++;
        if(blocks[h].lifeLength <=0){
          blocks.splice(h,1);
        }
      }
    }
  }
  
  this.changeDir = function(){
    if(this.y >= plate.y - this.rad/2 - plate.height/2 ){
      if(this.x >= (plate.x - plate.length/2) && this.x < plate.x){
      
        this.yspeed = 5;
        this.yspeed *= -1;
        this.xspeed = 5;
        this.xspeed *= -5*abs((this.x - plate.x)/plate.length/2);
      }
      
      else if((this.x <= plate.x + plate.length/2) && this.x >plate.x){
        this.yspeed = 5;
        this.yspeed *= -1;
        this.xspeed = -5;
        this.xspeed *= -5*((this.x - plate.x)/plate.length/2);
      }  
      else if(this.x == plate.x){
        this.xspeed *= -1;
        this.yspeed *= -1;
      }
    }

    if (this.x >= plate.x - plate.length/2 - this.rad/2 && this.x < plate.x - plate.length/2){
      if(this.y < plate.y && this.y >= plate.y - plate.height/2 - this.rad/2){
        this.yspeed = 5;
        this.xspeed = 5;
        this.yspeed *= -5*(plate.y - this.y)/(plate.height + this.rad/2)/2;
        this.xspeed *= -1;
      }
      else if(this.y > plate.y && this.y <= plate.y + plate.height/2 + this.rad/2){
        this.xspeed = 5;
        this.yspeed = 5;
        this.xspeed *= -1;
        this.yspeed *= 5*((this.y - plate.y)/(plate.height + this.rad/2)/2);
      }
      else if(this.y == plate.y){
        this.xspeed *= -1;
        this.yspeed *= -1;
      }
    }

    else if(this.x <= plate.x + plate.length/2 + this.rad/2 && this.x > plate.x + plate.length/2){
      if(this.y < plate.y && this.y >= plate.y - plate.height/2 - this.rad/2){
        this.yspeed = 5;
        this.xspeed = -5;
        this.yspeed *= -5*(plate.y - this.y)/(plate.height + this.rad/2)/2;
        this.xspeed *= -1;
      }
      else if(this.y > plate.y && this.y <= plate.y + plate.height/2 + this.rad/2){
        this.xspeed = -5;
        this.yspeed = 5;
        this.xspeed *= -1;
        this.yspeed *= 5*((this.y - plate.y)/(plate.height + this.rad/2)/2);
      }
      else if(this.y == plate.y){
        this.xspeed *= -1;
        this.yspeed *= -1;
      }
    } 
  }
}