let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let min = 0;

for (let i = 0; i < array.length; i++){
    if(array[i] <= min){
        min = array[i];
    }
}

console.log("le plus petit numbre de array est: " + min);