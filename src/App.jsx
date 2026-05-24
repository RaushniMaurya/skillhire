import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Jobs from './Jobs'
import Profile from './Profile'
import PostJob from './PostJob'

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="logo"><a href="/">Skill<span>Hire</span></a></h1>
      <div className="nav-links">
        <a href="/jobs">Find Jobs</a>
        <a href="/post-job">Post a Job</a>
        <a href="/" className="nav-signup">Sign Up</a>
      </div>
    </div>
  )
}

function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [city, setCity] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSignUp() {
    if (name && email && password && city) {
      setSubmitted(true)
    } else {
      alert('Please fill all fields!')
    }
  }

  if (submitted) {
    return (
      <div className="container">
        <h1 className="logo">Skill<span>Hire</span></h1>
        <div className="card">
          <div style={{fontSize: "48px", marginBottom: "16px"}}>🎉</div>
          <h2>Welcome, {name}!</h2>
          <p style={{color: "#888", marginTop: "8px", marginBottom: "24px"}}>
            Your account has been created successfully.
          </p>
          <a href="/jobs" style={{
            display: "block",
            background: "#1D9E75",
            color: "white",
            padding: "12px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "500",
            textAlign: "center"
          }}>Browse Jobs →</a>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <h1 className="logo">Skill<span>Hire</span></h1>
      <p className="tagline">Get hired by your skills, not your degree</p>
      <div className="card">
        <h2>Create your account</h2>
        <input type="text" placeholder="Full name" value={name} onChange={e => setName(e.target.value)} />
        <input type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <input type="text" placeholder="City (e.g. Pune, Delhi)" value={city} onChange={e => setCity(e.target.value)} />
        <button onClick={handleSignUp}>Sign Up Free</button>
        <p className="login-link">Already have an account? <span>Log in</span></p>
        <p className="login-link" style={{marginTop: "10px"}}>
          Just browsing? <a href="/jobs" style={{color: "#1D9E75", fontWeight: "500"}}>View Jobs →</a>
        </p>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/post-job" element={<PostJob />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App