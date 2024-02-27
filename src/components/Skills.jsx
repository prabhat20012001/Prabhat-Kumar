import React from 'react'
import skills from "./data/skills.json"
const Skills = () => {
  return (
    <>
      <div className="container skills">
<h1 className='text-center'>SKILLS</h1>
<div className="items" >
{
  skills.map((items)=>{
    return(
      <>

  <div className="item" key={items.id}>
    <img src="" alt="" />
    <h3>{items.title}</h3>
  </div>

      </>
    )
  })
}
  </div>


      </div>

    </>
  )
}

export default Skills
