const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./config/db')
const path = require('path')

// Load environment variables
dotenv.config()

// MongoDB connection
connectDB()

// Create rest object
const app = express()

// Middleware
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// Routes
app.use('/api/v1/test', require('./routes/testRoutes'))
app.use('/api/v1/auth', require('./routes/authRoutes'))
app.use('/api/v1/inventory', require('./routes/inventoryRoute'))
app.use('/api/v1/analytics', require('./routes/analyticsRoutes'))
app.use('/api/v1/admin', require('./routes/adminRoutes'))

// Serve static files
app.use(express.static(path.join(__dirname, './client/build')))
//
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

// Define port
const PORT = process.env.PORT || 8080

// Start server
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} Mode On Port ${PORT}`.bgBlue
      .white
  )
})
