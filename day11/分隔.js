let str = '    a  b   c   d   '
let str1=''
for (let i = 0; i < str.length; i++) {
    if(str.charAt(i)!= ' '){
        str1+=str.charAt(i)
    }
}
console.log(str);

console.log(str1);
