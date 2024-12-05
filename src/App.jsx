import "./App.css";
import ContactForm from "./components/ContactForm";
import SearchBox from "./components/SearchBox";
import ContactList from "./components/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
function App() {
  const contactError = useSelector((state) => state.contacts.contacts.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {!contactError ? <ContactList /> : <div>{contactError}</div>}
    </div>
  );
}

export default App;
