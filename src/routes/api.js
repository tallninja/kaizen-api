const Joi = require('joi');
const router = require('express').Router();

const emailValidationOptions = {
  minDomainSegments: 2,
  tlds: { allow: ['com', 'edu', 'ke'] },
};

router.get('/', (req, res) => {
  res.status(200).json({ message: 'API routes' });
});

router.get('/auth', (req, res) => {
  res.status(200).json({ message: 'API auth routes' });
});

router.post('/auth/signin', (req, res) => {
  const credentialsSchema = Joi.object({
    email: Joi.string().email(emailValidationOptions),
    password: Joi.string(),
  });
  const credentials = credentialsSchema.validate(req.body);
  res.status(200).json(credentials);
});

router.post('/auth/signup', (req, res) => {
  const signupSchema = Joi.object({
    firstName: Joi.string(),
    lastName: Joi.string(),
    userName: Joi.string(),
    email: Joi.string().email(emailValidationOptions),
    phoneNumber: Joi.string(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  });

  const userData = signupSchema.validate(req.body);
  res.status(200).json(userData);
});

module.exports = router;
