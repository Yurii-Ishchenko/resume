import s from "./Education.module.css";

export default function Education() {
  return (
    <div>
      <h2 className={s.title}>Education</h2>
      <p className={s.educationTitle}>Kryvyi Rih National University</p>
      <p className={s.managementTitle}>Bachelor - mining engineer</p>
      <span className={s.professionTime}>
        Septermber 2011 - June 2014 | Ukraine
      </span>
    </div>
  );
}
