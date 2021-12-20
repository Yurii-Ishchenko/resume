import s from "./AboutMe.module.css";
import Projects from "../Projects/ProgectsList/ProgectsList";
import Education from "../Education/Education";
import WorkExrerience from "../WorkExrerience/WorkExrerience";

export default function AboutMe() {
  return (
    <div className={s.container}>
      <h2 className={s.profession}>Front-End (React.js) Developer</h2>
      <h1 className={s.name}>Yurii Ishchenko</h1>
      <p>
        I'm a Front-end Developer and looking for an interesting job. I want to
        be in a good team to improve my skills and use them for interesting
        tasks. I am a fast learner, responsible, ready for hard tasks.
      </p>
      <Projects />
      <WorkExrerience />
      <Education />
    </div>
  );
}
