const { Choice } = require("../models");

class ChoiceController {
  static async createChoice(req, res, next) {
    try {
      const { questionId } = req.params;
      const {
        choice1,
        isCorrect1,
        choice2,
        isCorrect2,
        choice3,
        isCorrect3,
        choice4,
        isCorrect4,
      } = req.body;

      const choice = [
        { question_id: questionId, choice: choice1, is_correct: isCorrect1 },
        { question_id: questionId, choice: choice2, is_correct: isCorrect2 },
        { question_id: questionId, choice: choice3, is_correct: isCorrect3 },
        { question_id: questionId, choice: choice4, is_correct: isCorrect4 },
      ];

      const data = await Choice.bulkCreate(choice);
      res.status(201).json({ message: "Successfully add choice!" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ChoiceController;
