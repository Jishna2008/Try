class Ground{
constructor(x,y,width,height){
var ground_Options={isStatic:true};
this.body=Bodies.rectangle(x,y,width,height,ground_Options);
this.width=width;
this.height=height;
World.add(world,this.body);
}
display(){
var ground_pos=this.body.position;
rect(ground_pos.x,ground_pos.y,this.width,this.height);
fill("green");
}
}