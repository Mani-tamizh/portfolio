import React from 'react'
import '../../assets/styles/services.css'
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 3,
    image: Image3,
    title: "Photography",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
];
const Services = () => {
  return (
    <div className="services container section" id='services'>
      <h2 className="section__title">Services</h2>
      <div className="services__container grid">
        {data.map((data,index)=>{
          return(
            <div className="service__card" key={index}>
              <img src={data.image} alt="" className='services__img'/>
              <h3 className="services__title">{data.title}</h3>
              <p className="services__description">{data.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services