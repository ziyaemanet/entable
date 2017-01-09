const express = require('express');
const router = express.Router();

router.use('/tropo', require('./tropo'));
router.use('/email', require('./email'));

module.exports = router;
