const mongoose = require('mongoose');

const CultureReportSchema = new mongoose.Schema({
  incident: { type: String },
  region: { type: String },
  description: { type: String },
  town: { type: String },
  occurenceTimes: { type: Number },
  genderAffected: { type: String },
});

module.exports = mongoose.model('culture-reports', CultureReportSchema);
