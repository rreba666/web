import fs from 'fs'

// let data = fs.readFileSync("./day23/nodejs/1.txt")
// fs.writeFileSync('./day23/nodejs/2.txt', data)



// 文件流复制 适合大文件
const rs = fs.createReadStream("./day23/nodejs/1.txt")
const ws = fs.createWriteStream("./day23/nodejs/3.txt")

rs.on('data', chunk => {
    console.log(chunk);
    
    ws.write(chunk);
});

rs.on('end', () => {
})

