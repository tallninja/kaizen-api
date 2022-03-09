const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes');
const dbInit = require('./models');

class App {
  constructor() {
    this.app = express();
  }

  async init() {
    let app = this.app;
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(morgan(process.env.NODE_ENV == 'production' ? 'common' : 'dev'));
    dbInit();
    app.use('/', router);
  }

  async run(PORT) {
    let app = this.app;
    await this.init();
    app.listen(PORT, (err) => {
      if (err) {
        console.err(err);
      } else {
        console.log(`Server listening on PORT: ${PORT}`);
      }
    });
  }
}

module.exports = App;
