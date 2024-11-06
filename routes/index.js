const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Saajith Gnanakanthan Portfolio' });
});

module.exports = router;
