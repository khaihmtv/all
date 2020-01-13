const router=require('express').Router()
const Ctr=require('../control').Ghiso

router.route('/ghiso')
.get(Ctr.userauth)
.post(Ctr.datcuoc)

module.exports=router

