const mongoose = require('mongoose');
const { MONGO_URI } = require('../config/keys');
const { Role, roles } = require('./Role');
const { ContentType, contentTypes } = require('./ContentType');

const initializeRoles = () => {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      Object.values(roles).map((role) => {
        new Role({
          name: role,
        }).save((err) => {
          if (err) {
            console.log(`Error creating ${role} role !`, err);
          } else {
            console.log(`${role} Role created successfully !`);
          }
        });
      });
    }
  });
};

const initializeContentTypes = () => {
  Object.values(contentTypes).map((contentType) => {
    ContentType.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new ContentType({
          name: contentType,
        }).save((err) => {
          if (err) {
            console.log(`Error creating ${contentType} Content Type !`, err);
          } else {
            console.log(`${contentType} content type created successfully !`);
          }
        });
      }
    });
  });
};

module.exports = dbInit = () => {
  mongoose.connect(MONGO_URI, (err) => {
    if (err) {
      console.log('Error connecting to database !', err);
    } else {
      console.log('Conected to database !');
    }
  });
  initializeRoles();
  initializeContentTypes();
};
