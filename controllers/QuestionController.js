const { Question } = require("../models");

class QuestionController {
  static async createQuestion(req, res, next) {
    try {
      const { quizId } = req.params;
      const { question } = req.body;
      const data = await Question.create({
        quiz_id: quizId,
        question,
      });
      res.status(201).json({ message: "Successfully add question!" });
    } catch (error) {
      next(error);
    }
  }

  static async updateQuestion(req, res, next) {
    try {
      const { quizId, questionId } = req.params;
      const { question } = req.body;

      const findQuestion = await Question.findOne({
        where: { id: questionId, quiz_id: quizId },
      });

      if (findQuestion) {
        const data = Question.update(
          {
            question,
          },
          {
            where: { id: questionId, quiz_id: quizId },
          }
        );
        res.status(200).json({ message: "Successfully update question!" });
      } else {
        throw { name: "ErrorNotFound" };
      }
    } catch (error) {
      next(error);
    }
  }

  static async deleteQuestion(req, res, next) {
    try {
      const { quizId, questionId } = req.params;

      const findQuestion = await Question.findOne({
        where: { id: questionId, quiz_id: quizId },
      });

      if (findQuestion) {
        const data = Question.destroy({
          where: { id: questionId, quiz_id: quizId },
        });
        res.status(200).json({ message: "Successfully delete question!" });
      } else {
        throw { name: "ErrorNotFound" };
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = QuestionController;
