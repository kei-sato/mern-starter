const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
  port: process.env.PORT || 8000,
  sessionSecret: process.env.SESSION_SECRET || 'Your Session Secret goes here',
};

export default config;
