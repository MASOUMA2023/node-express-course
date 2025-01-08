const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()


const logon =(req, res)=>{
    const {name, pasword}= req.body;
    if (name ==='admin' && pasword === 'pasword'){
        const token = jwt.sign({name},process.env.JWT_SECRET, {expiresIn:process.env.JWT_LIFETIME})
        return res.status(200).json({token});
    }
    return res.status(401).json({msg: 'Invalid credential'})

}



module.exports ={logon}