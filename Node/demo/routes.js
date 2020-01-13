let router = require('express').Router();

module.exports=router;

router.get('/',function(req,res){
  res.render('trangchu')
})

router.get('/ketqua', function(req, res) {
  res.render('ketqua') 
})
