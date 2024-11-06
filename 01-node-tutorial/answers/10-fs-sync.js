const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./temporary/first.txt', 'utf8')
const second = readFileSync('./temporary/second.txt', 'utf8')

writeFileSync(
  './temporary/fileA.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')