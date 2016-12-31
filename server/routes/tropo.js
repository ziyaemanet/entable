const express = require('express');
const router = express.Router();

const Tropo = require('../models/Tropo');

router.post('/create', Tropo.create);
router.post('/trans', Tropo.trans);
router.post('/member', Tropo.member);
router.post('/fund', Tropo.fund);
router.get('/', Tropo.all);


module.exports = router;
