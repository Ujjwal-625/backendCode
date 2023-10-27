const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");
const routes=require("./routing/authroutes");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const Authorisation=require("./routing/Authorisation");
const time = 60 * 60 * 24 * 1000;

app.use(cookieParser());
app.use(
  session({
    saveUninitialized: true,
    resave: false,
    secret: "djfljsldsjfl9",
    cookie: {
      maxAge: time,
      // Add secure and httpOnly flags for production
    //   secure: false, // Change to true if running over HTTPS
    //   httpOnly: true,
    },
  })
);
app.use("/admin",validate,Authorisation);
function validate(req,res,next){
  if(req.session.Role=="admin"){
    next();
  }
  else{
    res.redirect("/");
  }
}
app.use("/user",fun,routes);
function fun(req,res,next){
    if(req.session.Username){
        next();
    }else{
        res.redirect("/");
    }
}
app.get("/dashboard.html", (req, res) => {
  if (req.session.Username) {
    res.sendFile(path.join(__dirname, "./public/dashboard.html"));
  } else {
    res.redirect("index.html");
  }
});
app.get("/", (req, res) => {
    if (req.session.Username) {
      res.redirect("dashboard.html");
    } else {
      res.sendFile(path.join(__dirname, "./public/index.html"));
    }
  });
  
  app.use(express.static("public"));
app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("index.html");
});

app.get("/login", (req, res) => {
    if (req.session.Username) {
        res.redirect("dashboard.html");
        return; // Exit the route handler
      }
  fs.readFile("public/user.json", "utf-8", (err, data) => {
    if (err) {
      // Handle file read error
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    try {
      const arr = JSON.parse(data);
      let flag = false;
      arr.forEach((ele) => {
        if (ele.Username == req.query.Username && ele.password == req.query.password) {
          req.session.Username = ele.Username;
          req.session.Role = ele.Role;
          console.log(ele.Role);
          flag = true;
          res.redirect("dashboard.html");
          return;
        }
      });
      if (!flag) {
        res.send("No user found ");
      }
    } catch (parseError) {
      // Handle JSON parsing error
      console.error(parseError);
      res.status(500).send("Internal Server Error");
    }
  });
});

app.listen(3000, (err) => {
  if (err) {
    console.log("Unable to listen on the given port");
  } else {
    console.log("Started listening on the given port....");
  }
});
