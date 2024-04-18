import  '../CSS/Services.css'



function Services() {

    return (
      <>
       <div className="SERVICES">
        <div className='serve'> <h1>SERVICES</h1></div>
        <div className='grid'> 
            
        
            <div className="MAP">
                <div className="HT">
                    <img src="/../../src/pictures/pexels-mohi-syed-50614.jpg"/>
                    <h2>MOBILE APP DEVELOPMENT</h2>
                </div>
                <div className="MAP-text">
                   <p>"Mobile development is like building homes for  smartphones and tablets. Developers use their creative toolbox to craft user-friendly and engaging apps that make our devices come alive. It's all   about blending art and technology to create seamless experiences that fit right in your pocket, enhancing your daily life with convenience, entertainment, and connection at your fingertips."</p>
                </div>
            </div>
            
            <div className="DAD">
                <div className="HT">
                    <img src="/../../src/pictures/pexels-kevin-ku-577585.jpg" />
                    <h2>DESKTOP APP DEVELOPMENT</h2>
                </div>
                <div className="DAD-text">
                    <p>Desktop app development is like crafting personalized spaces on your computer. Developers work their magic to create software that feels like a cozy room tailored just for you. It's about designing intuitive and powerful programs that simplify tasks, entertain, or help you get things done, all within the comfort of your desktop environment."</p>
                </div>
            </div>
            
            <div className="PL">
                <div className="HT">
                    <img src="/../../src/pictures/programming language.jpeg"/>
                    <h2>PROGRAMMING LANGUAGES</h2>
                </div>
                <div className="pl-text">
                    <p>Programming languages are the diverse tools that enable humans to communicate with computers. Just like spoken languages, they have their own syntax and grammar rules. These languages empower developers to write instructions that computers understand, allowing them to create software, websites, and apps that drive innovation and shape our digital world.</p>
                </div>
            </div>
        </div>
    </div>

  
      </>
    )
  }
  
  export default Services;
  