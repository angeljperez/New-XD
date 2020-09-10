const express = require('express');
const router = express.Router();

router.use('/api/xd', require('./xd.routes'));

module.exports = router;