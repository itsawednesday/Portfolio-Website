
import ProjectItem from "./ProjectItem";
import ProjectData from "./ProjectData";


// create frame for the projects
const ProjectList = () => {
    return (
      <div className='item-container'>
      <h1 className='project-heading'>My Projects</h1>
  
      <div className='project-container'>

        {/* map method with 2 paramters to get the data from projectdata and passing it to Projects*/}
        {ProjectData.map((val, ind) => {

        
        return(

            <ProjectItem
            key={ind}
            imgsrc={val.imgsrc}
            text={val.text}
            github={val.github}
            title={val.title}/>


        )
            
        })}
     
     
          </div>
          </div>     
  
  
  
  
    )
  }
  
  export default ProjectList
