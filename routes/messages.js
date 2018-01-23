var express = require('express');
var router = express.Router();
var messageController = require('../controllers/messageController');

router.get('/', messageController.index);

module.exports = router;
