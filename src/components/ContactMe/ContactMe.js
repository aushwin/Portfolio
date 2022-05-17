import Avatar from '../../Assets/Image/avatar.png'
import ContactMeTile from './ContactMeTile'
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa'
import {BiMailSend} from 'react-icons/bi'
const ContactMe = ()=>{
    return <div className=" mt-auto mb-20 flex gap-10 items-center">
        <img className='rounded-full w-16 h-16' alt='avatar' src={Avatar}/>
        <ContactMeTile url='https://github.com/aushwin' title='Github' icon={<FaGithubSquare className='text-xl'/>}/>
        <ContactMeTile url='https://www.linkedin.com/in/aushwin/' title='Linkedin' icon={<FaLinkedin className='text-xl text-blue-500'/>}/>
        <ContactMeTile url='mailto:aushwin7biju@gmail.com' title='Gmail' icon={<BiMailSend className='text-xl text-red-500'/>}/>
        

    </div>
}

export default ContactMe