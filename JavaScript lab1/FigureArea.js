function areaOfFigure(arr){
let area1=arr[0] * arr[1];
let area2=arr[2] * arr[3];
let minArea=Math.min(arr[0],arr[2]) * Math.min(arr[1],arr[3]);
let totalArea=area1 + area2 -minArea;
console.log(totalArea);
 
}
//array values w,h,W,H
var values=['13','2','5','8'];
areaOfFigure(values);