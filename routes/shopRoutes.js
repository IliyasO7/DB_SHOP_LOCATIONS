const path = require('path');

const express = require('express');


const shopController = require('../controllers/shopC');



const userAuthentication = require('../middleware/auth');


const router = express.Router();

router.get('/shopAll',shopController.shopController);

router.post('/createShop',userAuthentication.authentication ,shopController.addShop);

router.get('/getShops',userAuthentication.authentication,shopController.getShops)

router.post('/addProducts', userAuthentication.authentication, shopController.addProductsToShop);

module.exports = router;