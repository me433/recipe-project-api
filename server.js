const express = require('express');
const cors = require('cors')
const fs = require('fs');
const path = require("path");
const app = express().use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3500;

const ingredients = ["wortel", "ajuin", "zoete aardappel"]

//Fetch all ingredient tags
app.get('/api/ingredients', function (req, res) {
    res.status(200).sendFile(path.join(__dirname, "ingredients.json"))
 })

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});