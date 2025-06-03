const express = require('express');
const app = express();
const catalogRoutes = require('./routes/catalog');

app.use(express.json());
app.use('/catalog', catalogRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
