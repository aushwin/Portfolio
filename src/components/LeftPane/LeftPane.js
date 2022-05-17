import {AboutMe, ScrollSections, ContactMe} from '../'
const LeftPane =() =>{
    
    return <div className="text-white  h-full lg:w-4/5 lg:mx-auto pt-24 flex flex-col gap-9">
        <AboutMe/>
        <ScrollSections />
        <ContactMe />
    </div>
}

export default LeftPane