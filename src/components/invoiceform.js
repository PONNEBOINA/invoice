import {useState} from 'react'

const InvoiceForm = () => {
  const [formData, setFormData] = useState({
    invoiceNumber: '',
    clientName: '',
    amount: '',
    date: '',
    status: 'pending',
  })

  const handleSubmit = e => {
    e.preventDefault()
    const invoices = JSON.parse(localStorage.getItem('invoices')) || []
    invoices.push(formData)
    localStorage.setItem('invoices', JSON.stringify(invoices))
    alert('invoice added successfully')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Invoice</h1>
      <input
        type="text"
        onChange={e =>
          setFormData({...formData, invoiceNumber: e.target.value})
        }
        required
      />
      <input
        type="text"
        onChange={e => setFormData({...formData, clientName: e.target.value})}
        required
      />
      <input
        type="number"
        onChange={e => setFormData({...formData, amount: e.target.value})}
        required
      />
      <input
        type="date"
        onChange={e => setFormData({...formData, date: e.target.value})}
        required
      />
      <select
        onChange={e => setFormData({...formData, status: e.target.value})}
        required
      >
        <option value="">Select Status</option>
        <option value="paid">paid</option>
        <option value="unpaid">unpaid </option>
        <option value="pending">pending </option>
      </select>
      <button type="submit"> Add Invoice</button>
    </form>
  )
}

export default InvoiceForm
