var convert = function (s, numRows) {
    if (numRows === 1) {
        return s
    }

    let list = []

    for (let i = 0; i < numRows; i++) {
        list.push("")
    }

    let startRow = 0
    let isDown = true

    for (let i = 0; i < s.length; i++) {
        list[startRow] += s[i]


        if (startRow === 0) {
            isDown = true
        }
        else if (startRow === numRows - 1) {
            isDown = false
        }

        if (isDown) { 
            startRow++
        } else
            startRow--
    }

    let str = ""
    for (let i = 0; i <list.length ; i++) {
        console.log(list[i]);
        
        str+=list[i]
        
    }
    return str
};

console.log(convert('PAYPALISHIRING',3));
