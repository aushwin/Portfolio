import {FiExternalLink} from 'react-icons/fi'
const ContactMeTile = ({title,icon,url})=>{
    return <a target='_blank' rel='noreferrer' href={url} className="hover:bg-tile-bg px-3 py-3  h-9  flex gap-x-2 text-active-text items-center">
        <div>{icon}</div>
        <div>{title}</div>
        <div><FiExternalLink className='text-xl'/></div>
    </a>
}

export default ContactMeTile