
const ListElements = ({number,title,href,length})=>{
    return <ul className="my-6">
    <li className="">
        <a className="inline-flex items-center transition group" href={href}>
        <span class="text-xs tracking-wide">{number}<div></div></span>
        <span class={length +" inline-block bg-p-grey  h-px mx-6 group-hover:bg-active-text group-hover:transition-all group-hover:duration-500 duration-500 group-hover:w-16 bg-zenith"}></span>
        <span class="text-xs tracking-widest uppercase">{title}</span>
        </a>
    </li>
</ul>
}

export default ListElements