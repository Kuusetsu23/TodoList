const express = require("express");
const app = express();

app.use(express.json());

let todos = [];

// GET semua todo
app.get("/todos", (req, res) => {
  res.json(todos);
});

// POST tambah todo
app.post("/todos", (req, res) => {
  const { task } = req.body;

  if (!task) {
    return res.status(400).json({ message: "Task required" });
  }

  const newTodo = { id: Date.now(), task };
  todos.push(newTodo);

  res.status(201).json(newTodo);
});

// PUT update todo
app.put("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const { task } = req.body;

  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Todo tidak ditemukan" });
  }

  todos[index].task = task || todos[index].task;

  res.json(todos[index]);
});

// DELETE todo
app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const exists = todos.some((t) => t.id === id);

  if (!exists) {
    return res.status(404).json({ message: "Todo tidak ditemukan" });
  }

  todos = todos.filter((t) => t.id !== id);
  res.json({ message: "Deleted", id });
});


module.exports = app;
