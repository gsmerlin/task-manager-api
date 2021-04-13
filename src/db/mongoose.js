const mongoose = require("mongoose");

// Creates mongoose database
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB up on port 27017")).catch((error) => console.log('Unable to connect to mongoDB'));
