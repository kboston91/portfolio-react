import "./contact.css";
import Phone from "../../image/iphone-icon.png";
import Email from "../../image/email-icon.png";
import Location from "../../image/home-icon.png";
import { useRef, useState, useContext } from "react";
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_190pc78",
        "template_o2rwbuv",
        formRef.current,
        "user_M0I5FS6HZXWL8keajpNi5"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <div className="c-title">Let's discuss your project</div>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1(512)910-1046
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              kourtneygboston@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Location} alt="" className="c-icon" />
              Austin, Texas, United States
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>How can I help?</b> Whether it's for a full-time role,
            freelancing project, or contract position, I'm eager to take on
            work.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor:darkMode ? 'white' : 'pink'}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor:darkMode ? 'white' : 'pink'}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor:darkMode ? 'white' : 'pink'}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor:darkMode ? 'white' : 'pink'}} rows="5" placeholder="Message" name="message" />
            <button style={{backgroundColor:darkMode ? 'pink' : 'black'}}>Submit</button>
            {done && 'Thanks!'}
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
