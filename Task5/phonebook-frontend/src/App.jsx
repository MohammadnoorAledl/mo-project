import { useState, useEffect } from "react";
import personService from "./services/persons";
import "./App.css";

const Notification = ({ message, type }) => {
  if (!message) return null;
  return <div className={`notification ${type}`}>{message}</div>;
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("success");

  useEffect(() => {
    personService.getAll().then((data) => setPersons(data));
  }, []);

  const showNotification = (text, type = "success") => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => setMessage(null), 4000);
  };

  const addPerson = (e) => {
    e.preventDefault();

    const existing = persons.find((p) => p.name === newName);

    if (existing) {
      if (confirm(`${newName} موجود مسبقاً. هل تريد تحديث الرقم؟`)) {
        const updated = { ...existing, number: newNumber };
        personService
          .update(existing.id, updated)
          .then((returned) => {
            setPersons(
              persons.map((p) => (p.id !== existing.id ? p : returned))
            );
            showNotification(`تم تحديث رقم ${newName}`);
          })
          .catch(() => {
            showNotification(`${newName} محذوف من الخادم`, "error");
            setPersons(persons.filter((p) => p.id !== existing.id));
          });
      }
      return;
    }

    const newPerson = { name: newName, number: newNumber };
    personService.create(newPerson).then((returned) => {
      setPersons(persons.concat(returned));
      showNotification(`تمت إضافة ${newName}`);
    });

    setNewName("");
    setNewNumber("");
  };

  const deletePerson = (id, name) => {
    if (confirm(`هل تريد حذف ${name}؟`)) {
      personService.remove(id).then(() => {
        setPersons(persons.filter((p) => p.id !== id));
        showNotification(`تم حذف ${name}`);
      });
    }
  };

  const filtered = persons.filter((p) =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1>دليل الهاتف</h1>

      <Notification message={message} type={messageType} />

      <div className="search-box">
        بحث:
        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="ابحث عن اسم..."
        />
      </div>

      <h2>إضافة جديدة</h2>
      <form onSubmit={addPerson}>
        <div>
          الاسم:
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="أدخل الاسم"
          />
        </div>
        <div>
          الرقم:
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
            placeholder="أدخل الرقم"
          />
        </div>
        <button type="submit">حفظ</button>
      </form>

      <h2>الأرقام</h2>
      <ul>
        {filtered.map((p) => (
          <li key={p.id}>
            {p.name}: {p.number}
            <button className="delete" onClick={() => deletePerson(p.id, p.name)}>
              حذف
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;