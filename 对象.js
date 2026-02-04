// var obj = {
//     age: 18,
// }
// console.log(obj.age)
// console.log(obj['age'])

// var obj = {
//     'na-me': '大锤',
//     age: 18,
// }

// console.log(obj['na-me'])
// var key = 'age';
// console.log(obj[key])


let cars = [
    { name: '本田crv', color: 'red', price: 220000 },
    { name: '奥迪A4', color: 'black', price: 300000 },
    { name: '法拉利F500', color: 'red', price: 5000000 },
    { name: '保时捷911', color: 'orange', price: 1000000 },
    { name: '奔驰大G', color: 'white', price: 2000000 },
]

let red_cars = [];
let total_price = 0;

for (const item of cars) {
    if (item.color === 'red') {
        red_cars.push(item)
    }

    total_price += item.price
}

for (const item of red_cars) {
    console.log(item);

}


console.log("所有汽车的总价是:" + total_price);


const obj = { a: 1, b: 2, c: 3 }
for (const key in obj) {
    // hasOwnProperty：判断对象自身是否具有某个属性
     if (obj.hasOwnProperty(key)) {
        console.log(`${key}: ${obj[key]}`)
     }
}

const obj_2 = { name: '张三', age: 18}
for (const key in obj_2) {
    console.log(`${key}: ${obj_2[key]}`)
}