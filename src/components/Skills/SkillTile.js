import {FaReact} from 'react-icons/fa'

const SkillTile = ({icon,onhover=''}) =>{
    return <article className={onhover +" my-1 bg-tile-bg gap-1 transition-all hover:important  group-hover:opacity-50"}>
    <a className="block p-12 flex items-center justify-center">
        {icon}
    </a>

</article>
}

export default SkillTile


