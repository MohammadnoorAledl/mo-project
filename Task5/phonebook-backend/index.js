const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

let persons = [
  { id: 1, name: "La Lol", number: "0912345678" },
  { id: 2, name: "User 2", number: "0923456789" },
  { id: 3, name: "User 3", number: "0934567890" },
];

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.post("/api/persons", (req, res) => {
  const body = req.body;

  if (!body.name || !body.number) {
    return res.status(400).json({ error: "الاسم والرقم مطلوبان" });
  }

  const newPerson = {
    id: Math.floor(Math.random() * 100000),
    name: body.name,
    number: body.number,
  };

  persons.push(newPerson);
  res.json(newPerson);
});

app.put("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;

  persons = persons.map((p) =>
    p.id === id ? { ...p, number: body.number } : p
  );

  res.json(body);
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((p) => p.id !== id);
  res.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});