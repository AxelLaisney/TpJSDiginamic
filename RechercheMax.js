let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let max = 0;

for (let i = 0; i < array.length; i++){
    if(array[i] >= max){
        max = array[i];
    }
}

console.log("le plus grand numbre de array est: " + max);