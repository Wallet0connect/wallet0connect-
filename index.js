const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(path.join(__dirname + '/assets')));

// app.use(express.urlencoded({extend: true}))
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/whitelisting/index.html"));
});
app.get("/", (req, res)=>{
    req.query=== 'bl'
    res.sendFile(path.join(__dirname + "/whitelisting/index.html"));
});

app.listen(3000, () =>{
    console.log("LISTENING ON PORT 3000")
});