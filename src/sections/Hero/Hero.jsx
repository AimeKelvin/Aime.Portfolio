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
import CV from '../../assets/My Resume.pdf';
import { useTheme } from '../../common/ThemeContext';
import { TypeAnimation } from 'react-type-animation';

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
            <h1>Shimwa<br />Aime <br />Kelvin 
            </h1>
           
            <div  className={styles.typeAnimation} > 
            <TypeAnimation

sequence={[
  // Same substring at the start will only be typed out once, initially
  'Frontend Developer',
  1000, // wait 1s before replacing "Mice" with "Hamsters"
  'UI/UX Designer',
  1000,
  'React Developer',
  1000,
]}
wrapper="span"
speed={60}

repeat={Infinity}
cursor={false}
/>
            </div>
            <span>
<a href="https://x.com/ShimwaKelvin" target="_blank">
    <img src={twitterIcon} alt="" />
</a>

<a href="https://linkedin.com/in/shimwa-kelvin-4b0630297" target="_blank">
    <img src={linkedinIcon} alt="" />
</a>

<a href="https://github.com/AimeKelvin" target="_blank">
    <img src={githubIcon} alt="" />
</a>
</span>
          <p className={styles.description}>
          Dedicated and  ambitious high school student pursuing a career in Software Development.
           </p>
           <p>Based in Rwanda <sub>RW</sub></p>
            <a href={CV} target='blank'>
                <button className='hover' download>Resume</button>
            </a>
    </div>
    </section>
    );
  }
  
  export default Hero

