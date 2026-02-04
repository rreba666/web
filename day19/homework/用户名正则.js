let reg = /^[a-z]\w{5,17}$/i

console.log(reg.test('ggsd1_fd')) 
console.log(reg.test('ASDFGHJ'))
console.log(reg.test('ggsd1-fd')) 
console.log(reg.test('1ggsd1fd')) 
console.log(reg.test('ggsd1fdhdhgfdyeryrtetert')) 