import './App.css'
import { useState } from 'react'

function Jobs() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')
  const [city, setCity] = useState('All')
  const savedJobs = JSON.parse(localStorage.getItem('postedJobs') || '[]')

  const jobs = [
    { id: 1, title: "Food Photographer", company: "RasoiCo", location: "Bangalore", pay: "₹400-600/hr", skills: ["Photography", "Reels editing"], type: "Freelance", profile: "riya" },
    { id: 2, title: "Home Cook", company: "Sharma Family", location: "Delhi", pay: "₹8,000/mo", skills: ["Cooking", "Meal prep"], type: "Part-time", profile: "priya" },
    { id: 3, title: "Art Teacher for Kids", company: "ArtPlay Centre", location: "Pune", pay: "₹300/hr", skills: ["Painting", "Sketching"], type: "Part-time", profile: "meera" },
    { id: 4, title: "Web Developer", company: "Tech Solutions", location: "Kolkata", pay: "₹500/hr", skills: ["Web Development", "JavaScript"], type: "Freelance", profile: "arjun" },
    { id: 5, title: "Chef Assistant", company: "Spice Garden Restaurant", location: "Mumbai", pay: "₹250/hr", skills: ["Cooking", "Kitchen management"], type: "Part-time", profile: "priya" },
    { id: 6, title: "Tandoor Chef", company: "Punjabi Dhaba", location: "Delhi", pay: "₹12,000/mo", skills: ["Cooking", "Tandoor", "North Indian food"], type: "Part-time", profile: "priya" },
    { id: 7, title: "Cafe Barista", company: "Brew & Bean Cafe", location: "Bangalore", pay: "₹180/hr", skills: ["Coffee making", "Customer service"], type: "Part-time", profile: "rahul" },
    { id: 8, title: "Waiter / Floor Staff", company: "The Urban Plate", location: "Pune", pay: "₹150/hr", skills: ["Customer service", "Communication"], type: "Part-time", profile: "vikram" },
    { id: 9, title: "Cafe Helper & Cashier", company: "Chai Sutta Cafe", location: "Indore", pay: "₹8,000/mo", skills: ["Billing", "Customer service", "Tea making"], type: "Part-time", profile: "rahul" },
    { id: 10, title: "Street Food Stall Helper", company: "Sharma Chaat Corner", location: "Jaipur", pay: "₹120/hr", skills: ["Cooking", "Food prep"], type: "Weekend only", profile: "priya" },
    { id: 11, title: "Mural & Wall Artist", company: "Creative Spaces Studio", location: "Hyderabad", pay: "₹500/hr", skills: ["Painting", "Mural art", "Sketching"], type: "Freelance", profile: "meera" },
    { id: 12, title: "Caricature Artist", company: "FunArt Events", location: "Chennai", pay: "₹3,000/event", skills: ["Sketching", "Caricature", "Portrait"], type: "Weekend gig", profile: "meera" },
    { id: 13, title: "Mehendi Artist", company: "Bridal Bliss", location: "Jaipur", pay: "₹2,500/event", skills: ["Mehendi", "Bridal art"], type: "Freelance", profile: "ananya" },
    { id: 14, title: "Pottery & Craft Instructor", company: "Mitti Cafe", location: "Bangalore", pay: "₹400/hr", skills: ["Pottery", "Craft", "Teaching"], type: "Part-time", profile: "ananya" },
    { id: 15, title: "Graphic Designer for Menu Cards", company: "Foodie Hub Restaurant", location: "Remote", pay: "₹5,000/project", skills: ["Graphic design", "Canva", "Illustration"], type: "Freelance", profile: "arjun" },
    ...savedJobs  ]

  const filtered = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(search.toLowerCase()))
    const matchesFilter = filter === 'All' || job.type === filter
    const matchesCity = city === 'All' || job.location === city
    return matchesSearch && matchesFilter && matchesCity
  })

  return (
    <div className="jobs-page">
      <div className="jobs-container">
        <h2>Find jobs by skill</h2>
        <p className="jobs-sub">Part-time & freelance jobs for students across India</p>

        <input
          className="search-input"
          type="text"
          placeholder="Search by skill or job title..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <div className="filter-buttons">
          {['All', 'Part-time', 'Freelance', 'Weekend only', 'Weekend gig'].map(type => (
            <button
              key={type}
              className={filter === type ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter(type)}
            >{type}</button>
          ))}
        </div>

        <select
          className="city-select"
          value={city}
          onChange={e => setCity(e.target.value)}
        >
          <option value="All">All Cities</option>
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

        <div className="jobs-list">
          {filtered.length === 0 ? (
            <p className="no-results">No jobs found!</p>
          ) : (
            filtered.map(job => (
              <div className="job-card" key={job.id}>
                <div className="job-top">
                  <div>
                    <h3>{job.title}</h3>
                    <p className="job-company">{job.company} · {job.location}</p>
                  </div>
                  <span className="job-pay">{job.pay}</span>
                </div>
                <div className="job-skills">
                  {job.skills.map(skill => (
                    <span className="skill-tag" key={skill}>{skill}</span>
                  ))}
                  <span className="job-type">{job.type}</span>
                </div>
                <div style={{display: "flex", alignItems: "center", gap: "16px"}}>
                  <button className="apply-btn">Apply with skills →</button>
                  <a href={`/profile/${job.profile}`} className="view-profile-link">View profile</a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Jobs