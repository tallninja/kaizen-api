const mongoose = require('mongoose');

const ContentTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = {
  ContentType: mongoose.model('content-types', ContentTypeSchema),
  contentTypes: {
    cats: 'cats',
    assignments: 'assignments',
    exams: 'exams',
    recommendation: 'recommendation',
    competition: 'competition',
  },
};
