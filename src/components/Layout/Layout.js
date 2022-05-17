
const Layout = (props)=>{
    return <div className="lg:w-9/12 h-full m-auto flex" >
        <div className="lg:w-full">
            {props.children[0]}
        </div>
        <div className="lg:w-full">
            {props.children[1]}
        </div>
    </div>
}

export default Layout
