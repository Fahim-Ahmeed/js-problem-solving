//problem-1:feetToMile;
function feetToMile(feet){
    let mile=feet/5280;
    return mile;
} 



//problem-2:woodCalculator;
function woodCalculator(chair,table,bed){
    chair=chair*4;
    table=table*8;
    bed=table*10;
    let totalWood=chair+table+bed;
    return totalWood;
}

