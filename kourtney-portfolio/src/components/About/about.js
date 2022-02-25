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
      Kourtney Boston is an entry level Front-End Web Developer eager to gain experience in the field.
          Recently, she completed the Full Stack Web Development Program at UT Austin, where she learned new coding languages
          and added many projects to her portfolio. Her background working in both client facing and employee facing roles make
          her an excellent communicator and problem solver. She is driven by making her clients happy, and keeping her team grounded and on track.
          Kourtney specializes in designing graphics and the look of an application, but is also dedicated to perfecting the functionality of it as well.
          Kourtney is open to new and exciting opportunities where she can learn, thrive, and help her clientele at the same time.
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