const path = require('path');

const express = require('express');


const userController = require('../controllers/users');
const productController = require('../controllers/productController')


const userAuthentication = require('../middleware/auth');


const router = express.Router();

router.get('/products',productController.productController);


/*
router.post('/signup', userController.signup)

router.post('/login',userController.login)
//router.get('/user/signup',userController.signedUsers);
/*
router.get('/user/getUser',authenticateMiddleware.authentication,userController.getUsers);

//router.get('/user/getUser',authenticateMiddleware.authentication,userController.getUsers);

router.post('/user/addUser',authenticateMiddleware.authentication,userController.postAddUser);

router.delete('/user/deleteUser/:userId',authenticateMiddleware.authentication,userController.deleteUser);
*/



/*
router.post('/getExpenses/:pageNo',userAuthentication.authentication ,expenseController.getExpenses);

router.post('/addExpense',userAuthentication.authentication,expenseController.addExpenses);

router.delete('/deleteExpense/:userId',userAuthentication.authentication,expenseController.deleteExpenses);
*/


module.exports = router;









