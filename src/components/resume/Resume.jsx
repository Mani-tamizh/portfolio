import React from 'react'
import '../../assets/styles/resume.css'
import Data from './Data'
import Card from './Card'
const Resume = () => {
  return (
    <section className="resume container section" id='resume'>
      <h2 className="section__title">Experience</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((data, index)=>{
            if(data.category ==='education'){
              return(
                <Card key={index} icon={data.icon} title={data.title} year={data.year} desc ={data.desc}/>
              )
            }
          })}
        </div>

        <div className="timeline grid">
          {Data.map((data, index)=>{
            if(data.category ==='experience'){
              return(
                <Card key={index} icon={data.icon} title={data.title} year={data.year} desc ={data.desc}/>
              )
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default Resume