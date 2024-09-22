import React from 'react'
import styles from './ProjectsStyles.module.css';
import handServing from '../../assets/arserve.png';
import finance from '../../assets/finance.png'
import realtors from '../../assets/rwandan_realtor.png';
import portfolio from '../../assets/portfolioseries.png';
import ProjectCard  from '../../common/ProjectCard';



const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>

        <ProjectCard src={handServing} link="arserve.vercel.app" h3="Arserve.com" 
        p=" Business Website for arserve company"/>

<ProjectCard src={finance} link="#" h3="Ikofi" 
 p="Personal finance management platform"/>

<ProjectCard src={portfolio} link="#" h3="Portfolio series" 
 p="portfolio website for people working in various industries."/>

<ProjectCard src={realtors} link="https://benkigaliproperties.com" h3="Ben kigali properties"
 p="Website for Ben real estate."/>


      </div>
      
    </section>
  )
}

export default Projects


