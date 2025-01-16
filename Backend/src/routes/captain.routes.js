const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware');


router.post('/register', [
    body('fullname.firstname').isLength({min: 3}).withMessage('first name must be at least 3 characters long'),
    body('email').isEmail().withMessage('email is invalid'),
    body('password').isLength({min: 6}).withMessage('password must be at least 6 characters long'),
    body('vehicle.color').isLength({min: 3}).withMessage('color must be at least 3 characters long'),
    body('vehicle.plate').isLength({min: 3}).withMessage('plate must be at least 3 characters long'),
    body('vehicle.capacity').isInt({min: 1}).withMessage('capacity must be at least 1 characters long'),
    body('vehicle.vehicleType').isIn(['car', "auto", "motorcycle"]).withMessage('invalid vehicle type')

],
 captainController.registerCaptain
)

router.post('/login',[
    body('email').isEmail().withMessage('email is invalid'),
    body('password').isLength({min: 6}).withMessage('password must be at least 6 characters long')
],
captainController.loginCaptain
)


router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile)

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain)

module.exports = router;