const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
var cors = require('cors');

// import bodyParser from 'body-parser'
// app.use(bodyParser.json())

const app = express();

app.use(express.json());

app.use(cors({
    origin: '*'
}));
mongoose.connect(
    'mongodb+srv://Mehdi:Mehdi@cluster0.pvz67.mongodb.net/Cluster0?retryWrites=true&w=majority',
  {
    useNewUrlParser: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});

app.post("/add_user", async (request, response) => {
    console.log('request', request);
    console.log('request.data', request.data);
    console.log('req.query', request.query);
    console.log('query', request.req);
    
// A faire
    // var myobj = { email: "Données li jewni mel front", password: "Pareillll" };
    // db.collection("users").insertOne(myobj, function(err, res) {
    //     if (err) throw err;
    //     console.log("1 document inserted");
    //     db.close();
    //   });

    response.send(200)
  
    // try {
    //   await user.save();
    //   response.send(user);
    // } catch (error) {
    //   response.status(500).send(error);
    // }
});

app.get("/users", async (request, response) => {
    const users = await userModel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });
