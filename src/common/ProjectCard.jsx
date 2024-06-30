import React from 'react'
import styles from '../sections/Hero/HeroStyles.module.css'

const ProjectCard = ({src, link, h3, p}) => {
  return (
<a href={link} target="blank">
          <img src={src} className="hover" />
          <h3>{h3}</h3>
          <p className={styles.description}>{p}</p>
        </a>
  )
}

export default ProjectCard
