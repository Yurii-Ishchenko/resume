import s from "./ProjectsList.module.css";
import projects from "../../../utils/myProgects";
import ProjectsItem from "../ProjectsItem/ProjectsItem";

export default function ProjectsList() {
  return (
    <div>
      <h2 className={s.title}>Projects</h2>
      <ol>
        {projects.map(({ title, url, tech }) => (
          <ProjectsItem key={title} title={title} url={url} tech={tech} />
        ))}
      </ol>
    </div>
  );
}
