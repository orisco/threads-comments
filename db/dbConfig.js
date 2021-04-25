const mongoose = require("mongoose");

const CONNECTION_URL =
  "mongodb+srv://orisayag:Os6852265@cluster0.1iwcf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log(`connection error ${error}`);
  });

module.exports = mongoose;
