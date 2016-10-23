const express = require('express');
const router = express.Router();

const Tropo = require('../models/Tropo');

router.route('/')
  .post(Tropo.receiveText);


module.exports = router;
