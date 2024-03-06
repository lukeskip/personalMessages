const router = require("express").Router();
const requestMessages = require("../controllers/requestMessages");

router.post("/", requestMessages);

module.exports = router;
