const path = require('path');
const router = require('express').Router();

// every time we route myaccount, we're going to send myaccount.html
router.get('/myaccount', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/myaccount.html'));
});
  
// every other time, we're going to send index.html
router.get('*', (req, res) => {
res.sendFile(path.join(__dirname, '../public/combat.html'));
});

module.exports = router;