import { FunctionalComponent, h } from 'preact';
import { Project } from "../../data/projects";
import style from './style.css';

export type ProjectListProps = {
  projects: Project[]
};

const ProjectList: FunctionalComponent<ProjectListProps> = (props: ProjectListProps) => {
    return (
      <div className={style.projectList}>
        {props.projects.map( project => <div className={style.projectCard} style={`background-image: url('${project.screenshot}')`}>{project.name}</div>)}
      </div>
    );
};

export default ProjectList;