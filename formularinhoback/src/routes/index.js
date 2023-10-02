const router = require('express').Router();
const { getAllForms } = require('../controllers/getForms');
const { postForms } = require('../controllers/postForms');

router.get('/forms', getAllForms);
router.post('/forms', postForms);
module.exports = router;