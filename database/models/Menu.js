
module.exports =  (sequelize, dataTypes) => {

    let alias = "Menu";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        item: {
            type: dataTypes.STRING
        },
        type: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        },
        score: {
            type: dataTypes.INTEGER
        },
        discount: {
            type: dataTypes.INTEGER
        },
        boughts: {
            type: dataTypes.INTEGER
        },
        dish: {
            type: dataTypes.STRING
        },
        isTopPlate: {
            type: dataTypes.BOOLEAN
        },
    };
    let config = {
        tableName: "Menu",
        timestamps: false
    }

    const Menu = sequelize.define(alias, cols, config);

    return Menu;
}

