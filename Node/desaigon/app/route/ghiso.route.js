const router=require('express').Router()

router.route('/ghiso').get(function (req, res, next) {
      res.render('ghiso')
})

module.exports=router