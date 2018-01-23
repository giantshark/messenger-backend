var Message = require('../models/message')
var config = require('../config/config')

exports.index = function(req, res) {
    Message.find()
    .select('sender message -_id')
    .sort('time')
    .limit(config.chatLimit)
    .exec(function(err, messages) {
        res.status(config.successStatus).json({
            status: config.successStatus,
            response: messages
        });
    });
}