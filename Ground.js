//js = javascript
//Blueprint or template  =  class =recipe

class Ground
{
    //properties
     
    //rack or shelf where I have kept the raw materials
    constructor(x, y, w, h)
    {
       var options = {

           isStatic: true
       }

        this.body = Bodies.rectangle(x, y, w, h, options);
        
        this.w = w;
        this.h = h;

        World.add(myWorld, this.body);

    }


    //method
    //user defined function
    display()
    {
        var pos = this.body.position;
        push();
        fill("yellow");
        rect(pos.x, pos.y, this.w, this.h);
        pop();

         
    }

   // functionality of the object



}