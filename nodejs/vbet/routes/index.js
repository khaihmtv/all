"user strict";

let router = require('express').Router()

router.use(require('./core'))
router.use(require('./xoso'))
router.use(require('./login-logout'))
router.use(require('./register'))


module.exports = router