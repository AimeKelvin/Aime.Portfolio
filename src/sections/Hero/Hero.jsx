import styles from './HeroStyles.module.css';
import heroImg from '../../assets/avatar.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Kelvin_resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
const { theme, toggleTheme} = useTheme();
const themeIcon = theme ==='light' ? sun : moon;
const twitterIcon = theme ==='light' ? twitterLight : twitterDark;
const githubIcon = theme ==='light' ? githubLight : githubDark;
const linkedinIcon = theme ==='light' ? linkedinLight : linkedinDark;
    return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img id="image-me" src={heroImg} className={styles.hero}
            alt="Profile picture of Aime Kelvin" /> 
    
            <img className={styles.colorMode} src={themeIcon} 
            alt="color mode icon" onClick={toggleTheme} />
        </div>
        <div className={styles.info}>
            <h1>Aime <br />
            Kelvin
            </h1>
            <h2>Frontend Developer</h2>
            <span>
<a href="https://twitter.com/" target="_blank">
    <img src={twitterIcon} alt="" />
</a>

<a href="https://linkedin.com/" target="_blank">
    <img src={linkedinIcon} alt="" />
</a>

<a href="https://github.com/" target="_blank">
    <img src={githubIcon} alt="" />
</a>
</span>
          <p className={styles.description}>
          Dedicated and  ambitious high school student 👨🏽‍🦱&zwj;💻 pursuing a career in Software Development with a strong foundation in frontend development. A talented self-taught developer proficient in handling daily assignments and eager to tackle any challenge. Quick to identify and bridge knowledge gaps, consistently adding value to both employer and team.
           </p>
           <p>Based in Rwanda <sub>RW</sub></p>
            <a href={CV} >
                <button className='hover' download>Resume</button>
            </a>
    </div>
    </section>
    );
  }
  
  export default Hero

