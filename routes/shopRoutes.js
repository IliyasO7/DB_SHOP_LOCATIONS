const path = require('path');

const express = require('express');


const shopController = require('../controllers/shopC');



const userAuthentication = require('../middleware/auth');


const router = express.Router();

router.get('/shopAll',shopController.shopController);

module.exports = router;