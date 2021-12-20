import s from "./WorkExrerience.module.css";

export default function WorkExrerience() {
  return (
    <div>
      <h2 className={s.title}>Work Experience</h2>
      <h3 className={s.profession}>Equipment repairman</h3>
      <span className={s.professionTime}>June 2010 - April 2015 | Ukraine</span>
      <hr />
      <h3 className={s.profession}>Sales manager</h3>
      <span className={s.professionTime}>
        May 2015 - September 2018 | Ukraine
      </span>
      <hr />
      <h3 className={s.profession}>Equipment repairman</h3>
      <span className={s.professionTime}>
        September 2018 - October 2021 | Ukraine
      </span>
    </div>
  );
}
