const express = require('express');


const router = express.Router();

router.route('/').get((req, res) => res.json('Cars can be found here'));

module.exports = router;