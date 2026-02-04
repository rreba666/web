let num_list = [2, 5, 7,7,7,7,7,7,7, 9, 42, 77, 34, 46, 54, 46, 347, 36,7, 42, -1]

// 封装一个函数，获取数组中的偶数。如传入 [1,2,3,4,5,6]， 返回 [2,4,6] 
function Even_number(list) {
    let even_number_list=[]
    for (const item of list) {
        if(item % 2 ==0){
            even_number_list.push(item)
        }
    }
    return(even_number_list)
}

// 封装一个函数，求圆的面积。 
function Area_circle(r){
    let area = (Math.pow((Math.PI * r),2)).toFixed(2)
    return area
}

//  封装一个函数，返回数组中的最大值，如传入[1,2,3,4,5],返回5 
function Max_num(list) {
    let max = 0
    for (const item of list) {
        if(item > max){
            max =item
        }
    }
    return max ;
}

// 封装一个函数，实现数组元素翻转，如 传入 [1,2,3,4,5] 返回 [5,4,3,2,1]
function Flip(list){
    let temp = 0
    for (let i = 0; i < list.length/2; i++) {
       temp = list[list.length-1-i]
       list[list.length-1-i] = list[i]
       list[i] = temp
    }
    return list
}

// 封装一个函数，判断数组中是否存在某个元素
function select(list,sum) {
    let flag = false;
    for (let i = 0; i < list.length; i++) {
        if (list[i]==sum){
            flag =true;
            return i
        }
    }
    if(flag==false){
        return -1
    }
}

// 封装一个函数，实现数组去重，如传入[1,2,2,3,3,4] 返回 [1,2,3,4]
function unique(list) {
    let temp = 0
    for (let i = 0; i < list.length; i++) {
        temp = list[i]
        for (let j = i+1; j < list.length; j++) {
            if(temp==list[j]){
                list.splice(j,1)
                j--
            }
        }
    }
    return list
}

//使用arguments求任意个数的数字之和 
function sum() {
    let sum= 0
    for (const item of arguments) {
        sum+=item
    }
    return sum
}



// console.log(Even_number(num_list));
// console.log(Area_circle(4));
// console.log(Max_num(num_list));
// console.log(Flip(num_list));
// console.log(select(num_list,3));
console.log(unique(num_list));
console.log(sum(10,20,4440,50));


