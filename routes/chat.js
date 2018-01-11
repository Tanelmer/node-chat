/**
 * Created by viruser on 2018/1/11.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('chat', { title: 'chatroom' });
});

module.exports = router;
