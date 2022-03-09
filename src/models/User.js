const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  roles: [{ type: mongoose.Types.ObjectId, ref: 'roles' }],
});

module.exports = mongoose.model(UserSchema, 'users');
