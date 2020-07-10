class circle{
    constructor(radius)
    {
        this.radius=radius;
       
    }
    get diameter()
    {
        //let diameter=2*this.radius;
        return 2*this.radius;
       
    }
    set diameter(diameter)
    {
        this.radius=diameter/2;

    }
    area()
    {
        let area=Math.PI*this.radius*this.radius;
        return area;
    }
}
let c=new circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area()}`);
// c.diameter = 1.6;
// console.log(`Radius: ${c.radius}`);
// console.log(`Diameter: ${c.diameter}`);
// console.log(`Area: ${c.area()}`);


