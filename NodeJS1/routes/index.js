var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/study',function(parameters){
    var req = parameters.req;
    var res = parameters.res;
    res.render('HttpServer',{title:'haha'});
});

module.exports = router;

