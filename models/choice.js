"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Choice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Choice.belongsTo(models.Question, {
        foreignKey: "question_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Choice.init(
    {
      question_id: DataTypes.INTEGER,
      choice: DataTypes.STRING,
      is_correct: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Choice",
    }
  );
  return Choice;
};
