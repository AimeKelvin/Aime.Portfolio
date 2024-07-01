import React from 'react'
import styles from './AboutStyles.module.css'

const About = () => {
  let more = document.getElementById("more");
function readMore(){
  more.style.display = "block";
}

let readMoreButton = document.getElementById("readMoreButton");
readMoreButton.onclick = readMore();

  return (
    <div className={styles.container}>
        <h1>About me 👨🏽‍🦱</h1>
    <p className={styles.info}>
    Dedicated and  ambitious high school student pursuing a career
     in Software Development with a strong foundation in frontend 
     development. A talented self-taught developer proficient in
     handling daily assignments and eager to tackle any challenge.
     Quick to identify and bridge knowledge gaps, consistently
     adding value to both employer and team.
     </p>
     <div id="more" className={styles.more}>
<p className={styles.info}>
     I have successfully completed a variety of graphic design projects 
     for clients, encompassing logos, websites, and marketing materials, 
     which are showcased in my portfolio for prospective clients. My expertise
      extends to developing user-friendly website interfaces using HTML, CSS, and
       JavaScript, ensuring optimal performance through thorough testing across 
       multiple browsers and platforms. I stay current with emerging technologies,
      frameworks, and libraries to support the creation of high-level products. My
      skills in implementing responsive web designs guarantee optimal viewing on various
      devices. Additionally, I utilize version control systems like Git to enhance teamwork 
      and efficient code management, and I collaborate closely with team members to ensure
       seamless integration of design and development efforts.
    </p>
    <p className={styles.info}>
    I am passionate about a diverse range of hobbies that enrich both my personal and professional life. I enjoy gaming, which hones my strategic thinking and problem-solving skills. Playing basketball allows me to stay active and work effectively in a team environment, enhancing my collaboration and communication abilities. I value socializing with friends, which not only strengthens my interpersonal skills but also fosters a supportive network. Additionally, my interest in cyber security and programming drives my curiosity and dedication to staying updated with the latest technological advancements, continuously improving my technical expertise and analytical capabilities.
     </p>
     </div>
    <div className={styles.buttonSpace}>
    <button id="readMoreButton">Read more</button>
    </div>
    </div>
    
  )
}

export default About