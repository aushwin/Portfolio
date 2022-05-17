import {Projects,Certificates,Skills} from '../'
const RightPane = ()=>{
    return <div className="scroll h-full overflow-y-scroll group">
        <Projects link="projects"/>
        <div id="certificates" className="bg-primary-bg h-24"></div>
        <Certificates link="certificates" />
        <div className="bg-primary-bg h-24"></div>
        <Skills link="skills" />

    </div>
}

export default RightPane