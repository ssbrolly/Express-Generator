'use strict';
module.exports = (sequelize, DataTypes) => {
  var music = sequelize.define('music', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  music.associate = function(models) {
    // associations can be defined here
  };
  return music;
};