import {Router} from "express"
const router = Router(); 


/** POST Methods */
router.route('/register').post(async(req, res) => res.json('register route'))
router.route('/registerMail').post();
router.route('/authenticate').post();
router.route('/login').post();

/** GET Methods */


/** PUT Methods */



export default router;