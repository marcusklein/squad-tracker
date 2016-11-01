var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var daySchema = new Schema({
    squadId: String,
    sprintId: String,
    date: Date,
    pointsCompleted: Number
});

var Day = mongoose.model('Day', daySchema);

module.exports = Day;