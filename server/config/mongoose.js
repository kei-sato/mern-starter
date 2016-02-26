import mongoose from 'mongoose';
import serverConfig from './index';
import dummyData from '../dummyData';

module.exports = function() {
  // MongoDB Connection
  mongoose.connect(serverConfig.mongoURL, (error) => {
    if (error) {
      console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
      throw error;
    }

    // feed some dummy data in DB.
    dummyData();
  });
};
