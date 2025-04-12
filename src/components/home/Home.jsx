import React from 'react'
import '../../assets/styles/home.css'
import Me from '../../assets/avatar-1.svg'
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'
const Home = () => {
  return (
    <section className="home container" id='home'>
      <div className="intro">
        <img src={Me} alt="" className="home_img" />
        <h1 className="home__name">Manikandan</h1>
        <span className="home__education">I'm a Software Developer</span>
        <HeaderSocials/>

        <a href="#contact" className="btn">Hire Me</a>

        <ScrollDown/>
      </div>
      <Shapes/>
    </section>
  )
}

export default Home