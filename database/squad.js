var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var squadSchema = new Schema({
    name: String
});

var Squad = mongoose.model('Squad', squadSchema);

module.exports = Squad;