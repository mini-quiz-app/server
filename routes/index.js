const express = require("express");
const router = express.Router();

const userRouter = require("./user.js");
const quizRouter = require("./quiz.js");
const questionRouter = require("./question.js");
const choiceRouter = require("./choice.js");

router.use(userRouter);
router.use(quizRouter);
router.use(questionRouter);
router.use(choiceRouter);

module.exports = router;
