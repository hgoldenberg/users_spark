const mongoose = require("mongoose");

// set up mongoose

const URI = "mongodb://localhost/spark";

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("DB is connected");
});
