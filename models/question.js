"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Question.belongsTo(models.Quiz, {
        foreignKey: "quiz_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Question.hasMany(models.Choice, {
        foreignKey: "question_id",
      });
    }
  }
  Question.init(
    {
      quiz_id: DataTypes.INTEGER,
      question: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
