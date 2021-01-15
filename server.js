require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const path = require("path");

app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get('/api/randomword', (req, res) => {
    let minLength = req.query.minlength;
    let maxLength = req.query.maxlength;
    let baseURL = `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1`;
    const requestURL = `${baseURL}&minLength=${minLength}&maxLength=${maxLength}&api_key=${process.env.API_KEY}`;

    axios.get(requestURL).then(response => {
        res.json(response.data);
    }).catch(error => {
        console.log(error);
        res.json({
            error: 'There was an error getting a random word.'
        });
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


app.listen(process.env.PORT || 8000, function () {
    console.log('server has been started on port 8000');
})