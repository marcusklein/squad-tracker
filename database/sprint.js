var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sprintSchema = new Schema({
    squadId: String,
    name: String,
    dateStart: Date,
    dateEnd: Date,
    committedPoints: Number,
    completedPoints: Number
});

var Sprint = mongoose.model('Sprint', sprintSchema);

module.exports = Sprint;