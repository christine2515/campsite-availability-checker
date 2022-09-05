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

app.route("/accounts")
.get(function(req, res) {
    Account.find({}, function(err, foundAccounts) {
        if(!err) {
            res.send(foundAccounts);
        } else {
            res.send(err);
        }
        
    });
})
.post(function(req, res) {
    console.log(req.body.park);
    console.log(req.body.start);

    const newAccount = new Account({
        park: req.body.park,
        start:req.body.start,
        equipment: req.body.equipment,
        email: req.body.email,
        password: req.body.password
    });

    newAccount.save(function(err) {
        if (!err) {
            res.send("Successfully added a new request.");
        } else {
            res.send(err);
        }
    });
})
.delete(function(req, res) {
    Account.deleteMany(function(err) {
        if (!err) {
            res.send("Successfully deleted all accounts.");
        } else {
            res.send(err);
        }
    });
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});