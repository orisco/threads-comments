const express = require("express");
const cors = require("cors");
const mongoose = require("./db/dbConfig.js");
const threadRoutes = require("./routes/threads.routes.js");

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

//ROUTES
app.use("/threads", threadRoutes);

if (process.env.NODE_ENV === "production") {
  // Serve only the static files form the dist directory
  app.use(express.static(__dirname + "/client/build"));
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname + "/client/built/index.html"));
  });
}

const PORT = process.env.PORT || 1500;

app.listen(PORT, () => {
  console.log("server is running on " + PORT);
});
