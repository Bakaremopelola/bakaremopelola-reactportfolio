
import React, { useEffect } from 'react';
import Logo from "../assets/favicon/favicon.ico";   
import Lola from '../assets/project/lola.jpg';
import Lola2 from '../assets/project/lola2.jpg';
import Sun from "../assets/sun.svg";
import Moon from "../assets/moon.svg";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub, FaGlobe } from 'react-icons/fa';
import { FaLink} from 'react-icons/fa';



const Index = () => {
  useEffect(() => {
     const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    const mobileMenu = () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    };

    hamburger.addEventListener("click", mobileMenu);

    const navLink = document.querySelectorAll(".nav-link");
    navLink.forEach((n) => n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }));

    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    const switchTheme = (e) => {
      const theme = e.target.checked ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    };

    toggleSwitch.addEventListener("change", switchTheme); 

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
      toggleSwitch.checked = currentTheme === "dark";
    }

    const myDate = document.querySelector("#datee");
    const year = new Date().getFullYear();
    myDate.innerHTML = year;

    return () => {
      hamburger.removeEventListener("click", mobileMenu);
      navLink.forEach((n) => n.removeEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      }));
      toggleSwitch.removeEventListener("change", switchTheme);
    };
  }, []);

  const projects = [
    {
      id: "Project One",
      title: "healthcare-system",
      tools: "React, CSS",
      description: "I used javascript language with React framework",
      githubLink: "https://github.com/Bakaremopelola/healthcare-system", 
      websiteLink: "https://healthcare-system-jet.vercel.app" 
    },
    {
      id: "Project Two",
      title: "Pinabyte",
      tools: "React, CSS",
      description: "HTML,CSS,JAVASCRIPT",
      githubLink: "https://github.com/Bakaremopelola/pinabyte", 
      websiteLink: "https://pinabyte.vercel.app" 
    },
    {
      id: "Project Three",
      title: "E-commerce Webpage",
      tools: "React, CSS",
      description: "React,JAVASCRIPT,HTML,CSS",
      githubLink: "https://github.com/Bakaremopelola/Hng-stage2", 
      websiteLink: "https://hng-stage2-iota.vercel.app", 
    }
  ];
  

    

  return (
    <> 
      <div>
        <header id="hero">

          <nav className="navbar">
            <div className="container">
              <h1 id="logo">
                <a href="">
                  <img src={Logo} alt="Your Logo" />
                </a>
              </h1>
              <ul className="nav-menu">
                <li><a className="nav-link" href="#projects">PROJECTS</a></li>
                <li><a className="nav-link" href="#">CONTACT</a></li>
                <li><a className="nav-link" href="#About">ABOUT</a></li>
                <li>
                <button className="nav-link btn btn-primary"> 
                 <a href="https://purple-janean-21.tiiny.site" target="_blank" > RESUME</a><i className="fas fa-arrow-right"></i></button>
                </li>


                <div className="theme-switch">
                  <input type="checkbox" id="switch" />
                  <label className="toggle-icons" htmlFor="switch">
                    <img className="moon" src={Moon} />
                    <img className="sun" src={Sun}/>
                  </label>
                </div>

              </ul>
              <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </div>
          </nav>

          <section className="header-container">
            <img className="profile-image" src={Lola} alt="Profile" />
            <h1>Hi I'm Mopelola</h1>

            <div className="content-text">
              <h2>Building digital</h2>
              <h2>products, brands, and experience.</h2>

              <p>
                A Frontend Developer and Visual Designer with experience in web
                design, and product design.
              </p>
            </div>
            <a href="https://wa.me/qr/JE4PQKZL7PKCN1 " className="btn btn-secondary" target="_blank">Connect With Me</a>
          </section>
        </header>


        <section id="About">
          <img className="profile-image" src={Lola2} alt="Profile" />
          <div className="aboutstory">
            <p>Mopelola Bakare is a skilled MERN stack developer, adept at crafting dynamic web applications using MongoDB, Express.js, React.js, and Node.js. With a passion for problem-solving and a keen eye for detail, Mopelola brings creativity and efficiency to every project.</p>
          </div>
        



          <section id="projects" className="project-container container">
           <div className="division"></div>
           <div className="content-text">
           <h2>Projects</h2>
           <p>Check out some of my personal and paid projects</p>
            </div>

        <article className="project">
          {projects && projects.map((project, index) => (
        <div key={index} className="card">
             <div className="project-info">
               <div className="project-bio">
                 <h3>{project.title}</h3>
                 <h5>{project.toolss}</h5>
                 <p>{project.description}</p>
                   <a href={project.githubLink}>Github Link <FaGithub/> </a>
                   <a href={project.websiteLink}>live link <FaLink/>  </a>
              </div>
                <div className="project-link">
                 {/* Ensure links are rendered correctly */}
                 <a href={project.githubLink} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                  <a href={project.websiteLink} target="_blank" rel="noopener noreferrer"><i className="fas fa-globe"></i></a>
                 </div>
              </div>
        </div>
    ))}
  </article>
</section>


      

          <a href="https://github.com" className="btn btn-secondary" target="https://github.com">See More <i className="fas fa-arrow-right"></i></a>
        </section>

        <footer id="footer">
          <div className="container">
            <a href="mailto:mopelolabakare23@gmail.com">mopelolabakare23@gmail.com</a>
            <div className="social">
            <a href="https://Facebook.com"><FaFacebook /></a>  
              <a href="https://twitter.com/"><FaTwitter /></a>
              
              <a href="https://LinkedIn.com/"><FaLinkedin /></a>
              <a href="https://github.com"><FaGithub /></a>
            </div>

            <div className="attribution">
              <a href="https://github.com/CommunityPro/portfolio-html" target="_blank" rel="noopener noreferrer"></a>
            </div>
            <p>Copyright &copy; Mopelolabakare <span id="datee"></span>, All rights reserved</p>
          </div>
        </footer>

{/*         <img src={{MYCV}} /> */}
      </div>

    </>
  );
};

export default Index;
