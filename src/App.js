import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import SignUp from './pages/signup'
import Home from './pages/home'
import InvoiceForm from './components/invoiceform'
import Navbar from './components/navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/invoices" element={<InvoiceForm />} />
      </Routes>
    </Router>
  )
}

export default App
