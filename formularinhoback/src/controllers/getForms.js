const {getDb} = require('./functions')

const getAllForms = async (req, res) => {
    try {
        let allForms = await getDb()
            res.status(200).send(allForms)
    } catch (error) {
        res.status(500).send(error)
    }
}
module.exports = {getAllForms}
