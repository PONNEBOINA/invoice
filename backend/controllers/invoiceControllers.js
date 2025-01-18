const Invoice = require('../models/invoice')

exports.getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find()
    res.status(200).json(invoices)
  } catch (err) {
    res.status(500).json({err: err.message})
  }
}

exports.createInvoice = async (req, res) => {
  try {
    const {invoiceNumer, clientName, date, amount, status} = req.body
    const newInvoice = new Invoice({
      invoiceNumer,
      date,
      amount,
      status,
      clientName,
    })
    await newInvoice.save()
  } catch (err) {
    res.status(500).json({err: err.message})
  }
}

exports.updateInvoice = async (req, res) => {
  try {
    const updatedInvoice = await Invoice.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true},
    )
    if (!updatedInvoice)
      return res.status(404).json({message: 'invoice not found'})
    res.status(200).json(updatedInvoice)
  } catch (err) {
    res.status(500).json({err: err.message})
  }
}

exports.deleteInvoice = async (req, res) => {
  try {
    const deletedInvoice = await Invoice.findByIdAndDelete(req.params.id)
    if (deletedInvoice)
      return res.status(404).json({message: 'invoice not found'})
    res.status(200).json({message: 'invoice successfully deleted'})
  } catch (err) {
    res.status(500).json({err: err.message})
  }
}
