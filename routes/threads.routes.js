const router = require("express").Router();
const { Thread } = require("../db/models/thread.model.js");

router.get("/:threadId", async (req, res) => {
  try {
    const getThread = await Thread.find({ _id: req.params.threadId });
    res.status(200).json(getThread);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const newThread = new Thread(req.body);
  try {
    // run if this is a sub comment
    if ("parentId" in req.body) {
      const subThread = await newThread.save();

      // update parentComment
      await Thread.updateOne(
        { _id: req.body.parentId },
        { $push: { children: subThread._id } }
      );
    }

    // run if this not a sub comment
    newThread.save().then((newThread) => {
      res.status(201).json(newThread);
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:commentId", async (req, res) => {
  try {
    if ("color" in req.body) {
      await Thread.updateOne(
        { _id: req.params.commentId },
        { $set: { color: req.body.color } }
      );
    } else {
      await Thread.updateOne(
        { _id: req.params.commentId },
        { $set: { title: req.body.title } }
      );
    }
    res.status(200).json({ err: false, msg: "updated color" });
  } catch (error) {
    res.status(400).json({ err: true, msg: err.message });
  }
});

module.exports = router;
