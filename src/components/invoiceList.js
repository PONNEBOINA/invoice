import React from 'react'

const InvoiceList = ({invoices}) => (
  <div>
    <h2>Invoice List</h2>
    <table
      border="1"
      style={{width: '100%', textAlign: 'left', borderCollapse: 'collapse'}}
    >
      <thead>
        <tr>
          <th>Invoice Number</th>
          <th>Client Name</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {invoices.length > 0 ? (
          invoices.map(invoice => (
            <tr>
              <td>{invoice.invoiceNumber}</td>
              <td>{invoice.clientName}</td>
              <td>{invoice.date}</td>
              <td>{invoice.amount}</td>
              <td>{invoice.status}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" style={{textAlign: 'center'}}>
              No invoices available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
)

export default InvoiceList
