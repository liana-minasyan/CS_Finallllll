function Game(){
	this.lifes = function(){
		for(i = 0; i < number; i++){
      		fill(0,255,0);
      		lifes[i] = rect(10 + 50*i, 10, 20, 20);
  		}

 		if(ball.y > 590){
 			this.losePower();
 			number -- ;
 		}
	}
	this.score = function() {
		textSize(16);
		fill(95,255,23);
		text("Score", 480, 20);

		text('' + total, 550, 20);		
	}

	this.gameOver = function() {
		if(lifes.length == 0){
			fill(0,255,0);
			textSize(30);
			text('WHOOPS,YOU LOST THE GAME',80 , 400)
			text('YOUR FINAL SCORE IS     ' + total, 100, 450)
			noLoop();
			
		}
	}
	this.levels = function(){
		textSize(22);
		fill(95,255,23);
		text("Level", 250, 20)

		text('' + levels, 330, 20);


	}
	this.winGame = function() {
		if(blocks.length == 0){
			fill(0,255,0);
			text('HOOREY!!!YOU WON THE GAME!!!',200 , 300)
			noLoop();
		}
	}
	this.ballPower = function() {
		textSize(15);
		text('GETTING POWERFUL    '+ powerBall +'/'+ powerLimit + '	      PowerLevel   ' +powerLevel,180, 40)
	}
	this.losePower = function() {
 			lifes.pop();
 			ball.x = plate.x;
 			ball.y = plate.y -20;
 			ball.xspeed = 0;
 			ball.yspeed = 0;
 			plate.xspeed = 0;
 			powerBall = 0;
 			powerLimit = 10;
 			powerLevel = 1;
 			ball.power = 1;
 			ball.color = color(200, 200, 200)

	}

}