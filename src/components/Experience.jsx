import React from 'react'
import experience from "../components/data/experience.json"
const Experience = () => {
  return (
    <div className='container ex '>
      <h1 className='text-center'>  EXPERIENCE </h1>
      {experience.map((item)=>{
        return(
            <>
            <div className="ex-items text-center">
<div className="left">
    <img src="" alt="" />
</div>

<div className="right">
    <h2>{item.role}</h2>
    <h4> <span style={{color:'yellowgreen'}}>{item.startDate} {item.endDate} </span><span style={{color:'yellow'}}>{item.location}</span></h4>
    <h5 style={{color:'yellow'}}>{item.experiences[0]}</h5>
    <h5 style={{color:'yellow'}}>{item.experiences[1]}</h5>

</div>



            </div>
            
            
            
            </>
        )
      })}
    </div>
  )
}

export default Experience
