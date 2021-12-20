import s from "./ProjectsItem.module.css";

export default function ProjectsItem({ title, url, tech }) {
  return (
    <li className={s.item}>
      <div className={s.flex}>
        <a href={url} className={s.link}>
          {title}
        </a>
        <span>
          <b>[</b>
          <span className={s.tech}>{tech}</span>

          <b>]</b>
        </span>
      </div>
    </li>
  );
}
