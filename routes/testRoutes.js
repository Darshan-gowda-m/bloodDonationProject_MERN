const express = require('express');
const { testController } = require('../controllers/testController');

// Create a router object
const router = express.Router();

// Define the root route
router.get("/", testController);

// Define the /host route
router.get("/host", (req, res) => {
    res.json({ message: 'Host endpoint reached!' });
});

// Export the router
module.exports = router;
