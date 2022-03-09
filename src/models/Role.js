const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const roles = {
  admin: 'admin',
  teacher: 'teacher',
  student: 'student',
  parent: 'parent',
  manager: 'manager',
  classrep: 'classrep',
};

const Role = mongoose.model('roles', RoleSchema);

module.exports = { Role, roles };
