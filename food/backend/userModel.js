const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/foodapplication', { useNewUrlParser: true });

var UserSchema = new mongoose.Schema({

  first_name: {
    type: String,
    minlength: 3,
    required: [true, "First Name must be greater than 3 characters."]
  },

  last_name: {
    type: String,
    minlength: 3,
    required: [true, "Last Name must be greater than 2 characters."]
  },

  email: {
    type: String,
    minlength: 3,
    required: [true, "An email is required to make an account."]
  },

  password: {
    type: String,
    minlength: 5,
    required: [true, "Password must be greater than 5 characters."]
  },

  city: {
    type: String,
    minlength: 3,
    // required: [true, "City is required to make an account."]
  },

  state: {
    type: String,
    // required: [true, "City is required to make an account."]
  },

  zip: {
    type: Number,
    type: String,
    // required: [true, "Zip is required to make an account."]

  },


  admin: {
    type: Boolean,
  },

},

  { timestamps: true }

);



module.exports = mongoose.model('User', UserSchema);