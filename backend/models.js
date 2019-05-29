const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yumyums', {
  useNewUrlParser: true
});

const YumyumSchema = new mongoose.Schema({
    yumyum: {
    type: String,
    required: [true, "give your yumyum a title"],
    min: [3, 'true real yumyums need to be 3 letters and more']
    },
    date: {
        type: Date,
        required: [false, "if its not in your pocket list either delete it or tick pocket list"],
    },
    times: {
        type: String,
        required: [false, "if its not in your pocket list either delete it or tick pocket list"],
      },
  likes: {
    type: Number,
    default: 0,
    },
    plist: {
        type: Boolean,
        default: false,
      },
  reator: [UserSchema],

  restaurant: [TestaurantSchema],

  rsvp: [RSVPSchema],
}, { timestamps: true });


const UserSchema = new mongoose.Schema({
    // firstName: string;
    // lastName: string;
    // email: string;
    // password: string;
    // confirmed: string;
    // tel: number;
    // street1: string;
    // street2: string;
    // city: string;
    // zip: number;
    // country: string;
  firstName: {
    type: String,
    required: [true, "You cant be nameless, if you are! use infamous as your first name; unless you are Chuck Norris!"],
    min: 3
  },
},
    { timestamps: true });

module.exports = mongoose.model('YumYum', YumyumSchema);

//i'll continue later .. time to sleep
