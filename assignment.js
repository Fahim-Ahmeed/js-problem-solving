//problem-1:feetToMile;
function feetToMile(feet){
    let mile=feet/5280;
        mile=mile.toFixed(7);
        mile=parseFloat(mile);
    return mile;
} 
let result=feetToMile(77990);
console.log(result);


//problem-2:woodCalculator;
function woodCalculator(chair,table,bed){
    chair=chair*1;
    table=table*3;
    bed=bed*5;
    let totalWood=chair+table+bed;
    return totalWood;
}



//problem-3:brickCalculator;
function brickCalculator(floor){
    const perFeet=1000;
    if(floor>=1 && floor<=10){
        let perFloor=15;
        totalBricks=perFeet*perFloor*floor;
    }
   else if(floor>=11 && floor<=20){
    let overTen=floor-10;
    let bricks1=perFeet*10*15;
    let bricks2=perFeet*overTen*12;
    totalBricks=bricks1+bricks2;
   }    
   
   else{
       let overTwenty=floor-20;
       let bricks1=perFeet*10*15;
       let bricks2=perFeet*10*12;
       let bricks3=perFeet*overTwenty*10;
       totalBricks=bricks1+bricks2+bricks3;
   }
   
   return totalBricks ;
}


//problem-4:tinyFriend;
function tinyFriend(friends){
    let minFriend=friends[0];
    let minLength=minFriend.length;
    for(let i=0;i<friends.length;i++){
        let tempFriend=friends[i];
        let tempLength=tempFriend.length;
        if(tempLength<minLength){ 
            minFriend=tempFriend;
        }
    }
    return minFriend;
}