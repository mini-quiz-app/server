const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController.js");
const auth = require("../middlewares/authentication.js");

router.post("/api/login", UserController.login);
router.get("/api/user/my-quizzes", auth, UserController.myQuizzes);
router.post("/api/quizzes/score", auth, UserController.userScore);

module.exports = router;
