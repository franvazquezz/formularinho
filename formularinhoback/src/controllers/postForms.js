const {Form} = require('../db');

const postForms = async (req, res) =>{
    try {
        const {full_name, how_found, newsletter_subscription, phone_number, preferred_language, start_date} = req.body
        if(!full_name || !how_found || !phone_number || !preferred_language)return res.status(400).send('Missing data');
        const newFormRaw = {
            full_name,
            how_found,
            newsletter_subscription,
            phone_number,
            preferred_language,
            start_date,
        }
        const newFormDB = await Form.create(newFormRaw);
        console.log('form', newFormDB);
        res.status(200).send(`Form has been sent successfully`);
    } catch (error) {
        res.status(500).send('Failed post');
    }
}

module.exports = {postForms}