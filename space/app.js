function Sprite(filename, left,top){

	this._node = document.createElement("img");
	this._node.src = filename;
	this._node.style.position="absolute";
	this._node.style.height="100px";
	this._node.style.width="auto";
	//this._node.style.left=left;
	//this._node.style.top=top;
	document.body.appendChild(this._node);



	Object.defineProperty(this,"left", {
	

	get: function(){
		return this._left;
	},
	set: function(value){
		this._left=value;
		this._node.style.left=this._left+"px";
	}
	});

	Object.defineProperty(this,"top", {
	get: function(){
		return this._top;
	},
	set: function(value){
		this._top=value;
		this._node.style.top=this._top+"px";
	}
	});

	Object.defineProperty(this,"display", {
	get: function(){
		return this._node.style.display;
	},
	set: function(value){
		this._top=value;
		this._node.style.display=value;
	}
	});

	this.left=left;
	this.top = top;
}

Sprite.prototype.startAnimation = function (fct, interval) {
	if (this._clock) window.clearInterval (this._clock);
	// s'il y a deja un missile qui est envoyé, clearInterval
	// retire le timer qui lui était lié et en met un nouveau
	var _this=this;
	// on demarre un intervalle que l'on associe à l'objet this
	// on déclare une nouvelle variable locale avec l'underscore _this
	// dont la portée sera descendante. Cette variable pourra être utilisée 
	// par la fonction déclarée  
	this._clock=window.setInterval(function(){
		fct(_this);
	},interval);
};

Sprite.prototype.stopAnimation = function() {
	window.clearInterval(this._clock);


};


Sprite.prototype.checkCollision = function (other){
	return (( this.top + this._node.height > other.top) && 
		(this.top<(other.top+other._node.height)) &&
		(this.left+this._node.width>other.left) &&
		(this.left<other.left+other._node.width))
}
