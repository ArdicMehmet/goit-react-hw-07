import React, { useEffect, useMemo } from "react";
import Contact from "../Contact";
import styles from "./contactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import { fetchContacts } from "../../redux/contactsOps";
const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const filterItem = useSelector(selectNameFilter);
  const contactLoading = useSelector(
    (state) => state.contacts.contacts.loading
  );
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);
  const filteredContacts = useMemo(() => {
    return contacts
      ? contacts["items"].filter((contact) =>
          contact.name.toLowerCase().includes(filterItem.toLowerCase())
        )
      : [];
  }, [contacts, filterItem]);

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
