import React, { useEffect, useMemo } from "react";
import Contact from "../Contact";
import styles from "./contactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";
const ContactList = () => {
  const contactLoading = useSelector(
    (state) => state.contacts.contacts.loading
  );
  const filteredContacts = useSelector(selectFilteredContacts);

  if (contactLoading) {
    return <div> loading ...</div>;
  }
  return (
    <div className={styles.container}>
      {filteredContacts.map((contact, index) => (
        <Contact
          key={index}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </div>
  );
};

export default ContactList;
