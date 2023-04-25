const express = require('express');
const path = require('path');

const app = express();

a = 2;
console.log(a);

app.use(
  '/static',
  express.static(path.resolve(__dirname, 'frontend', 'static'))
);

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running...');
});
