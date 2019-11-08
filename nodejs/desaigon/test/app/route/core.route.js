const router=require('express').Router()
const CoreCtl=require('../control').Core

router.route('/')
.get(CoreCtl.rendercore)
.post(CoreCtl.login)

router.route('/user/login')
.get((CoreCtl.renderlogin))
.post(CoreCtl.login)

router.route('/user/register')
.get(CoreCtl.renderregister)
.post(CoreCtl.register)

router.route('/user/logout')
.get(CoreCtl.logout)

router.route('/user/profile')
.get(CoreCtl.renderprofile)
.post(CoreCtl.updateprofile)

router.route('/user/message')
.get(CoreCtl.rendermessage)

module.exports=router
