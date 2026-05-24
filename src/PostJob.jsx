import './App.css'
import { useState } from 'react'

function PostJob() {
  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')
  const [location, setLocation] = useState('')
  const [pay, setPay] = useState('')
  const [type, setType] = useState('Part-time')
  const [skills, setSkills] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handlePost() {
    if (title && company && location && pay && skills) {
      const newJob = {
        id: Date.now(),
        title,
        company,
        location,
        pay,
        type,
        skills: skills.split(',').map(s => s.trim()),
        profile: "riya"
      }
      const existing = JSON.parse(localStorage.getItem('postedJobs') || '[]')
      existing.push(newJob)
      localStorage.setItem('postedJobs', JSON.stringify(existing))
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
          <h2>Job Posted!</h2>
          <p style={{color: "#888", marginTop: "8px", marginBottom: "24px"}}>
            Your job listing is now live. Students will start applying soon!
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
          }}>View all jobs →</a>
          <a href="/post-job" style={{
            display: "block",
            marginTop: "10px",
            color: "#1D9E75",
            textAlign: "center",
            textDecoration: "none",
            fontWeight: "500"
          }}>Post another job</a>
        </div>
      </div>
    )
  }

  return (
    <div className="container" style={{maxWidth: "520px"}}>
      <h1 className="logo">Skill<span>Hire</span></h1>
      <p className="tagline">Post a job & find skilled students</p>

      <div className="card">
        <h2>Post a Job</h2>

        <label className="input-label">Job title</label>
        <input
          type="text"
          placeholder="e.g. Food Photographer, Home Cook"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <label className="input-label">Company / Your name</label>
        <input
          type="text"
          placeholder="e.g. RasoiCo or Sharma Family"
          value={company}
          onChange={e => setCompany(e.target.value)}
        />

        <label className="input-label">City</label>
        <select
          className="city-select"
          style={{width: "100%", marginBottom: "14px"}}
          value={location}
          onChange={e => setLocation(e.target.value)}
        >
          <option value="">Select city</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Chennai">Chennai</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Indore">Indore</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Remote">Remote</option>
        </select>

        <label className="input-label">Pay</label>
        <input
          type="text"
          placeholder="e.g. ₹300/hr or ₹8,000/mo"
          value={pay}
          onChange={e => setPay(e.target.value)}
        />

        <label className="input-label">Job type</label>
        <select
          className="city-select"
          style={{width: "100%", marginBottom: "14px"}}
          value={type}
          onChange={e => setType(e.target.value)}
        >
          <option value="Part-time">Part-time</option>
          <option value="Freelance">Freelance</option>
          <option value="Weekend only">Weekend only</option>
          <option value="Weekend gig">Weekend gig</option>
        </select>

        <label className="input-label">Skills needed</label>
        <input
          type="text"
          placeholder="e.g. Cooking, Photography, Drawing"
          value={skills}
          onChange={e => setSkills(e.target.value)}
        />

        <button onClick={handlePost}>Post Job Free</button>
      </div>
    </div>
  )
}

export default PostJob