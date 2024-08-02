import React from 'react'
import styles from './ProjectsStyles.module.css';
import handServing from '../../assets/arserve.png';
import finance from '../../assets/finance.png'
import realtors from '../../assets/rwandan_realtor.png';
import ProjectCard  from '../../common/ProjectCard';


const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>

        <ProjectCard src={handServing} link="https://github.com/AimeKelvin/Arserve" h3="Arserve" 
        p=" Business Website for multi-service company"/>

<ProjectCard src={finance} link="#" h3="Ikofi" 
 p="Personal finance management platform"/>

<ProjectCard src={realtors} link="#" h3="Urban Hub"
 p="Real estate based social app for real estate buyers and sellers"/>


      </div>
      
    </section>
  )
}

export default Projects


