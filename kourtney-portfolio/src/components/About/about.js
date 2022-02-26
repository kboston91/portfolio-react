import './about.css';
import ABOUT from '../../image/a-img.gif';
import cert from '../../image/kbostoncert.png';

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={ABOUT} className="a-img"></img>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">
          About Me
        </h1>
        <p className='a-sub'>
          A lifelong student...
        </p>
        <p className='a-desc'>
        I am an entry-level Front-End Web Developer eager to gain experience in the field.
          Recently, I completed the Full Stack Web Development Program at The University of Texas at Austin, where I learned new coding languages
          and added many projects to my portfolio. My background working in both client-facing and employee-facing roles makes
          me an excellent communicator and problem solver. I am driven by producing quality and measurable results for my clients and keeping my team grounded and on track.
         I specialize in designing graphics and the look of an application but I’m also dedicated to perfecting the functionality of it as well.
          I welcome new and exciting opportunities where I can learn, thrive, and help my clientele at the same time.
        </p>
        <div className='a-cert'>
          <img src={cert} alt='' className='a-cert-img'/>
          <div className='a-cert-texts'>
            <h4 className='a-cert-title'>
              University of Texas at Austin Coding Bootcamp
            </h4>
            
          </div>
        </div>
      </div>

    </div>
  )
}
 export default About;