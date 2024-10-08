import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact(props){
    return(
        <div className="container">
            <h1>Contact</h1>

            <div className="contact-container">
                <div className="left">
                    <div className="info">
                        <h3>Address</h3>
                        </div>
                    <ul className="list">
                        <li>
                            <strong>Email</strong>
                            <span>Reshmaunnikrishnan149@gmail.com</span>
                        </li>
                        <li>
                            <strong>Mobile</strong>
                            <span>9526000539</span>
                        </li>
                        <li>
                            <strong>Address</strong>
                            <address>Panthayil H.O ,<br /> Anjoor P.O, <br />Cheruvathani-Kunnamkulam. <br /> Thrissur,Kerala.</address>
                        </li>

                    </ul>


                    <div className="info">
                        <h3>Social Media Links</h3>
                    </div>
                    <div className="icons">
                    <Link to={`https://github.com/reshma149`} className="link" target="_blank" > <FaGithub/></Link>

<Link to={`https://www.facebook.com/reshma.unnikrishnan.710/`} className="link" target="_blank" >
<FaFacebook />
</Link>


<Link to={`https://github.com/reshma149`} className="link" target="_blank" > <FaXTwitter/></Link>


<Link to={`https://www.linkedin.com/in/reshma-unnikrishnan-8bab57198/`} className="link" target="_blank" ><FaLinkedin/></Link>
                    </div>
                </div>

                <div className="right">
                    <form autoComplete="off">
                        <fieldset>
                            <legend className="form-title">Contact Me</legend>
                            <div className="input-item">
                                <label htmlFor="name" id="name" required>Name</label>
                                <input type="text" name="name" id="name" className="form-input"/>
                            </div>

                            <div className="input-item">
                                <label htmlFor="email" id="name">Email</label>
                                <input type="email" name="email" id="email" className="form-input" required/>
                            </div>
                            <div className="input-item">
                                <label htmlFor="msg" id="msg">Message</label>
                                <textarea name="msg" id="msg" className="form-input" cols={30} rows={6} required></textarea>
                            </div>
                            <div className="input-item">
                                <input type="submit" value="send" className="btn success" />
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
        
    )
}