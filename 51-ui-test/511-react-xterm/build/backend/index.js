const { exec } = require('child_process');
const express = require('express');
const app = express();

app.use(express.json());

app.post('/execute', (req, res) => {
  const { command } = req.body;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      res.status(500).json({ error });
    } else {
      res.json({ output: stdout || stderr });
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});