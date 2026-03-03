import fs from 'fs';

// fs.readFile('./day23/nodejs/1.txt', 'utf-8', function (err, data) {
//     console.log(err);
//     console.log('--------------');
//     console.log(data);
// })

fs.readFile('./day23/nodejs/观书有感.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('读取失败。。。');
        return;
    }
    console.log(data);
    
})