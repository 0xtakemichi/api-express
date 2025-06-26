const mongoose = require('mongoose');

const Users = mongoose.model('User', {
    name: { type: String, required: true, minlength: 3 },
    lastName: { type: String, required: true, minlength: 3 },
});

module.exports = Users