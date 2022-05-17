import {FaReact} from 'react-icons/fa'

const SkillTile = ({icon,onhover=''}) =>{
    return <article className={onhover +" peer my-1 bg-tile-bg gap-1 transition-all hover:important  group-hover:opacity-50"}>
    <a href='#skills' className=" p-12 flex flex-col items-center justify-center" alt='thyru'>
        {icon}
    </a>

</article>
}

export default SkillTile


