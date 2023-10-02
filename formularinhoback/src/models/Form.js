const { DataTypes, BOOLEAN } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('form', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        }, 
        full_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        how_found: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        newsletter_subscription: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        preferred_language: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        start_date: {
            type: DataTypes.STRING,
            allowNull: true,
        },
      },
      {timestamps: true}
      );
    
    };