import '../CSS/Contact.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaMapMarker, FaPhone, FaEnvelope } from 'react-icons/fa';

function Contacts() {
  let navigate = useNavigate();

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');

  return (
    <div className="Contacts">
      <h1 className="CONTACT">CONTACT</h1>

      <div className="dmam-form">
        <div className="dmam">
          <h2 className='drop'>Drop Me A Message</h2>
          <p>Hi there, these are my contact <br /> details or alternatively you can <br />send a message, either way <br /> GET IN TOUCH </p>
          <div className="lol">
            <div id="m">
              <FaMapMarker />
              <p id="bling"> Lagos, Nigeria.</p>
            </div>
            <div id="m">
              <FaPhone />
              <p id="bling">Tel +2347088078775</p>
            </div>
            <div id="m">
              <FaEnvelope />
              <p id="bling">mopelolabakare23@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <input type="text" name="name" placeholder="Name" value={Name} onChange={(e) => setName(e.target.value)} />
          <br />
          <input type="text" name="email" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <input type="text" name="message" placeholder="Message" value={Message} onChange={(e) => setMessage(e.target.value)} style={{ height: '100px' }}/>
          <br /><br />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
