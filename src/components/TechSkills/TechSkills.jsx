import techSkills from "../../utils/myTechSkills";
import s from "./TechSkills.module.css";

export default function TechSkills() {
  return (
    <div>
      <h2 className={s.title}>Tech skills</h2>
      <ul className={s.list}>
        {techSkills.map((skill) => (
          <li key={skill} className={s.item}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
