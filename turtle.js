function Turtle(s, l, t){
	this.todo = s;
	this.len = l;
	this.theta = t;

	this.render = function(){
		stroke(255);
		for(var i = 0; i < this.todo.length; i++){
			var d = this.todo.charAt(i);
			if(d === 'F' || d === 'G'){
				line(0, 0, this.len, 0);
				translate(this.len, 0);
			}
			else if (d === '+'){
				rotate(this.theta + random(-0.01,0.01));
			}
			else if ( d === '-'){
				rotate(-this.theta + random(-0.01,0.01));
			}
			else if (d === '['){
				push();
				//rotate(this.theta);
			}
			else if (d === ']'){
				pop();
				//rotate(-this.theta);
			}
		}
	};

	this.setLen = function(l){
		this.len = l;
	};


	this.changeLen = function(percent) {
    this.len *= percent;
  	};


  	this.setToDo = function(s){
	this.todo = s;

	}
}