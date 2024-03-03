import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({projects}) {
  console.log(projects);
  const proj = projects.map((element)=>{
    return <ProjectItem key = {element.id} technologies={element.technologies} name={element.name} about={element.about}/>
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {proj}
      </div>
    </div>
  );
}

export default ProjectList;
