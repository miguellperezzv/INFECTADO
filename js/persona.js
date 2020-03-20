function aleatorio(piso,techo){
	return Math.floor(Math.random() * (techo - piso + 1)) + piso;
}

function Persona(x,y){
	
    this.imgPersona = $("#persona")[0];
    this.imgInfectado = $("#infectado")[0];	
	this.x = aleatorio(0,620);
	this.y = aleatorio(0,480);
    this.velocidad = 1;
    this.infectado=false;
    this.tiempo=0;
    this.inmune=false;
    this.tiempoMax=300;

    this.controlY=Math.floor((Math.random() * 1) + 0);
 
        // controlX, determina dirección vertical: 1-derecha|0-izquierda
    this.controlX=Math.floor((Math.random() * 1) + 0);


	while(this.velocidad == 0)
		this.velocidad=aleatorio(-3,3);
			
	this.dibujar = function(ctx){
        if(this.infectado==false && this.inmune==true){
            //var img = this.img[0];
            ctx.drawImage(this.imgPersona,this.x,this.y);
        }
        else
        if(this.infectado==true  && this.tiempo<this.tiempoMax){
            //var img = this.img[1];
             ctx.drawImage(this.imgInfectado,this.x,this.y);
             this.inmune = true;
        } 
        else if(this.infectado==false && this.tiempo==0){
            //var img = this.img[0];
            ctx.drawImage(this.imgPersona,this.x,this.y);
        }    
        
           
            
        }
		
		
	
	this.actualizar = function(accion){
        
        
        velocidad=1;
        
        if(this.controlY==1)
        {
            this.y+=velocidad;
        }else{
            this.y-=velocidad;
        }
        if(this.y<0)
        {
            this.controlY=1;
            this.y=velocidad;
        }else if(this.y>=480){
            this.controlY=0;
            this.y=480;
        }

        // horizontal
        if(this.controlX==1)
        {
            this.x+=velocidad;
        }else{
            this.x-=velocidad;
        }

        if(this.x<0)
        {
            this.controlX=1;
            this.x=velocidad;
        }else if(this.x>=640){
            this.controlX=0;
            this.x=640;
        }
        
        if(this.infectado==true){
            if(this.tiempo<this.tiempoMax){
                this.tiempo++;
                
            }
            else{
                
                this.tiempo=0;
                this.inmune=true;
            }
            
        }
        else{
            this.infectado=false;
        }

    }
    
    this.colision = function(personas){
        for(j=0;j<personas.length;j++){
            var distancia=Math.sqrt( Math.pow( (personas[j].x-this.x), 2)+Math.pow( (personas[j].y-this.y),2));
            if(distancia<20 && this.inmune==false)
                this.infectado=true;
           else if(distancia>20 ) this.infectado=false;
           else if (distancia>20 && this.infectado==true) this.infectado=true;
        }
		
        
			
	}
}







