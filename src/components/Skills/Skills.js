import SkillTile from "./SkillTile"

const Skills = ({link})=>{
    return  <div id={link}>
    <div className="bg-primary-bg h-24"></div>
   <SkillTile techStack='Reactjs | Redux | Nodejs | MongoDb | Typescript' title='Gairah-resort' desc='A Resort Management System under development
by using MERN Stack'/>
   <SkillTile techStack='Reactjs | Context Api' title='Weatherio' desc='Beautiful Weather App which communicates
with Weather Api'/>
<SkillTile techStack='Reactjs | Context Api' title='DevFinder' desc='App with an aesthetically beautiful UI    to find developers in GitHub with the help of
GitHub API.'/>
<SkillTile techStack='AngularTs | NodeJs | Internship' title='NodeJs Trainee - CodeLattice' desc='Worked with managing REST APIs with NodeJs'/>
</div>
}

export default Skills