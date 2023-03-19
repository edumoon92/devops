const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database!');
});

// Create the Express application
const app = express();

app.use(express.json());

const sql = `CREATE TABLE IF NOT EXISTS users (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NULL,
    email VARCHAR(255) NULL,
    phone VARCHAR(255) NULL,
    action VARCHAR(255) NULL
)`;

connection.query(sql, (err, result) => {
  if (err) throw err;
  console.log('Users table created or already exists');
});


// Index Route
app.get('/create', (req, res) => {
  console.log('Connected to MySQL server');
  
  const sql = `CREATE TABLE IF NOT EXISTS users (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NULL,
    email VARCHAR(255) NULL,
    phone VARCHAR(255) NULL,
    action VARCHAR(255) NULL
  )`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Users table created or already exists');
  });
});



// Index Route
app.get('/', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.send(`
      <h1>Users</h1>
      <a href="/add">Add User</a>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
        ${results.map((user) => {
          return `
            <tr>
              <td>${user.name}</td>
              <td>${user.email}</td>
              <td>${user.phone}</td>
              <td>
                <a href="/edit/${user.id}">Edit</a>
                <a href="/delete/${user.id}">Delete</a>
              </td>
            </tr>
          `;
        }).join('')}
      </table>
    `);
  });
});

// Add User Route
app.get('/add', (req, res) => {
  res.send(`
    <h1>Add User</h1>
    <form method="post" action="/add">
      <label>Name:</label>
      <input type="text" name="name" required>
      <br>
      <label>Email:</label>
      <input type="email" name="email" required>
      <br>
      <label>Phone:</label>
      <input type="tel" name="phone" required>
      <br>
      <input type="submit" value="Add">
    </form>
  `);
});

app.post('/add', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const user = { name, email, phone };
  connection.query('INSERT INTO users SET ?', user, (err, result) => {
    if (err) throw err;
    res.redirect('/');
  });
});

// Edit User Route
app.get('/edit/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM users WHERE id = ?', id, (err, result) => {
    if (err) throw err;
    res.send(`
      <h1>Edit User</h1>
      <form method="post" action="/update/${result[0].id}">
        <label>Name:</label>
        <input type="text" name="name" value="${result[0].name}" required>
        <br>
        <label>Email:</label>
        <input type="email" name="email" value="${result[0].email}" required>
        <br>
        <label>Phone:</label>
        <input type="tel" name="phone" value="${result[0].phone}" required>
        <br>
        <input type="submit" value="Update">
      </form>
    `);
  });
});


// Update User Route
app.post('/update/:id', (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  connection.query('UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?', [name, email, phone, id], (err, result) => {
  if (err) throw err;
    res.redirect('/');
  });
});

// Delete User Route
app.get('/delete/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM users WHERE id = ?', id, (err, result) => {
  if (err) throw err;
    res.redirect('/');
  });
});

// Start the server and listen on port 8080
const port = process.env.PORT || 8080;
const host = process.env.HOST || '0.0.0.0';
app.listen(port, host, () => {
  console.log(`Server listening on port http://${host}:${port}`);
});
