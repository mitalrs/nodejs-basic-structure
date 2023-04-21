const express = require('express');
const router = express.Router();

const { userInformation, userInformationget } = require('../controllers/authController')

router.route("/personalinfo").post(userInformation);
router.route("/userinfo").get(userInformationget);


module.exports = router;