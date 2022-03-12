const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Kaizen API' });
});

router.use('/api', require('./api'));

module.exports = router;
