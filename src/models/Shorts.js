module.exports = ( sequelize, DataTypes ) => {
    const Shorts = sequelize.define('Shorts', {
        title: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
        pictures: DataTypes.STRING,
        size: DataTypes.STRING,
        category: DataTypes.STRING,
        price: DataTypes.STRING,
        
    })
    return Shorts
}