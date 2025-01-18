import {useState} from 'react'

import {useNavigate} from 'react-router-dom'

const SignUp = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSignUp = e => {
    e.preventDefault()
    alert('User Registered successfull')
  }

  return (
    <form onSubmit={handleSignUp}>
      <h1>Sign Up</h1>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
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
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default SignUp
