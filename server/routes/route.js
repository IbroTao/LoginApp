import {Router} from "express"
const router = Router(); 


/** POST Methods */
router.route('/register').post(async(req, res) => res.json('register route'))
router.route('/registerMail').post();
router.route('/authenticate').post();
router.route('/login').post();

/** GET Methods */
router.route('/user/:username').get();
router.route('/generateOTP').get();
router.route('/verifyOTP').get();
router.route('/createResetSession').get();

/** PUT Methods */
router.route()

export default router;