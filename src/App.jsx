import "./App.css";
import ContactForm from "./components/ContactForm";
import SearchBox from "./components/SearchBox";
import ContactList from "./components/ContactList";
import { useSelector } from "react-redux";
function App() {
  const contactError = useSelector((state) => state.contacts.contacts.error);
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
