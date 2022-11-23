const Test = (sequelize, DataTypes) => {
    const test = sequelize.define('Teste', {
        username: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'test'
    })


    return test
}

export default Test