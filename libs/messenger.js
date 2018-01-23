var Message = require('../models/message')

/**
 *  Messenger lib for handle all message activity
 */
class Messenger {
    create(message) {
        new Message({
            sender: message.sender,
            message: message.message,
        }).save();
    }
}

module.exports = Messenger