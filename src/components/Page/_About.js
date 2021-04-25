import React from 'react'

const socialIcon={

    LinkedIn:"fab fa-linkedin-in",
    Twitter:"fab fa-twitter",
    Facebook:"fab fa-facebook-f",
    GitHub:"fab fa-github",
    Instagram:"fab fa-instagram"
}





const About = ({Name,
    Location,
    Phone,
    Email,
    Description,Socials}) => {
    return (
        <>
         {/* <!-- About--> */}
         <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        {Name.split(" ")[0]}
                        <span className="text-primary"> {Name.split(" ")[1]}</span>
                    </h1>
                    <div className="subheading mb-5">
                        {Location} · {Phone} 
                        <a href="mailto:name@email.com"> {Email}</a>
                    </div>
                    <p className="lead mb-5">{Description}</p>
                    <div className="social-icons">
                        
                        {Object.keys(Socials).map(social=>(
                            Socials[social]&&(
                            <a className="social-icon" href={Socials[social]} key={social}><i className={socialIcon[social]}></i></a>
                        )))}
                        
                        
                    </div>
                </div>
            </section>
            <hr className="m-0" />

        </>
    )
}

export default About
