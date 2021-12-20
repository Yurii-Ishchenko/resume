import s from "./ContactsListItem.module.css";

export default function ContactsListItem({ title, url, icon }) {
  return (
    <li className={s.item}>
      <div className={s.iconContainer}>
        {icon({ size: "1.5em", className: s.icon })}
      </div>
      <a href={url} className={s.link}>
        {title}
      </a>
    </li>
  );
}
