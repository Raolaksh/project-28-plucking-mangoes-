class Tree{

    constructor(x,y,width,height){
        
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width = width;
        this.height = height;
        this.image = loadImage("images/tree.png")
    }

    display(){
        var treePos = this.body.position;
        push();
        translate(treePos.x, treePos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 750,690);
        pop();
    }
}
