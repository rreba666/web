import fs from 'fs'

const rs = fs.createReadStream('./day23/nodejs/1.txt');

rs.on('data',chunk =>{
    console.log(chunk.toString());
    
});

rs.on('end',()=>{
    console.log('读取完成');
    
});