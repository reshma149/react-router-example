import React, { useEffect , useState} from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Home(props){
const [txt,setTxt] = useState('')

    const handler = () => {
        let arr =["FullStack Developer","frontend Developer","MERN Fullstack developer"]
        setTxt(arr[Math.round(Math.random() * 2)])
        }

    useEffect(() => {
        setInterval( handler,1000)
        // clearInterval(function() {
        //     handler()
        // },1000)
    },[])

    return(
        <div className="container">
            <div className="background">
                <div className="name">
                    <h1>Reshma PU</h1>
                    <h3>I'm a <span className="desg"> {txt} </span></h3>
                    <div className="icons">
                        <Link to={`https://github.com/reshma149`} className="link" target="_blank" > <FaGithub/></Link>

                        <Link to={`https://www.facebook.com/reshma.unnikrishnan.710/`} className="link" target="_blank" >
                        <FaFacebook />
                        </Link>
                        

                        <Link to={`https://github.com/reshma149`} className="link" target="_blank" > <FaXTwitter/></Link>


                        <Link to={`https://www.linkedin.com/in/reshma-unnikrishnan-8bab57198/`} className="link" target="_blank" ><FaLinkedin/></Link>

                    </div>
                </div>
                <div className="user-image"></div>
            </div>
        </div>
    )
}