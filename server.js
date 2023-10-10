const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./route');

app.use(express.json());
app.use(cors()); // Use the cors middleware
app.use('/', routes);

const PORT = process.env.PORT || 12345;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


