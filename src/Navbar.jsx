import logo from './assets/airbnb-logo.png'
import './Navbar.css'

export default function Navbar() {
    const a = (
      <nav className="navbar">
        <img src={logo} alt="logo" height={40} />
      </nav>)
  return a;
}

