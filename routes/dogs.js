var express = require("express");
var router = express.Router();
const db = require("../data/dbConfig");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    const dogs = await db("dogs");
    if (dogs.length) {
      res.status(200).json({ dogs });
    } else {
      const err = new Error("There are no dogs in the database.");
      err.status = 404;
      throw err;
    }
  } catch (err) {
    if (err.status) {
      res.status(err.status).json({ message: err.message });
    } else {
      res.status(500).json({
        message: "Error retrieving dogs from database.",
      });
    }
  }
});

module.exports = router;
