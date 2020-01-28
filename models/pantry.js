module.exports = function(sequelize, DataTypes) {
  var Pantry = sequelize.define("Pantry", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ingredientId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    unitId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Pantry;
};
