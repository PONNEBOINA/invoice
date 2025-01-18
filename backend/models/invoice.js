const mongoose = require('mongoose')

const invoiceSchema = mongoose.Schema({
  invoiceNumber: {
    type: String,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['paid', 'unpaid', 'pending'],
  },
})

module.exports = mongoose.model('Invoice', invoiceSchema)
