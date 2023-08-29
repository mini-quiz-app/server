const express = require("express");
const router = express.Router();
const QuizController = require("../controllers/QuizController.js");
const auth = require("../middlewares/authentication.js");

router.get("/api/quizzes", auth, QuizController.findQuizzes);
router.get("/api/quizzes/:quizId", auth, QuizController.findQuiz);
router.post("/api/quizzes", auth, QuizController.createQuiz);
router.put("/api/quizzes/:quizId", auth, QuizController.updateQuiz);
router.delete("/api/quizzes/:quizId", auth, QuizController.deleteQuiz);

module.exports = router;
