let array1 = [1, 1, 1, 1, 2, 3, 4, 12];
let array2 = [1, 23, "qeqweqw"];
let array3 = [];

function CheckArray(array = []){

    if(array.length <= 0){
        return false;
    }

    for(let i = 0; i < array.length; i++){
        if (!(typeof array[i] === 'number')){
            return false;
        }
    }

    return true;
}

console.log(CheckArray(array1));
console.log(CheckArray(array2));
console.log(CheckArray(array3));