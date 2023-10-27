const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const Age = 60 * 60 * 24 * 1000;
// Use middleware
app.use(cookieParser());
app.use(
  session({
    saveUninitialized: true,
    secret: "jdsklfji8347kfs",
    resave: false,
    cookie: { maxAge: Age },
  })
);
app.set("view engine", "ejs");
app.use(express.json());
// MongoDB Connection
const Client = require("mongodb").MongoClient;
let dbinstance;
Client.connect("mongodb+srv://ujjwal1:1234567890@cluster0.cgeuyem.mongodb.net/?retryWrites=true&w=majority", {})
  .then((client) => {
    dbinstance = client.db("Project");
    // console.log(client);
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: " + err);
  });
  
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/public/index.html"));
})
app.get("/Logout",(req,res)=>{
  req.session.destroy();
  // res.render("index",{message:"Sucessfully logout"});
  res.redirect("/");
})
app.get("/login",(req,res)=>{
  // console.log(req.session.UserName);
    if(req.session.UserName){
        res.render("dashboard");
    }
    else
    res.render("login",{message:""});
})
app.get("/Signup",(req,res)=>{
  res.render("signup",{message:""});
})
app.get("/signupPage",(req,res)=>{
  dbinstance.collection("Users").findOne({"UserName":req.query.UserName}).then((response)=>{
    if(response){
    console.log("UserName Exists");
    res.render("signup",{message:"UserName Exists Try another UserName"});
  }
  else{
    let usr={};
    usr.UserName=req.query.UserName;
    usr.Password=req.query.Password;
    dbinstance.collection("Users").insertOne(usr);
    console.log("User Created");
    res.redirect("/");
  }
  })
})
app.get("/loginPage",(req,res)=>{
    // res.end();
    // console.log(dbinstance);
    // res.end();
    dbinstance.collection("Users").findOne({$and:[{"UserName":req.query.UserName},{"Password":req.query.Password}]}).then((response)=>{
      if(response!=null){
        console.log("user found");
        // req.session.UserName=req.query.UserName;
        console.log(req.session.UserName);
        res.render("dashboard");
      }
      else{
        console.log("User Not found");
        res.render("login",{message:"Invalid UserName Or Password"});
      }
    })
    
    // res.end();
})
app.listen(3000,(err)=>{
    if(err){
        console.log("Failed to connect to the server");
    }else{
        console.log("started Listening on the given port");
    }
})