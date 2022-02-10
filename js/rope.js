class Rope {
    constructor(body,coordinate) {
        let options = {
            bodyA:body,
            pointB:coordinate,
            length:100,
            stiffness:0.04
        }
        
        this.sling = Constraint.create(options)
        World.add(world,this.sling)  
    }

    display() {
        if (this.sling.bodyA) {
            var start = this.sling.bodyA.position
            var end = this.sling.pointB
            strokeWeight(4)
            stroke("turquoise")
            line(start.x,start.y,end.x,end.y)
            
        }
    }

    fly() {
        this.sling.bodyA = null
    }

}