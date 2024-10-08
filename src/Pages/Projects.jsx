import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../Component/ProjectCard";

export default function Project(props){
    return(
        <div className="container">
            <div className="title">
            <h1>Project page</h1>
            </div>
            
            <div className="projects-container">
                {
                    projects?.map((item,index) => {
                        return(
                            <ProjectCard key={index} {...item} />
                        )
                    })
                }
                
            </div>
        </div>

        
    )
}