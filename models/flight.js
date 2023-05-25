const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS','DFW','LAX','SAN','DEN'],
    default: 'DEN'
  },

  arrival: {
    type: Date
  }

}, {
  timestamps: true
});


const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['Delta', 'Southwest', 'American', 'Continental']  
  },
  airport: {
    type: String,
    enum: ['AUS','DFW','LAX','SAN','DEN'],
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    default: addOneYear(Date.now())
  },

  destination: [destinationSchema]

}, {
  timestamps: true
});

function addOneYear(date) {
  const currDate = new Date(date);
  currDate.setFullYear(currDate.getFullYear() + 1);
  return currDate;
}

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);