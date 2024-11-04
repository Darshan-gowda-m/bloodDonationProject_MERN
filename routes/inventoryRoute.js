const express = require('express')

const authMiddleware = require('../middlewares/authMiddleware')
const {
  createInventoryController,
  getInventoryController,
} = require('../controllers/inventoryControllers')
const router = express.Router() // Corrected this line

// Add inventory | POST
router.post('/create-inventory', authMiddleware, createInventoryController)

// getting all blood records
router.get('/get-inventory', authMiddleware, getInventoryController)
module.exports = router // This line is already correct
