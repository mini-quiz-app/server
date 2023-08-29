const express = require("express");
const router = express.Router();
const ChoiceController = require("../controllers/ChoiceController.js");
const auth = require("../middlewares/authentication.js");

router.post(
  '/api/questions/:questionId/choice',
  auth,
  ChoiceController.createChoice
);

module.exports = router;
