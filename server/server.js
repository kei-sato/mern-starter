import Express from 'express';

// Initialize the Express App
const app = new Express();

// Import required modules
import serverConfig from './config';

require('./config/mongoose')();
require('./config/axios')();

require('./config/webpack')(app);
require('./config/express')(app);
require('./routes/post.routes')(app);
require('./routes/render')(app);

// start app
app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`MERN is running on port: ${serverConfig.port}! Build something amazing!`); // eslint-disable-line
  }
});

export default app;
