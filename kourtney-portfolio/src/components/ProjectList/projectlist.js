import "./projectlist.css";
import Project from "../Project/project";
import {projects} from '../../data';

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">A Collection of my Work.</h1>
        <p className="pl-desc">
          Below you will find 6 projects I completed alone or in agile groups during my studies at the UT Austin Coding Bootcamp.
          This portfolio is an ever growing look into what I can contribute to a
          team. You will find both front-end centered and back-end centered
          projects.
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project key={item.id} img={item.image} link={item.github} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
