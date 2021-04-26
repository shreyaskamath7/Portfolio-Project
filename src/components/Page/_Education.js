import React from 'react'

const Education = ({Education}) => {
    console.log({Education}["Education"][0])
    return (
        <>
        {/* <!-- Education--> */}
        <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    { Object.keys({Education}["Education"]).map(role=>(
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">{{Education}["Education"][role]["Degree"]}</h3>
                            <div className="subheading mb-3">{{Education}["Education"][role]["Branch"]}</div>
                            <div>{{Education}["Education"][role]["University"]}</div>
                            <p>{{Education}["Education"][role]["Description"]}</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">{{Education}["Education"][role]["Dates"]}</span></div>
                    </div>
                    ))}
                </div>
            </section>
            <hr className="m-0" />
        
        </>
    )
}

export default Education
