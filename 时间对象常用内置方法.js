
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// 案例：封装一个函数，可以得到当前日期时间，返回格式如 2018-08-07 12:23:34

function take_time() {

    function add_zero(num) {
        return num >= 10 ? num : '0'+num
    }
    let date = new Date()
    let year = date.getFullYear();
    let month = add_zero(date.getMonth()+1);
    let day = add_zero(date.getDate());
    let hours = add_zero(date.getHours());
    let minutes = add_zero(date.getMinutes());
    let secondes = add_zero(date.getSeconds());
    let new_date = `${year}-${month}-${day} ${hours}:${minutes}:${secondes}`
    return new_date;
}

// console.log( take_time());


let timer1 = setTimeout(()=>console.log('777'),2000)

let timer2 = setInterval(()=>console.log('666'),1000)


  setTimeout(() =>clearInterval(timer2) , 5000)