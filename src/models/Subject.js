const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  class: { type: mongoose.Types.ObjectId, ref: 'classes', required: true },
  teacher: { type: mongoose.Types.ObjectId, ref: 'users', required: true },
});

module.exports = mongoose.model('subjects', SubjectSchema);
