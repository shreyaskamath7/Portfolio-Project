import React from 'react'
import About from './_About'
import Education from './_Education'
import Experience from './_Experience'
import Skills from './_Skills'
import Intrests from './_Intrests'
import Awards from "./_Awards"
const Pagecontent = ({Data}) => {
    //console.log({...Data.Education})
    
    return (
        
        <div className="container-fluid p-0">
            
           <About {...Data.About} Name={Data.Name} Socials={Data.Socials}/>
           <Experience Experience={Data.Experience}/>
            <Education Education={Data.Education}/>
            <Skills/>
            <Intrests/>
            <Awards/>
           
        </div>
    )
}

export default Pagecontent
