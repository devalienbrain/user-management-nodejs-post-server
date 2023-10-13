const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "Kodom Ali", email: "kodom@ali.com" },
  { id: 2, name: "Sodor Uddin", email: "sodor@uddin.com" },
  { id: 3, name: "Polok Dutt", email: "Polok@dutt.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Server running on PORT ${port}`);
});
