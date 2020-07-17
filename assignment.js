// //problem-1:feetToMile;
// function feetToMile(feet){
//     let mile=feet/5280;
//     return mile;
// } 



// //problem-2:woodCalculator;
// function woodCalculator(chair,table,bed){
//     chair=chair*4;
//     table=table*8;
//     bed=table*10;
//     let totalWood=chair+table+bed;
//     return totalWood;
// }



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


