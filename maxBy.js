function maxBy(arrOfObjects,func) {
    let arr = [];
    for(let i=0;i<arrOfObjects.length;i++) {
        let x =func(arrOfObjects[i]);
        arr.push(x);
    }
    return max(arr);
}

function max(arr) {
    let x = arr[0];
    for(i=1;i<arr.length;i++) {
        if(x < arr[i]) {
            x = arr[i];
        }
    }
    return x;
}

const emplyees = [{ name: 'john', age:27, salary:'67000'},
{ name: 'john', age:27, salary:'27000'},
{ name: 'lisa', age:35, salary:'35000'},
{ name: 'joseph', age:42, salary:'42000'},
{ name: 'martin', age:65, salary:'80000'},
{ name: 'mary', age:25, salary:'44000'},];

console.log(maxBy(emplyees,e=>e.salary)); //80000
console.log(maxBy(emplyees,e=>e.age)); //65
console.log(maxBy(emplyees,e=>e.name)); //mary