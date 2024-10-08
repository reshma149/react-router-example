import React from 'react';

export default function About(props) {
    return (
        <div className="container">
            <div className="about-title">
            <h1>About Page</h1>
            </div>

            <div className="desc">
                <p>Dedicated and passionate aspirant Mern Full Stack developer having a solid background in the language. I recently post  graduated with a degree in Master of Computer Application(MCA) from Kalam Technical University (KTU), where I learned in-depth concepts of software development, data structures, algorithms, and object-oriented programming. eager to participate to dynamic development teams and use academic skills in a practical situation, renowned for having a rapid rate of learning. adept problem-solving abilities, and a strong commitment to lifelong learning and career advancement.</p>
            </div>

            <div className="content">
                <div className="user">
                    <img src="myPhoto.jpeg" alt="no user pic" />
                </div>
                <div className="info">
                    <div className="info-title">
                        <h4>Personal details</h4>
                    </div>
                <div className='personal'>
                    <ul className="list">
                        <li>
                            <strong>Email</strong>
                            <span>reshmaunnikrishnan149@gmail.com</span>
                        </li>
                        <li>
                            <strong>Mobile</strong>
                            <span>9526000539</span>
                        </li>
                        <li>
                            <strong>City</strong>
                            <span>Thrissur</span>
                        </li>
                    </ul>


                   <ul className='list'>
                        <li>
                            <strong>Website</strong>
                            <span>www.reshmapu.com</span>
                        </li>  
                        <li>
                            <strong>Degree</strong>
                            <span>Master of Computer Application(MCA)</span>
                        </li>
                        <li>
                            <strong>Status</strong>
                            <span>Fresher</span>
                        </li>
                        
                    </ul>
                   </div>
                </div>
            </div>

            {/* technical details */}
            <div className="info">
                <div className="info-title">
                    <h4>Technogies</h4>
                </div>
                <div className="tech">
                    <ul className="list">
                        <li>
                            <strong>HTML (90%)</strong>
                            <meter id="html" min="0"  max="100" value="90"></meter>
                        </li>
                        <li>
                            <strong>Css (90%)</strong>
                            <meter id="css" min="0"  max="100" value="90"></meter>
                        </li>
                        <li>
                            <strong>JavaScript (90%)</strong>
                            <meter id="javascript" min="0"  max="100" value="90"></meter>
                        </li>
                        <li>
                            <strong>ReactJS (80%)</strong>
                            <meter id="react" min="0"  max="100" value="80"></meter>
                        </li>
                    </ul>

                    <ul className="list">
                        <li>
                            <strong>NodejS (80%)</strong>
                            <meter id="node" min="0"  max="100" value="80"></meter>
                        </li>
                        <li>
                            <strong>ExpressJS (80%)</strong>
                            <meter id="express" min="0"  max="100" value="80"></meter>
                        </li>
                        <li>
                            <strong>MongoDb (90%)</strong>
                            <meter id="mongodb" min="0"  max="100" value="90"></meter>
                        </li>
                        <li>
                            <strong>MySql (90%)</strong>
                            <meter id="mysql" min="0"  max="100" value="90"></meter>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
            

       
    )
}