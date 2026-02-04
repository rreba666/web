let phone = '13411112222'
let username = 'rreba'
let str = 'background-color'

function Hide_phone(phone) {
    // let phone = prompt("输入您的电话号码")
    let hide_phone = phone.replace(phone.substring(3, 7), '****')
    console.log("您的电话号码是：" + hide_phone)

}
Hide_phone(phone)



function UP_first(old_str) {
    let new_str = old_str.replace(old_str.charAt(), old_str.charAt().toUpperCase())
    console.log("首字母大写：" + new_str);
}

UP_first(username)

function camelCase(str) {
    let arr = str.split('-')
    let new_str = arr[0]
    for (let i = 1; i < arr.length; i++) {
        let a = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        new_str += a
    }

    console.log(new_str);

}

camelCase(str)