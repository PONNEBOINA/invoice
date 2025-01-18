import {useState} from 'react'

import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const hangleLogin = e => {
    e.preventDefault()
    if (email === 'vamshi@gmail.com' && password === 'password') {
      navigate('/Home')
    } else {
      alert('Invalid Credentials')
    }
  }

  return (
    <form onSubmit={hangleLogin}>
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  )
}

export default Login
