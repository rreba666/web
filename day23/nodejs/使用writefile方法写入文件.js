import fs from 'fs'

// 覆盖写入

// 异步写入
fs.writeFile('./day23/nodejs/1.txt','rreba666',err=>{
    if (err) {
        console.log('写入失败');
    }
    else{
        console.log('写入成功');
        
    }
})

// 同步写入

fs.writeFileSync('./day23/nodejs/test.txt','test')