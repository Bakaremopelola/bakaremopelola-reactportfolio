// import '../CSS/About.css'
// import { useNavigate } from "react-router-dom";
// import lola7 from "../pictures/lola7.jpg"


// function About() {
//   let navigate = useNavigate()

//     return (
//       <>
//       <div className="About">
//       <h1 className='AM'>ABOUT ME</h1>
//       <div className='Aboutpage'>
     
//         <div className="aboutimage">
//           <img src = {lola7} />

//         </div>
//         <div className="aboutstory">
         
//           <p> Bakare Mopelola is a dedicated and skilled frontend web  <br />developer with a passion for crafting seamless  <br />and visually appealing user experiences. With a keen eye <br /> for design and a knack for coding,Mopelola has established   <br />herself as a proficient developer  <br />in the ever-evolving field of web development.</p>
//           <button onClick={()=>navigate("/Contacts")} className='btn2' style={{ height: '40px' }}>Hire Me</button>
//           <button className='bt1'>RESUME</button>

//         </div>
//         </div>

//       </div>
  
//       </>
//     )
//   }


import '../CSS/About.css'


function About() {

  return (
    <>
      <div className="About">
        <h1 className='AM'>ABOUT ME</h1>
        <div className='Aboutpage'>

          <div className="aboutimage">
            <img src="../../src/pictures/IMG_20220727_131201_417.jpg" />

          </div>
          <div className="aboutstory">

            <p> Bakare Mopelola is a dedicated and skilled frontend web  <br />developer with a passion for crafting seamless  <br />and visually appealing user experiences. With a keen eye <br /> for design and a knack for coding,Mopelola has established   <br />herself as a proficient developer  <br />in the ever-evolving field of web development.</p>
            <button className='bt2'>HIRE ME</button>
            <button className='bt1'>RESUME</button>

          </div>
        </div>

      </div>

    </>
  )
}

export default About;

       

  