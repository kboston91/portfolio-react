import './skills.css';
import { ThemeContext } from "../../context";
import { useContext } from "react";

const Skills = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode; 

  return (
    <div className="s">
        <h2 className='s-title'>Skills I've Learned</h2>
        <div style={{color:darkMode ? 'black': 'black'}} className='s-card-list' >
        <div className='s-card'>
          <h5 className='s-card-title'>Front-end</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Responsive Design</li>
            <li>React</li>
          </ul>
        </div>
        <div className='s-card'>
          <h5 className='s-card-title'>Back-end</h5>
          <ul>
          <li>APIs</li>
					<li>NodeJS</li>
					<li>Express</li>
					<li>REST</li>
					<li>PWAs</li>
          </ul>
        </div>
        <div className='s-card'>
          <h5 className='s-card-title'>DevTools</h5>
          <ul>
            <li>Git</li>
            <li>NPM</li>
            <li>VSCode</li>
            <li>Chrome DevTools</li>
          </ul>
        </div>
        <div className='s-card'>
          <h5 className='s-card-title'>Database</h5>
          <ul>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Skills;