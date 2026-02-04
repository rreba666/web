

    // console.log('abcdef'.charAt());
    // console.log('abcdef'.charAt(4));
    // console.log('abcdef'.charAt(8));

    // var str = 'abc'

    // console.log(str[2]);

    // var str = 'Abc';
    // console.log(str.toUpperCase());
    // console.log(str.toLowerCase());

    // console.log('abcdef'.substring(0,3));
    // console.log('abcdef'.substring(2,4));
    // console.log('abcdef'.substring(2));

    // var str_test = "JavaScript";
    // console.log(str_test.substring(4));
    // console.log(str_test.substring(4,8));
    // console.log(str_test.substring(0));
    // console.log("----------------------------");
    // console.log(str_test.substring(-1));
    // console.log("----------------------------");
    // console.log(str_test.substring(-1, -5));

    // console.log(str_test.slice(0));
    // console.log("----------------------------");
    // console.log(str_test.slice(-1));
    // console.log("----------------------------");
    // console.log(str_test.slice(-5,-1));

    // console.log(str_test.indexOf('a'));
    // console.log(str_test.indexOf('e'));
    // console.log(str_test.indexOf('Scr'));

    function Hide_phone() {
        let phone = prompt("输入您的电话号码")
        let hide_phone = phone.replace(phone.substring(3,7),'****')
        alert("您的电话号码是："+hide_phone)
    }
    // Hide_phone()

    
    
    function UP_first() {
        let old_str = prompt("请输入一串内容")
       let new_str=old_str.replace(old_str.charAt(),old_str.charAt().toUpperCase())
        alert("首字母大写："+new_str)
        
    }
  
// UP_first()


var arr = [3, 19, 2, 7, 9, 33]
arr.sort(function (a, b) {
    // 升序: 前者-后者
    // 降序: 后者-前者
    return b-a
})

console.log(arr)

let users = [
    { name: '张三', height: 160 },
    { name: '李四', height: 170 },
    { name: '王五', height: 180 },
    { name: '赵六', height: 176 },
    { name: '田七', height: 188 },
]

let new_users = users.sort(function (a,b) {
    return a.height - b.height
})

console.log(new_users);










