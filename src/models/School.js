const mongoose = require('mongoose');

const SchoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true, default: 'mixed' }, // boys, girls, mixed
  motto: String,
  image: String,
  website: String,
  phone: String,
  email: String,
  address: String,
  region: String,
  pobox: String,
});

module.exports = mongoose.model('schools', SchoolSchema);
