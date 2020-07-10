
function sumArray(arr)
{
    let total=0;   
    for(let value of arr) {
        
        total +=Number(value);
     };
   
    console.log(total);
}
let sum=['2','3','4'];
sumArray(sum);
