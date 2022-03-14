// Bring Mongoose into the app 
import mongoose from 'mongoose'

const mongoHost = process.env.MONGO_HOST || 'localhost'
const mongoPrimeHost = process.env.MONGO_PRIME_HOST
const mongoPort = process.env.MONGO_PORT || 27017
const mongoUser = process.env.MONGO_USER
const mongoPass = process.env.MONGO_PASS

let mongoUrl = ''

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: false,
  keepAlive: true,
  socketTimeoutMS: 45000,
  keepAliveInitialDelay: 30000
}

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'stage') {
  option.user = mongoUser
  option.pass = mongoPass
  if (mongoPrimeHost) {
    mongoUrl = `mongodb://${mongoPrimeHost}:${mongoPort},${mongoHost}:${mongoPort}/practiceDB?replicaSet=${process.env.NODE_ENV === 'production' ? 'rs-prod-bws' : 'rs-bws'}&readPreference=secondary`
  } else {
    mongoUrl = `mongodb://${mongoHost}:${mongoPort}/practiceDB`
  }
} else {
  mongoUrl = `mongodb://${mongoHost}:${mongoPort}/practiceDB`
}

// Create the database connection 
mongoose.connect(mongoUrl, option).catch(err => console.log(err))

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + mongoUrl);
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});