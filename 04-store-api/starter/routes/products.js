const express = require('express')
    const router =express.Router()

const {getAllProuducts, getAllProductsStatic} = require('../controllers/products')

router.route('/').get(getAllProuducts)
router.route('/static').get(getAllProductsStatic)


module.exports = router