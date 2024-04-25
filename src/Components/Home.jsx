import "../CSS/Home.css";
import { useNavigate } from "react-router-dom";
import mylove from "../pictures/mylove.jpg"
import test from '../pictures/mylove.jpg'

function Home() {

    let navigate = useNavigate()
  return (
    <>
      <div className="Home">
        <div className="Home1">
          <div className="intro">
            <h1>HI,  I'M LOLA.</h1>
            <h1>
              A WEB<span style={{ color: "orangered" }}>*</span> DESIGNER
            </h1>
            <h1>FRONTEND DEVELOPER</h1>
          </div>

          <div className="duce">
            <h4>
              DESIGN<span style={{ color: "orangered" }}>*</span>{" "}
            </h4>
            <h4>
              DEVELOPMENT <span style={{ color: "orangered" }}>*</span>
            </h4>
            <h4>
              WEBFLOW <span style={{ color: "orangered" }}>*</span>{" "}
            </h4>
          </div>

          <div className="btn">
            <button className="bt1">Got a Project?</button>
            <button onClick={()=>navigate("/Contacts")} className="bt2">Let's Talk</button>
          </div>
        </div>

        <div className="Home2">
          <img src='../../src/pictures/mylove.jpg'/>
        </div>
      </div>
    </>
  );
}

export default Home;
