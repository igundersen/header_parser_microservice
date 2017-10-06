var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/whoami', function (req, res, next) {
  res.json({
    ipaddress: req.headers['x-forwarded-for'],
    language: req.headers["accept-language"].split(',')[0],
    software: req.headers['user-agent'].split(') ')[0].split(' (')[1]
  });
});

module.exports = router;
