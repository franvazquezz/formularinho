const {Form} = require('../db');
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
        let allForms = await getDb()
        if(id){
            let idForm = allForms.find(ele => ele.id == id)
            idForm ? res.status(200).send(idForm) : res.status(404).send('Form not found')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const putById = async (req, res) => {
    try {
      const { id } = req.params;
      const { full_name, how_found, newsletter_subscription, phone_number, preferred_language, start_date } = req.body;
  
      // Verificar si el formulario con el ID dado existe
      const existingForm = await Form.findByPk(id);
  
      if (existingForm) {
        // Actualizar los campos del formulario existente
        existingForm.full_name = full_name;
        existingForm.how_found = how_found;
        existingForm.newsletter_subscription = newsletter_subscription;
        existingForm.phone_number = phone_number;
        existingForm.preferred_language = preferred_language;
        existingForm.start_date = start_date;
  
        // Guardar el formulario actualizado en la base de datos
        await existingForm.save();
  
        res.status(200).send('Form has been updated successfully');
      } else {
        res.status(404).send('Form not found');
      }
    } catch (error) {
      console.error('Error updating form:', error);
      res.status(500).send('Failed to update form');
    }
};
  
module.exports = {getAllForms, getById, putById}
