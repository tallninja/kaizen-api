const App = require('./src/app.js');

const PORT = process.env.PORT || 5000;

const app = new App();

app.run(PORT);
