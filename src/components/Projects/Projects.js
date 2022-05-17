import ProjectTile from "./ProjectTile"

const Projects = ({link})=>{
    return <div id={link}>
        <div className="bg-primary-bg h-24"></div>
       <ProjectTile techStack='Reactjs | Redux | Nodejs | MongoDb | Typescript' title='Gairah-resort' desc='A Resort Management System under development
by using MERN Stack'/>
       <ProjectTile techStack='Reactjs | Context Api' title='Weatherio' desc='Beautiful Weather App which communicates
with Weather Api'/>
<ProjectTile techStack='Reactjs | Context Api' title='DevFinder' desc='App with an aesthetically beautiful UI    to find developers in GitHub with the help of
GitHub API.'/>
<ProjectTile techStack='AngularTs | NodeJs | Internship' title='NodeJs Trainee - CodeLattice' desc='Worked with managing REST APIs with NodeJs'/>
    </div>
}

export default Projects