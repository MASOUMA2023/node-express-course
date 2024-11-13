const fs = require('fs');

const filePath = '../content/big.txt';

const stream = fs.createReadStream(filePath, {
  encoding: 'utf8',
  highWaterMark: 200 
});

let chunkCount = 0;

stream.on('data', (chunk) => {
  chunkCount++;  
  console.log(`Received chunk #${chunkCount}:`);
  console.log(chunk);  
});

stream.on('end', () => {
  console.log(`Stream ended. Total number of chunks received: ${chunkCount}`);
});

stream.on('error', (error) => {
  console.error('Error occurred while reading the stream:', error);
});