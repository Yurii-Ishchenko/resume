import s from "./Languages.module.css";

export default function Languages() {
  return (
    <div>
      <h2 className={s.title}>Languages</h2>
      <ul className={s.list}>
        <li>Ukrainian - native</li>
        <li>Russian - native</li>
        <li>English - pre-intermediate</li>
      </ul>
    </div>
  );
}
