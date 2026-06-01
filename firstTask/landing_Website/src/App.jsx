import './App.css'
import logoImage from './assets/SEYONOVA et.jpg'

function App() {
  return (
    <div>
      <h1>Seyonova ET technologies</h1>

      <div>
        <p>
          We are a team of passionate developers and designers focused on
          creating innovative solutions for the modern world.
        </p>
      </div>

      <div className="logo-header-wrap">
        <img src={logoImage} alt="Seyonova ET logo" className="logo-header" />
      </div>

      <div className="services-section">
        <h2>Our services</h2>
        <ul className="service-list">
          <li>Web development</li>
          <li>MERN stack development</li>
        </ul>
      </div>

      <div>
        <h2>Contact us</h2>
        <p>Any questions? Feel free to reach out to us!</p>
        <a href="mailto:info@seyonova.com">Email Us</a>
      </div>
    </div>
  )
}

export default App
 