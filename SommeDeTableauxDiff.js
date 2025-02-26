let array1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [-1, 12, 17, 14, 5, -9, 0, 18];
let array3 = [];
let j = 0;

for(let i = 0; i < array1.length; i++){
    if(array2[j] != null){
        array3.push(array1[i] + array2[j]);
        j++;
    }else {
        j = 0;
    }
}

console.log(array3);