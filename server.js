const express = require('express');
const cors = require('cors')
const fs = require('fs');
const path = require("path");
const app = express().use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3500;

app.use('/api/recipes', require('./routes/api/recipes.js'))
app.use('/api/ingredients', require('./routes/api/ingredients.js'))
app.use('/api/labels', require('./routes/api/labels.js'))

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});