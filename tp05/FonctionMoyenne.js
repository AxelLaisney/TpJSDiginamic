let array1 = [1, 1, 1, 1, 2, 3, 4, 12];
let array2 = [1, 23, "qeqweqw"];
let array3 = [];

function Sum (array = []){
    let sum = 0;
    if(array.length <= 0){
        return sum;
    }

    for(let i = 0; i < array.length; i++){
        if(typeof array[i] !== "number"){
            return "Ce tableau ne contient pas que des nombres";
        }

        sum = sum + array[i];
    }

    return sum / array.length;
}

console.log(Sum(array1))
console.log(Sum(array2))
console.log(Sum(array3))
