import CertificateTile from "./CertificateTile"

const Certificates = ({link})=>{
    return <div id={link} className="grid grid-cols-2 gap-x-2">
       <CertificateTile techStack='Javascript' title='Javascript - Basics' desc='HackerRank'/>
        <CertificateTile techStack='' title='Git/Github Certification' desc='Coursera'/>
       <CertificateTile techStack='Dart | Flutter' title='Flutter/Dart Complete Guide' desc='Udemy'/>
        <CertificateTile techStack='MongoDB' title='MongoDb - Basics' desc='Mongo University'/>
    </div>
}

export default Certificates