const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../db");

class Country extends Model {}

Country.init(
  {
    countryName: {
      type: DataTypes.STRING,
<<<<<<< HEAD
      unique: true,
    },
  },
=======
      unique: true
  }},
>>>>>>> 417f12825e6856c214ddb4c5180b56a60e8d9a53
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = { Country };
