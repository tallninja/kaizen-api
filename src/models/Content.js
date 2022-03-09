const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  blobURL: { type: String, required: true },
  region: { type: String, required: true },
  type: { type: String, required: true },
  ContentType: {
    type: mongoose.Types.ObjectId,
    ref: 'content-types',
    required: true,
  },
  subject: { type: mongoose.Types.ObjectId, ref: 'subjects', required: true },
});

module.exports = mongoose.model('content', ContentSchema);
