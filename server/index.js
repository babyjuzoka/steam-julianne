const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para servir arquivos estáticos do diretório 'client/build'
app.use(express.static('client/build'));

// Rotas
app.get('/api', (req, res) => {
  res.send('Hello from the API!');
});

// Catch-all para todas as outras requisições
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
