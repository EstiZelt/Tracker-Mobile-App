const express = require('express');
const app = express();
const port = 3000;

app.get('/user', (req, res) => {
  res.json({ name: 'John Doe' }); 
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
