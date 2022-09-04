const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/database')
const port = process.env.PORT || 5000

connectDB()
const app = express()

app.use('/api', require('./routes/apiRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))