const SkillTile = ({techStack,title,desc}) =>{
    return <article className="my-1 bg-tile-bg transition-all hover:important  group-hover:opacity-50  ">
    <a className="block p-12">
    <p className="text-xs font-light tracking-widest uppercase text-active-text">{techStack}</p>
    <h3 className="mt-4 text-2xl font-semibold leading-tight text-active-text">{title}</h3>
    <p className="mt-4 text-sm text-p-grey">{desc}</p>
    </a>

</article>
}

export default SkillTile