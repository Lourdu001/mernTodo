const mongoose = require('mongoose');
const Text = new mongoose.Schema({
    test:String,
});
module.exports = mongoose.model('SingleText',Text);