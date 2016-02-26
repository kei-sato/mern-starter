import Express from 'express';
import passport from 'passport';

// Initialize the Express App
const app = new Express();

// Import required modules
import serverConfig from './config';

require('./config/mongoose')();
require('./config/axios')();

require('./config/webpack')(app, passport);
require('./config/passport')(app, passport);
require('./config/express')(app, passport);
require('./routes/api')(app, passport);
require('./routes/render')(app, passport);

// start app
app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`MERN is running on port: ${serverConfig.port}! Build something amazing!`); // eslint-disable-line
  }
});

export default app;
