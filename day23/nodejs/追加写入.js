import fs from 'fs'

fs.appendFile('./day23/nodejs/1.txt', '\n2222', err => { 
    if (err) {
        console.log('写入失败');
    }else{
        console.log('追加写入成功');
        
    }
})

//同步
fs.appendFileSync('./day23/nodejs/test.txt','666')

fs.writeFile('./day23/nodejs/1.txt','rreba666',{flag:'a'},err=>{
    if (err) {
        console.log('写入失败');
    }
    else{
        console.log('写入成功');
        
    }
})