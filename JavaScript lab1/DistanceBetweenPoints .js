function distanceBetweenPoint(arr){
    let distance1=arr[2]-arr[0];
    let distance2=arr[1]-arr[3];
    let distances=Math.sqrt((distance1*distance1) +(distance2*distance2));
    console.log(distances);
}

//[x1y1,x2,y2]
var values=['2.34','15.66','-13.55','-2.9985'];
distanceBetweenPoint(values);
