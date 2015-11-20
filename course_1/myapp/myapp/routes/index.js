var express = require('express');
var router = express.Router();

var User = {};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'This is my app' });
});

// http://domain.com:3000/users/ -> json
router.get('/users', function(req, res, next) {
  res.json({
      users: User
  });
});

router.get('/user/:userid', function(req, res, next) {
  var userid = req.params["userid"];
  
  if (User[userid]) {
    return next();  
  } else {
    return res.json({
        status: "user is not exsited"
    });
  }
    
});

router.get('/user/:userid', function(req, res, next) {
    return res.json({
        user: User[req.params["userid"]]
    });
});

router.post('/user', function(req, res, next) {
   var user = req.body;
   if ( ! user.name || user.name == "") {
       return res.json({
           status: "user create fail"
       });
   }
   
   User[user.name] = user;
   return res.json({
     user: User[user.name]    
   });
});


module.exports = router;