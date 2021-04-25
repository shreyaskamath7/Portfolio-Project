import React from 'react'

const Experience = ({Experience}) => {
    // console.log({Experience}["Experience"][0]["Role"])
    //  Object.keys({Experience}["Experience"]).map(role=>(
    //     console.log({Experience}["Experience"][role])))
    return (
        <>
         {/* <!-- Experience--> */}
         <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
                   { Object.keys({Experience}["Experience"]).map(role=>(
                    
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5" >
                        <div className="flex-grow-1">
                            <h3 className="mb-0" key={{Experience}["Experience"][role]["Role"]}>{{Experience}["Experience"][role]["Role"]}</h3>
                            <div className="subheading mb-3" key={{Experience}["Experience"][role]["Company"]}>{{Experience}["Experience"][role]["Company"]}</div>
                            <p>{{Experience}["Experience"][role]["Description"]}</p>
                        </div>
                        <div className="flex-shrink-0" key={{Experience}["Experience"][role]["Dates"]}><span className="text-primary">{{Experience}["Experience"][role]["Dates"]}</span></div>
                    </div>
                    )) }
                   
                </div>
            </section>
            <hr className="m-0" />
        </>
    )
}

export default Experience
