class DustBin {  
    constructor( ){
        var options = {
            isStatic : true,
            density : 0.5
        }

        this.bodyb = Bodies.rectangle(650, 665, 120, 20, options);
	    World.add(world, this.bodyb);
	    this.bodyl= Bodies.rectangle(580, 605, 20, 140,options);
	    World.add(world, this.bodyl);
	    this.bodyr = Bodies.rectangle(720, 605, 20, 140,options);
        World.add(world, this.bodyr);
        this.bodyb.width = width;
        this.bodyb.height = height;
        this.image = loadImage("dustbingreen.png");

        
   }
   display(){
       fill("white");
       rectMode(CENTER);
       imageMode(CENTER);
       image(this.image, 650, 605, 140, 140);
       rect(650, 665, 120, 20);
       rect(580, 605, 20, 140);
       rect(720, 605, 20, 140);
   }
}