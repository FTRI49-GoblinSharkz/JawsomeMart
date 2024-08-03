const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    hashedPassword: {
      type: String,
      required: true,
    },
    streetAddress: {
      type: String,
      // required: true,
    },
    city: {
      type: String,
      // required: true, 
    },
    zipcode: {
      type: String,
      // required: true,
    },
    state: {
      type: String,
      // required: true,
    },
    preferences: {
      type: [String],
      // required: true,
    },
    email: {
      type: String,
      // required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

// const SALT_WORK_FACTOR = process.env.SALT_WORK_FACTOR || 12;

// // Match user entered password to hashed password in database
// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// userSchema.pre('save', async function (next) {
//   if (this.isModified('password')) {
//     const salt = await bcrypt.genSaltSync(SALT_WORK_FACTOR);
//     this.password = await bcrypt.hashSync(this.password, salt);
//   }
//   next();
// });

const User = mongoose.model('User', userSchema);

module.exports = User ;
