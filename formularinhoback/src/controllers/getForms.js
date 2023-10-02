const {getDb} = require('./functions')

const getAllForms = async (req, res) => {
    try {
        let allForms = await getDb()
            res.status(200).send(allForms)
    } catch (error) {
        res.status(500).send(error)
    }
}
const getById = async (req, res)=> {
    try {
        const {id} = req.params
        let allForms = await getAll()
        if(id){
            let idForm = allForms.filter(ele => ele.id == id)
            idForm.length ? res.status(200).send(idForm) : res.status(404).send('Form not found')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
module.exports = {getAllForms, getById}
