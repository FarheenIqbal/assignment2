function flip(func) {
   return newFunc =  (x,y) => func(y, x);
}

const subtract =  (x,y) => x - y;
console.log(flip(subtract)(100,90));