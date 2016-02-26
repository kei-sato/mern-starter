import bcrypt from 'bcrypt-nodejs';
import mongoose from 'mongoose';

let schema = new mongoose.Schema({
  id        : { type: Number, unique: true, required: true },
  username  : { type: String, unique: true },
  password  : String,
  name      : String, // not unique name
  createdAt : { type: Date, default: Date.now, required: true },
});

/**
 * Password hash middleware.
 */
schema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(5, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

/*
 Defining our own custom document instance method
 */
schema.methods = {
  comparePassword: function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if(err) return cb(err);
      cb(null, isMatch);
    });
  }
};


export default mongoose.model('User', schema);
