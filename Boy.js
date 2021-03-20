class Boy{

    constructor(){
        
        this.body = Bodies.rectangle(200,580,100,140,{isStatic:true});
        this.image = loadImage("images/boy.png")
        World.add(world, this.body);
    }

    display(){
        var boyPos = this.body.position;

        push();
        translate(boyPos.x, boyPos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 300,350);
        pop();
    }

}

