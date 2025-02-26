let array1 = [6, 41, 552, 313, 42341, 653, 134, 634, 1231, 6];
let array2 = [6, 41, 552, 313, 42341, 653, 134, 634, 1231, 64324234];
let array3 = [];


function arrayTest(array){
    if(array.length < 1){
        return false;
    }

    if(array[0] == array[(array.length) - 1]){
        return true;
    }else{
        return false;
    }
}

console.log("Array 1 : " + arrayTest(array1));
console.log("Array 2 : " + arrayTest(array2));
console.log("Array 3 : " + arrayTest(array3));