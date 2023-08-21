import photoGrid from './assets/photo-grid.png'
import './About.css'
const About = () => {
  return (
    <div className='about'>
        <img src={photoGrid} alt="photos"  />
        <h1>Online Experiences</h1>
        <p>Join unique interactive activites led by one-of-a-kind hosts-all without leaving home</p>
    </div>
  )
}

export default About