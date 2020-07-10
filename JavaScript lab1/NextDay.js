 
function calcNextDay(arr){
    let date =new Date(arr[0],arr[1]-1,arr[2]);
    let perDay=24*60*60*1000;
    var NextDate=new Date(date.getTime() + perDay);
    console.log(NextDate.getFullYear()+"-" + (NextDate.getMonth()+1)+"-"+NextDate.getDate());
}

//Input YYYY-MM-DD
let datesAre=['2016','9','30'];
calcNextDay(datesAre);

