const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  capacity: { type: Number, required: true },
  school: { type: mongoose.Types.ObjectId, ref: 'schools' },
  students: [{ type: mongoose.Types.ObjectId, ref: 'users' }],
});

module.exports = mongoose.model('classes', ClassSchema);
