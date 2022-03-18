module.exports = (sequelize, DataTypes) => {
    let cols = {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
      },
    };
    
    const Users = sequelize.define("Users", cols, {
        tableName: "Users",
        timestamps: false,
      });

      // no funcionana las relaciones de tablas


      // Users.associate = (models) => {
      //   Users.hasMany(models.Menu,{
      //     onDelete:"cascade",
      //   });
      // }; 

    return Users;
  };