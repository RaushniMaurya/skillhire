import './App.css'
import { useParams } from 'react-router-dom'
const students = {
  riya: {
    name: "Riya Kapoor",
    college: "BMCC · 2nd year",
    city: "Pune, Maharashtra",
    rating: "4.9",
    reviews: 38,
    jobsDone: 24,
    avatar: "RK",
    skills: ["📸 Food Photography", "🎬 Reels editing", "🎨 Styling"],
    portfolio: [
      { id: 1, title: "Biryani shoot for RasoiCo", type: "Food photography", emoji: "🍛" },
      { id: 2, title: "30-sec reel · Café Aromas", type: "Videography", emoji: "🎬" },
      { id: 3, title: "Birthday cake styling", type: "Food styling", emoji: "🎂" },
      { id: 4, title: "Noodle bowl recipe reel", type: "Personal project", emoji: "🍜" },
    ]
  },
  arjun: {
    name: "Arjun Sharma",
    college: "IIT Delhi · 3rd year",
    city: "Delhi",
    rating: "4.7",
    reviews: 22,
    jobsDone: 15,
    avatar: "AS",
    skills: ["💻 Web Development", "⚛️ React", "🎨 UI Design"],
    portfolio: [
      { id: 1, title: "E-commerce website", type: "Web Development", emoji: "🛒" },
      { id: 2, title: "Restaurant booking app", type: "App Development", emoji: "📱" },
      { id: 3, title: "Portfolio website", type: "UI Design", emoji: "🎨" },
      { id: 4, title: "Menu card design", type: "Graphic Design", emoji: "🍽️" },
    ]
  },
  priya: {
    name: "Priya Singh",
    college: "Delhi University · 1st year",
    city: "Delhi",
    rating: "4.8",
    reviews: 15,
    jobsDone: 10,
    avatar: "PS",
    skills: ["🍳 North Indian cooking", "🥘 Meal prep", "🎂 Baking"],
    portfolio: [
      { id: 1, title: "Dal makhani & naan", type: "North Indian cooking", emoji: "🍛" },
      { id: 2, title: "Weekly tiffin service", type: "Meal prep", emoji: "🥡" },
      { id: 3, title: "Birthday cake", type: "Baking", emoji: "🎂" },
      { id: 4, title: "Sunday brunch spread", type: "Cooking", emoji: "🍳" },
    ]
  },
  rahul: {
    name: "Rahul Verma",
    college: "Jadavpur University · 2nd year",
    city: "Kolkata",
    rating: "4.6",
    reviews: 18,
    jobsDone: 12,
    avatar: "RV",
    skills: ["☕ Coffee making", "🍵 Tea prep", "😊 Customer service"],
    portfolio: [
      { id: 1, title: "Latte art collection", type: "Coffee making", emoji: "☕" },
      { id: 2, title: "Weekend barista shifts", type: "Customer service", emoji: "😊" },
      { id: 3, title: "Cold brew preparation", type: "Coffee making", emoji: "🧊" },
      { id: 4, title: "Chai special recipes", type: "Tea making", emoji: "🍵" },
    ]
  },
  meera: {
    name: "Meera Nair",
    college: "Chennai Fine Arts · 3rd year",
    city: "Chennai",
    rating: "4.9",
    reviews: 30,
    jobsDone: 20,
    avatar: "MN",
    skills: ["🎨 Mural art", "✏️ Sketching", "🖼️ Caricature", "🌸 Mehendi"],
    portfolio: [
      { id: 1, title: "Cafe wall mural", type: "Mural art", emoji: "🖼️" },
      { id: 2, title: "Wedding caricatures", type: "Caricature", emoji: "✏️" },
      { id: 3, title: "Bridal mehendi", type: "Mehendi", emoji: "🌸" },
      { id: 4, title: "Portrait sketches", type: "Sketching", emoji: "🎨" },
    ]
  },
  vikram: {
    name: "Vikram Patel",
    college: "Mumbai Hotel Management · 2nd year",
    city: "Mumbai",
    rating: "4.7",
    reviews: 25,
    jobsDone: 18,
    avatar: "VP",
    skills: ["🍽️ Waiter", "🤝 Hospitality", "😊 Customer service", "🧾 Billing"],
    portfolio: [
      { id: 1, title: "Fine dining service · Taj", type: "Hospitality", emoji: "🍽️" },
      { id: 2, title: "Event catering · 200 guests", type: "Event service", emoji: "🎉" },
      { id: 3, title: "Cafe cashier weekends", type: "Billing", emoji: "🧾" },
      { id: 4, title: "Food stall management", type: "Management", emoji: "🏪" },
    ]
  },
  ananya: {
    name: "Ananya Joshi",
    college: "Jaipur Arts College · 2nd year",
    city: "Jaipur",
    rating: "4.8",
    reviews: 20,
    jobsDone: 14,
    avatar: "AJ",
    skills: ["🏺 Pottery", "🧵 Craft", "👩‍🏫 Teaching", "🌸 Mehendi"],
    portfolio: [
      { id: 1, title: "Clay pottery workshop", type: "Pottery", emoji: "🏺" },
      { id: 2, title: "Kids craft class", type: "Teaching", emoji: "👧" },
      { id: 3, title: "Handmade jewellery", type: "Craft", emoji: "💍" },
      { id: 4, title: "Festival mehendi designs", type: "Mehendi", emoji: "🌸" },
    ]
  }
}

function Profile() {
  const { id } = useParams()
  const student = students[id] || students.riya

  return (
    <div className="profile-page">
      <div className="profile-nav">
        <a href="/jobs" className="back-btn">← Back to Jobs</a>
      </div>

      <div className="profile-cover"></div>

      <div className="profile-body">
        <div className="profile-left">
          <div className="profile-card">
            <div className="profile-avatar">{student.avatar}</div>
            <h2>{student.name}</h2>
            <p className="profile-college">{student.college}</p>
            <p className="profile-city">📍 {student.city}</p>

            <div className="profile-stats">
              <div className="stat">
                <span className="stat-num">{student.rating}⭐</span>
                <span className="stat-label">Rating</span>
              </div>
              <div className="stat">
                <span className="stat-num">{student.reviews}</span>
                <span className="stat-label">Reviews</span>
              </div>
              <div className="stat">
                <span className="stat-num">{student.jobsDone}</span>
                <span className="stat-label">Jobs done</span>
              </div>
            </div>

            <div className="profile-skills">
              {student.skills.map(skill => (
                <span className="skill-tag" key={skill}>{skill}</span>
              ))}
            </div>

            <button className="hire-btn">Hire Me</button>
          </div>
        </div>

        <div className="profile-right">
          <h3 className="section-title">My Portfolio</h3>
          <div className="portfolio-grid">
            {student.portfolio.map(item => (
              <div className="portfolio-card" key={item.id}>
                <div className="portfolio-thumb">{item.emoji}</div>
                <div className="portfolio-info">
                  <p className="portfolio-title">{item.title}</p>
                  <p className="portfolio-type">{item.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile