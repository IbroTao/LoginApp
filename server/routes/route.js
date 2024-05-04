import {Router} from "express"
const router = Router(); 


/** POST Methods */
router.route('/register').post(async(req, res) => res.json('register route')); // register user
router.route('/registerMail').post(); // send the email
router.route('/authenticate').post(); // authenticate user
router.route('/login').post(); // login in app

/** GET Methods */
router.route('/user/:username').get(); // user with username
router.route('/generateOTP').get(); // generate random OTP
router.route('/verifyOTP').get(); // verify generated OTP
router.route('/createResetSession').get(); // reset all the variables

/** PUT Methods */
router.route('/updateUser').put(); // update user profile 
router.route('/resetPassword').put(); // reset user password


export default router;