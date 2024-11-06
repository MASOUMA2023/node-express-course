const os = require('os');
// get info about user
const user = os.userInfo()
console.log(user)

//get the system uptime
console.log(`the system uptime is: ${os.uptime()} seconds`)