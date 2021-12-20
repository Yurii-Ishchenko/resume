import contacts from "../../../utils/myContacts";
import s from "./ContactsList.module.css";
import ContactsListItem from "../ContactsListItem/ContactsListItem";

export default function ContactsList() {
  return (
    <div>
      <h2 className={s.title}>Contacts</h2>
      <ul>
        {contacts.map(({ icon, title, url }) => (
          <ContactsListItem key={title} icon={icon} title={title} url={url} />
        ))}
      </ul>
    </div>
  );
}
