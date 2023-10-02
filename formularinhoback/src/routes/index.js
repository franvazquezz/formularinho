const router = require('express').Router();
const { getAllForms, getById } = require('../controllers/getForms');
const { postForms } = require('../controllers/postForms');

router.get('/forms', getAllForms);
router.get('/forms/:id', getById);
router.post('/forms', postForms);

module.exports = router;