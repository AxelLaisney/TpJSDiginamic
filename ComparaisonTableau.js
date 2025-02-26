let array1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [-1, 12, 17, 14, 5, -9, 0, 18];
let compteur = 0;

for(let i = 0; i < array1.length; i++){
    for(let j = 0; j < array2.length; j++){
        if(array1[i] == array2[j]){
            compteur++;
        }
    }
}

console.log(compteur);