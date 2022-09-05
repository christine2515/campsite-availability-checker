//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
// const cors = require("cors");
// app.use(cors());

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static("public"));

const uri = "mongodb+srv://christine2515:wiggle869@campsitecheckerdb.7pzsn6c.mongodb.net/campsitecheckerdb?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// connection works ^

const accountSchema = {
    park: String,
    start: String,
    // maybe later start will be a datetime
    equipment: Array,
    email: String,
    password: String
};

const Account = mongoose.model("Account", accountSchema, 'accounts');

// ____________ TEST ____________

app.route("/")
.get(function(req, res, next) {
    console.log("API is working properly");
});

// ____________ REQUESTS FOR ALL ACCOUNTS ____________

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
    // console.log(req.body.park);
    // console.log(req.body.start);

    // const { park, start, equipment, email, password } = req.body;

    const newAccount = new Account({
        park: req.body.park,
        start: req.body.start,
        equipment: req.body.equipment,
        email: req.body.email,
        password: req.body.password
    });

    newAccount.save(function(err) {
        if (!err) {
            console.log("Successfully added a new request.");
        } else {
            console.log(err);
        }
    });
});
// .delete(function(req, res) {
//     Account.deleteMany(function(err) {
//         if (!err) {
//             res.send("Successfully deleted all accounts.");
//         } else {
//             res.send(err);
//         }
//     });
// })

// ____________ REQUESTS FOR SPECIFIC ACCOUNTS ____________

// FIND REQUESTS BY ACCOUNT EMAIL AND PWD
app.route("/accounts/:email/:password")
.get(function(req, res) {
    Account.find({email: req.params.email, password: req.params.password}, function(err, foundAccount) {
        if(foundAccount) {
            res.send(foundAccount);
        } else {
            res.send("No requests associated with that email was found :(");
        }
    });
});

// UPDATE A REQUEST
app.route("/accounts/:id")
.patch(function(req, res) {
    Account.findByIdAndUpdate(
        req.params.id,
        {
            park: req.body.park,
            start: req.body.start,
            equipment: req.body.equipment,
        },
        function(err) {
            if (err) {
                res.send(err);
            } else {
                res.send("Your request has been updated.");
            }
        }
    )
})

// DELETE A REQUEST
.delete(function(req, res) {
    Account.findByIdAndDelete(
        req.params.id,
        function(err) {
            if (err) {
                res.send(err);
            } else {
                res.send("Your request has been deleted.")
            }
        }
    )
});

app.listen(5000, function() {
  console.log("Server started on port 5000");
});