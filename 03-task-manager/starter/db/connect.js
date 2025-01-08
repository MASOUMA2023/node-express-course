const mongoose = require('mongoose');
const URI = MONGO_URI;
const connectDB = (URI)=>{
   return  mongoose.connect(URI,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}


module.exports = connectDB;