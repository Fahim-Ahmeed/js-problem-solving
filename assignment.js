//problem-1:feetToMile;
function feetToMile(feet){
    let mile=feet/5280;
        mile=mile.toFixed(7);
    return mile;
} 

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
        perFloor=15;
        bricks=perFeet*perFloor*floor;
    }
   else if(floor>=11 && floor<=20){
    overTen=floor-10;
    bricks1=perFeet*10*15;
    bricks2=perFeet*overTen*12;
    bricks=bricks1+bricks2;
   }    
   
   else{
       overTwenty=floor-20;
       bricks1=perFeet*10*15;
       bricks2=perFeet*10*12;
       bricks3=perFeet*overTwenty*10;
       bricks=bricks1+bricks2+bricks3;
   }
   
   return bricks;
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