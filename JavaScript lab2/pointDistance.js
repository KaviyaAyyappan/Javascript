class Point{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
    }
    static distance(a,b){
        let disXValue=a.x - b.x;
        let disYValue=a.y - b.y;
        let distances=Math.hypot(disXValue,disYValue);
        return distances;
    }
}
let p1=new Point(5,5);
let p2=new Point(9,8);
p1.distance;
p2.distance;
console.log(Point.distance(p1,p2));