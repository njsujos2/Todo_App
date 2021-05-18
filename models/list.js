var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var list = new Schema({
  content: String
}, {
  collection: 'list'
});

module.exports = mongoose.model('list', list);