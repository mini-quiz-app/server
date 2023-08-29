const express = require("express");
const router = express.Router();
const QuestionController = require("../controllers/QuestionController.js");
const auth = require("../middlewares/authentication.js");

router.post(
  "/api/quizzes/:quizId/question",
  auth,
  QuestionController.createQuestion
);

router.put(
  "/api/quizzes/:quizId/question/:questionId",
  auth,
  QuestionController.updateQuestion
);

router.delete(
  "/api/quizzes/:quizId/question/:questionId",
  auth,
  QuestionController.deleteQuestion
);

module.exports = router;
