const ProjectTile = ({techStack,title,desc,url,siteUrl})=>{
    return <article className="my-1 bg-tile-bg transition-all hover:important  group-hover:opacity-50  ">
        <a target='_blank' rel="noreferrer" className={!siteUrl?"block p-12" :"block pt-12 px-12"} href={url}>
        <p className="text-xs font-light tracking-widest uppercase text-active-text">{techStack}</p>
        <h3 className="mt-4 text-2xl font-semibold leading-tight text-active-text" >{title}</h3>
        <p className="mt-4 text-sm text-p-grey">{desc}</p>
        </a>
       { siteUrl&& <a href={siteUrl} target='_blank' rel='noreferrer' className="text-xs font-bold text-active-text px-12 pb-12 block hover:underline hover:transition-all transition-all duration-700">{siteUrl}</a>}



    </article>
}

export default ProjectTile

// "my-8 transition bg-dusk md:group-hover:opacity-50 md:hover:opacity-important md:hover:scale-11/10x