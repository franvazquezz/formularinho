const {Form} = require("../db")

const getDb = async () => {
    return await Form.findAll()
}
module.exports = {getDb}