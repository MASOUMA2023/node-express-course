const express = require('express')
const router = express.Router();
const {logon} = require('../controllers/authcontroller')

router.post('/logon', logon)




module.exports= router;