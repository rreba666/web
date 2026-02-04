// function A() {
//     console.log('父');
//     let a = 10;
//     function B() {
//         console.log('子');
//         console.log(a++);
//     }
//     return B;
// }
// let result = A();
// result();
// result(); 
// result(); 



for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100)
}

let arr = [2, 6, 4]
console.log(Math.max(...arr))
