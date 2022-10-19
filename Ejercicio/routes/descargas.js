var express = require('express');
var router = express.Router();

/* GET descargas page. */
router.get('/', function(req, res, next) {
  res.render('descargas');
});

module.exports = router;