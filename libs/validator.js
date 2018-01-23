class Validator {
    isMessageValid(message) {
        return message.sender && message.message;
    }
}

module.exports = Validator