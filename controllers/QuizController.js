const { Quiz, Question, Choice, Score } = require("../models");

class QuizController {
  static async findQuizzes(req, res, next) {
    try {
      const data = await Quiz.findAll({ include: [{ model: Score }] });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async findQuiz(req, res, next) {
    try {
      const { quizId } = req.params;
      const data = await Quiz.findOne({
        where: { id: quizId },
        include: [{ model: Question, include: [Choice] }],
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async createQuiz(req, res, next) {
    try {
      const { id } = req.userLogged;
      const { title, description } = req.body;
      const data = await Quiz.create({
        user_id: id,
        title,
        description,
      });
      res.status(201).json({ message: "Successfully create quiz!" });
    } catch (error) {
      next(error);
    }
  }

  static async updateQuiz(req, res, next) {
    try {
      const { id } = req.userLogged;
      const { quizId } = req.params;
      const { title, description } = req.body;

      const findQUiz = await Quiz.findOne({
        where: { id: quizId, user_id: id },
      });

      if (findQUiz) {
        const data = await Quiz.update(
          {
            title,
            description,
          },
          { where: { id: quizId, user_id: id } }
        );
        res.status(200).json({ message: "Successfully update quiz!" });
      } else {
        throw { name: "ErrorNotFound" };
      }
    } catch (error) {
      next(error);
    }
  }

  static async deleteQuiz(req, res, next) {
    try {
      const { id } = req.userLogged;
      const { quizId } = req.params;

      const findQUiz = await Quiz.findOne({
        where: { id: quizId, user_id: id },
      });

      if (findQUiz) {
        const data = await Quiz.destroy({ where: { id: quizId, user_id: id } });
        res.status(200).json({ message: "Successfully delete quiz!" });
      } else {
        throw { name: "ErrorNotFound" };
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = QuizController;
