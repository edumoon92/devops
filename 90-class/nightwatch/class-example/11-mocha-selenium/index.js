const express = require('express');
const app = express();

// Parse JSON and URL-encoded query parameters
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <html>
    <form action="/main" method="post">
      username: <input type="text" id="username" /><br />
      password: <input type="text" id="password" />

      <label>
      <input type="radio" name="gender" value="male" checked> Male
      </label>
      <label>
        <input type="radio" name="gender" value="female"> Female
      </label>
      <br>
      <label>
        Favorite color:
        <select name="color">
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </label>
      <br>
      <label>
        Favorite food:
        <input type="text" name="food">
      </label>
      <br>
            
      <input id="btn" type="submit" />
    </form>
    </html>
  `);
});

app.post('/main', (req, res) => {

  const gender = req.body.gender;
  const color = req.body.color;
  const food = req.body.food;

  res.send(`
    <html>
    <title>
      My awesome page
    </title>
    <body>
    <div id="message">
      Welcome to my page!
    </div>

    You selected ${gender}, ${color}, and ${food}
    </body>
    </html>
  `);
});

app.listen(3003, () => console.log('Example app listening on port 3003!'));
