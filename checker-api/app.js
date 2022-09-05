//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

const uri = "mongodb+srv://christine2515:wiggle869@campsitecheckerdb.7pzsn6c.mongodb.net/campsitecheckerdb?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// connection works ^

const accountSchema = {
    park: String,
    start: String,
    // maybe later start will be a datetime
    equipment: String,
    email: String,
    password: String
};

const Account = mongoose.model("Account", accountSchema, 'accounts');

// var a1 = new Account({
//     park: "plaskett",
//     start: "never",
//     equipment: "nothing",
//     email: "hmm",
//     password: "idk"
// });

// a1.save(function(err, account) {
//     console.log("saved");
// });

// Account.count({}, function(err, count) {
//     console.log("number of accounts:", count);
// });

// var Account = mongoose.model("accounts", accountSchema, "accounts");

// get
// left conditions out for now, later add in email and pwd
app.get("/accounts", function(req, res) {
    Account.find({}, function(err, foundAccounts) {
        if(!err) {
            res.send(foundAccounts);
        } else {
            res.send(err);
        }
        
    });
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});