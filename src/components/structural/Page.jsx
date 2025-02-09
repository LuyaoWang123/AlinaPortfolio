import Experience from '../contents/Experience';
import Projects from '../contents/Projects';
import SkillsAndTools from '../contents/SkillsAndTools';
import About from '../contents/About'
import Foot from '../contents/Foot'
import Home from '../contents/Home'

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