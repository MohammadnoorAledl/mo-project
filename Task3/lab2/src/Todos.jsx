import { useState } from "react";

const Todos = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (text.trim() === "") return;

    setTodos([
      ...todos,
      { id: Date.now(), text, done: false }
    ]);

    setText("");
  };

  const toggle = (id) => {
    setTodos(
      todos.map(t =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const remove = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div>
      <h1>قائمة المهام</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="أضف مهمة..."
      />

      <button onClick={addTodo}>إضافة</button>

      <ul>
        {todos.map(t => (
          <li key={t.id}>
            <span
              onClick={() => toggle(t.id)}
              style={{
                textDecoration: t.done ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {t.text}
            </span>

            <button onClick={() => remove(t.id)}>حذف</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;