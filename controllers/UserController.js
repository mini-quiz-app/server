require("dotenv").config();
const { User, Quiz, Score } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserController {
  static async login(req, res, next) {
    try {
      const { username, password } = req.body;

      const findUser = await User.findOne({
        where: { username },
      });

      if (findUser) {
        const comparePassword = await bcrypt.compare(
          password,
          findUser.password
        );
        if (comparePassword) {
          const token = jwt.sign(
            {
              id: findUser.id,
              name: findUser.name,
              username: findUser.username,
            },
            process.env.JWT_SECRET,
            { expiresIn: "12h" }
          );
          res.status(200).json({
            token,
            id: findUser.id,
          });
        } else {
          throw { name: "WrongPassword" };
        }
      } else {
        throw { name: "ErrorNotFound" };
      }
    } catch (error) {
      next(error);
    }
  }

  static async myQuizzes(req, res, next) {
    try {
      const { id } = req.userLogged;
      const data = await Quiz.findAll({ where: { user_id: id } });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async userScore(req, res, next) {
    try {
      const { id } = req.userLogged;
      const { quizId, score } = req.body;

      const data = Score.create({
        user_id: id,
        quiz_id: quizId,
        score,
      });
      res.status(201).json({ message: "Successfully Do Task!" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
