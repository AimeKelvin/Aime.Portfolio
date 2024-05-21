import React from 'react'
import styles from './ProjectsStyles.module.css';
import Viberr from '../../assets/viberr.png';
import FitLift from '../../assets/fitlift.png';
import Hipster from '../../assets/hipsster.png';
import freshBurger from '../../assets/fresh-burger.png';
import ProjectCard  from '../../common/ProjectCard';


const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>

        <ProjectCard src={Viberr} link="#" h3="YouDoYou" 
        p="Social media app"/>

<ProjectCard src={FitLift} link="#" h3="FitLift" 
 p="Gym companion app"/>

<ProjectCard src={freshBurger} link="#" h3="Fresh Burger"
 p="Restaurent app"/>


      </div>
      
    </section>
  )
}

export default Projects


