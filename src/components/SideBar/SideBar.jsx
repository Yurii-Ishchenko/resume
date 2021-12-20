import s from "./SideBar.module.css";
import ContactsList from "../Contacts/ContactsList/ContactsList";
import myPhoto from "../../images/myPhoto.jpg";
import TechSkills from "../TechSkills/TechSkills";
import Languages from "../Languages/Languages";

export default function SideBar() {
  return (
    <aside className={s.sideBar}>
      <img src={myPhoto} alt="Yurii Ishchenko" width="370" />
      <ContactsList />
      <TechSkills />
      <Languages />
    </aside>
  );
}
