import CertificateTile from "./CertificateTile"

const Certificates = ({link})=>{
    return <div id={link} className="grid grid-cols-2 gap-x-2">
       <CertificateTile url='https://www.hackerrank.com/certificates/27db8654f356' techStack='Javascript' title='Javascript - Basics' desc='HackerRank'/>
        <CertificateTile url='https://www.coursera.org/account/accomplishments/verify/ZRV64EDDCHAU' techStack='' title='Git/Github Certification' desc='Coursera'/>
       <CertificateTile url='https://www.udemy.com/certificate/UC-86ce52a5-e6eb-454e-8710-9b06156965ff/' techStack='Dart | Flutter' title='Flutter/Dart Complete Guide' desc='Udemy'/>
        <CertificateTile url='https://university.mongodb.com/course_completion/c3f23092-2ad0-484c-ad41-9a7f909bb4c5?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing' techStack='MongoDB' title='MongoDb - Basics' desc='Mongo University'/>
    </div>
}

export default Certificates