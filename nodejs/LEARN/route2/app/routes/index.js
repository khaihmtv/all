"user strict";

let router = require('express').Router();

// Application routes
router.use('/', require('./core.server.routes'));
router.use('/author', require('./author.server.routes'));

module.exports = router;