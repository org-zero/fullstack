import React, { useState } from 'react';
import styles from '../../styles/Blog.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCocktail, faCode, faLaptopCode, faLink, faTerminal} from '@fortawesome/free-solid-svg-icons';
const Blog = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  }

  return (
    <div className={isDarkMode ? `${styles.container} ${styles.darkMode}` : styles.container}>
      <button onClick={toggleDarkMode} className={styles.dark_mode}>Dark Mode</button>

 
      <br />  
<div className={styles.header}>
  <h2 className={styles.neon}><FontAwesomeIcon icon={faTerminal} className={styles.fa_terminal} />  Fullstack_Developer</h2>
</div>
<br /><br />
 
<div className={styles.grid}>
  <article className={styles.main}>
    <h1>About Me </h1>
    <p>
    I build things for the web.
I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
Currently, I’m focused on building accessible, human-centered products at Upstatement..

<br /><br />
"I invite you to connect with me through my portfolio website, where refined aesthetics and visionary creativity converge, igniting possibilities for exceptional collaborations." <br /><br />

"Discover a realm of refined craftsmanship and exquisite design as you navigate through my portfolio website. I look forward to connecting with you and discussing how we can bring your vision to life in the most elegant and impactful way possible."
  <br /><br />
  With a strong background in both front-end and back-end technologies, I create robust and user-friendly applications.

My expertise in penetration testing enhances my ability to ensure the security and reliability of the software solutions I develop.
    </p> <br /><br />
    <FontAwesomeIcon icon={faLaptopCode} className={styles.fa_terminal} fontSize={100} /> 
    <FontAwesomeIcon icon={faCode} className={styles.fa_terminal} fontSize={100} /> 
    <FontAwesomeIcon icon={faLaptopCode} className={styles.fa_terminal} fontSize={100} /> 

    <br />
   </article>
  <section className={styles.side}>
    <h1>Hi dude, I`m Aaron &rarr; Fullstack </h1>
    <img src="https://scontent.fsjo12-1.fna.fbcdn.net/v/t39.30808-6/380706497_122093771600053880_6966372062777024508_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=6Adeo3E4sxsAX-VNqb9&_nc_ht=scontent.fsjo12-1.fna&oh=00_AfA6sUO-x9MQHj298O9qVFvYWvEuYV_O7xzhvqwpNSqR3Q&oe=650EC94D" alt="lemua" className={styles.image_me} />
  </section>
</div>

<br /><br />


    </div>
  );
}

export default Blog;
