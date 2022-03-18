// solo es una prueba para ver que puedo enlazar la base de detos y hacerla relacional

module.exports = (sequelize, DataTypes) => {

    const Menu = sequelize.define("Menu", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        item: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        score: {
            type: DataTypes.INTEGER
        },
        discount: {
            type: DataTypes.INTEGER
        },
        boughts: {
            type: DataTypes.INTEGER
        },
        dish: {
            type: DataTypes.STRING
        },
        isTopPlate: {
            type: DataTypes.BOOLEAN
        },
    }, {
        tableName: "Menu",
        timestamps: false
    });

    // Menu.associate = (models) => {
    //     Menu.hasOne(models.Users,{
    //       onDelete:"cascade",
    //     });
    //   }; 

    return Menu;

}