function Jugador(){
	this.x = 310;
	this.y = 15;
	this.img = [$("#jugador")[0], $("#infectado")[0]];
	this.sprite = 0;
	this.vida = 100;
	this.puntos = 0;
	this.seguro = "arriba";
	
	this.dibujar = function(ctx){
		var img = this.img[this.sprite];
		var x = this.x;
		var y = this.y;
		ctx.drawImage(img, x, y);
		ctx.save();
		ctx.fillStyle = "#ff0000";
		ctx.font = "12px sans-serif";
		ctx.fillText("puntos: "+ this.puntos, x, y + 65);
		
		if(this.sprite==1){
			ctx.fillStyle = "#ff0000";
			ctx.font = "20px sans-serif";
			ctx.fillText("INFECTADO", x+65, y + 25);
		}
		ctx.restore();
	}
	
	this.actualizar = function(accion){
		if(accion=="arriba" && this.y > 15){
			this.y -= 10;
			//this.sprite = 1;
		}
		if(accion=="abajo"  && this.y < 390){
			this.y += 10;
			//this.sprite = 0;
		}
		if(accion=="izquierda"){
			this.x -= 10;
			//this.sprite = 1;
		}
		if(accion=="derecha"){
			this.x += 10;
			//this.sprite = 0;
        }
        
        
		this.x = (640 + this.x)%640;
		this.y = (480 + this.y)%480;
		
		
	}
	
	this.colision = function(x,y){
		var distancia=Math.sqrt( Math.pow( (x-this.x), 2)+Math.pow( (y-this.y),2));
		if(distancia>this.img[this.sprite].width)
		   return false;
		else
		   return true;	
	}
}