import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Skills from './components/Skills/skills';
import ProjectList from "./components/ProjectList/projectlist";
import Contact from "./components/Contact/contact";
import Toggle from "./components/Toggle/toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";



const App = () => {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
  <div style={{backgroundColor:darkMode ? 'black': 'white', color:darkMode ? 'pink': 'black'}}>
    <Toggle/>
    <Intro/>
    <About/>
    <Skills/>
    <ProjectList/>
    <Contact/>
  </div>
  );
};

export default App;