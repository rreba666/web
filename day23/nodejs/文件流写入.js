import fs from 'fs'

const ws = fs.createWriteStream('./day23/nodejs/观书有感.txt')

ws.write('不见棺材不落泪\n')
ws.write('不到黄河心不死\n')

ws.close()