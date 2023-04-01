// Requirments for route file.
const express = require('express')
const router = express.Router()

// Get request to render homepage.
router.get('/', (req, res)=> {
    res.render('homepage')
})

// Export the router.
module.exports = router