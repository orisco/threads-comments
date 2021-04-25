const mongoose = require("mongoose");

const threadSchema = mongoose.Schema({
  title: String,
  color: String,
  children: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread",
      autopopulate: true,
    },
  ],
});

threadSchema.plugin(require("mongoose-autopopulate"));

const Thread = mongoose.model("Thread", threadSchema);

module.exports = { Thread };
