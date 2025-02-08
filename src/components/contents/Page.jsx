import Experience from './Experience';
import Projects from './Projects';
import SkillsAndTools from './SkillsAndTools';
import About from './About'
import Foot from './Foot'
import Home from './Home'

export default function Page() {
    return (
        <>
            <Home/>
            <About/>
            <Experience/>
            <Projects/>
            <SkillsAndTools/> 
            <Foot/>  
        </>   
    )
}