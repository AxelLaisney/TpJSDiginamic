let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

//boucle supérieur 3
console.log("boucle supérieur à 3:");
for (let i = 0; i < array.length; i++){
    if(array[i] > 3){
     
        console.log(array[i]);
    }
}

//pairs uniquement
console.log("pairs uniquement:");
for (let i = 0; i < array.length; i++){
    if((array[i] % 2) == 0){
     
        console.log(array[i]);
    }
}

//index pairs
console.log("index pairs");
for (let i = 0; i < array.length; i++){
    if((i % 2) && (i == array[i])){
        console.log(array[i]);
    }
}

//impairs uniquement
console.log("impairs uniquement");
for (let i = 0; i < array.length; i++){
    if((array[i] % 2) != 0){
     
        console.log(array[i]);
    }
}