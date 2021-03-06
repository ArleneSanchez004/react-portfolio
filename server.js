const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//heroku
if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));    
    });
}

app.listen(PORT, () => {
    console.log("Server is listening on http://localhost:" + PORT);
});