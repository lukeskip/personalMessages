const router = require("express").Router();
const requestMessages = require("../controllers/requestMessages");
const { SENDER } = process.env;

router.post("/", requestMessages);
router.get("/test", (req, res) => {
  res.json({ sender: SENDER });
});

module.exports = router;
