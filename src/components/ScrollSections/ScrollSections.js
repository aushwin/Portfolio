
import ListElements from "./ListElements"

const ScrollSections = ()=>{
    console.log(window.location.pathname); //yields: "/js" (where snippets run)
    return <div className="text-p-grey h-1/4">
        <ListElements number='01' length='w-8' title='Projects' href='#projects' />
        <ListElements number='02' length='w-6' title='Certificates' href='#certificates' />
        <ListElements number='03' length='w-4' title='Skills' href='#skill' />
    </div>
}

export default ScrollSections