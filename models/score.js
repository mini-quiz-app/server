"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Score.belongsTo(models.Quiz, {
        foreignKey: "quiz_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Score.init(
    {
      user_id: DataTypes.INTEGER,
      quiz_id: DataTypes.INTEGER,
      score: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "Score",
    }
  );
  return Score;
};
