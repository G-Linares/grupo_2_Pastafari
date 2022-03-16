module.exports = (sequelize, DataTypes) => {
    let cols = {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      user_name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      img: {
        type: DataTypes.STRING,
      },
    };
  
    const Users = sequelize.define("Users", cols, {
        tableName: "Users",
        timestamps: false,
      });
  
    return Users;
  };