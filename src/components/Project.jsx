import React from 'react';
import project from "./data/projects.json";

const Project = () => {
  return (
    <div className="container projects my-3">
      <h1 className='text-center'>PROJECTS</h1>
      <div className='row d-flex justify-content-center align-content-center'>
        {project.map((item) => {
          return (
            <div key={item.id} className='my-4 col-md-4 col-lg-3 col-sm-6 mx-4'>
              <div className="card bg-dark text-light" style={{width: "18rem",border:'2px solid yellow',borderRadius:"10px",boxShadow:"5px 5px 10px 10px rgba(101,175,10,0.5)"}}>

                {/* Replace "..." with the actual image source */}
                <div className='img d-flex justify-content-center align-content-center p-3'>

                <img src="..." className="card-img-top   " alt="..." style={{width:"250px",height:"200px",border:'2px solid yellow',borderRadius:"10px"}}/>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <a href={item.demo} className="btn btn-primary mx-3">Demo</a>
                  <a href={item.source} className="btn btn-warning">Code</a>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
