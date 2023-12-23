import css from './ContactList.module.css';

const ContactList = ({ contacts, onClick }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.contact}>
          {contact.name} : {contact.number}
          <button type="button" onClick={() => onClick(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export { ContactList };
