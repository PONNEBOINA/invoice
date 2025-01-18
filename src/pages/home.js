import {useState} from 'react'
import InvoiceList from '../components/invoiceList'

const Home = () => {
  const [invoices, setInvoices] = useState(
    JSON.parse(localStorage.getItem('invoices')) || [],
  )
  return (
    <div>
      <h1>Invoice List</h1>
      <InvoiceList invoices={invoices} />
    </div>
  )
}

export default Home
