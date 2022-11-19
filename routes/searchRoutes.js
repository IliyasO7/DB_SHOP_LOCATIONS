const path = require('path');

const express = require('express');


const shopController = require('../controllers/shopC');



const userAuthentication = require('../middleware/auth');


const router = express.Router();

router.post('/allProducts',userAuthentication.authentication,shopController.getAll);

module.exports = router;