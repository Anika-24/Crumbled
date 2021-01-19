class Dustbin{
    constructor(x,y){
  
    this.x = x;
    this.y = y;
    this.dusbinWidth = 200;
    this.dustbinHeight = 200;
    this.Wallthickness = 10;
    this.angle=0;
    this.bottomBody = Bodies.rectangle(this.x,this.y,this.dusbinWidth,this.Wallthickness,{isStatic:true})
    this.leftWallBody = Bodies.rectangle(this.x-this.dusbinWidth/2,this.y-this.dustbinHeight/2,this.Wallthickness,this.dustbinHeight,{isStatic:true})
    Matter.Body.setAngle(this.leftWallBody,this.angle);
    this.rightWallBody = Bodies.rectangle(this.x-this.dusbinWidth/2,this.y-this.dustbinHeight/2,this.Wallthickness,this.dustbinHeight,{isStatic:true})
    Matter.Body.setAngle(this.rightWallBody,-1*this.angle);
    World.add(world,this.bottomBody);
    World.add(world,this.leftWallBody);
    World.add(world,this.rightWallBody);
}
  display(){
      var posBOTTOM = this.bottomBody.position;
      var posLEFT = this.leftWallBody.position;
      var posRIGHT = this.rightWallBody.position;

  }
  

}