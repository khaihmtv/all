const router=require('express').Router()
const CoreCtl=require('../control').core

router.route('/').get(CoreCtl.rendercore)

module.exports=router