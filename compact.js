function compact(arr) {
    for(let i=0;i<arr.length;i++) {
        if(!arr[i]) {
         arr = removeElement(arr,i)           
         i--; //to go back one postion
        }
    }
    return arr;
}

function removeElement(arr, pos) {
    for(let i = pos; i < arr.length-1 ; i++) {
        arr[i] = arr[i+1]
    }
    arr.length--;
    return arr;
}
console.log(compact([0,1,false,2,'',3,'a','e'*23,NaN,'s',34]));