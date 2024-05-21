import React from 'react'

const ProjectCard = ({src, link, h3, p}) => {
  return (
<a href={link}>
          <img src={src} className="hover" />
          <h3>{h3}</h3>
          <p>{p}</p>
        </a>
  )
}

export default ProjectCard
