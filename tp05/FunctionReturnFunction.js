function First(n){
    return function Second(nb){
        return nb * n
    }
}

let a = First(5);
let b = First(6);

console.log(a(4));
console.log(b(7));