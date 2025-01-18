const express = require('express')
const mongoose = require('mongoose')
const invoiceRouters = require('./Routes/invoiceRoutes')
const db = require('./config/database')
require('dotenv').config()
const app = express()
app.use(express.json())
app.use('/api/invoices', invoiceRouters)
app.listen(3000, () => {
  console.log('listning')
})

db()
