// importing packages
const express = require("express");
const admin = require("firebase-admin");
const bcrypt = require("bcrypt");
const path = require("path");

// firebase admin setup
var serviceAccount = require("./ecom-website-7d34d-firebase-adminsdk-orox2-2385a941a3.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

let db = admin.firestore();

// generate image upload link
async function generateUrl() {
  let date = new Data();
  let id = parseInt(Math.random() * 1000000000);

  const imageName = `${id}${date.getTime()}.jpg`

  const params = ({
    Bubket: bucketName
  })

}

//declare static path
let staticPath = path.join(__dirname, "public");

// instailizing express.js

const app = express();

// middlewares
app.use(express.static(staticPath));
app.use(express.json());

//routes
//home route
app.get("/", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

// signup route
app.get("/SignUp", (req, res) => {
  res.sendFile(path.join(staticPath, "signup.html"));
});

app.post("/signup", (req, res) => {
  let { name, email, password, number, tac, notification } = req.body;

  // form valdations
  if (name.length < 3) {
    return res.json({ alert: "Name Must Be 3 Letters Long" });
  } else if (!email.length) {
    return res.json({ alert: "Enter Your Email" });
  } else if (password.length < 8) {
    return res.json({ alert: "Enter Stronge Password" });
  } else if (!number.length) {
    return res.json({ alert: "Enter Phone Number" });
  } else if (!Number(number) || number.length < 11) {
    return res.json({ alert: "Invalid Number, Please Enter Valid One" });
  } else if (!tac) {
    return res.json({ alert: "You Must Agree To Our Terms and Condations" });
  }

  // store user in db
  db.collection("users")
    .doc(email)
    .get()
    .then((user) => {
      if (user.exists) {
        return res.json({ alert: "Email Already Exists" });
      } else {
        // encrypt the password before storing it.
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => {
            req.body.password = hash;
            db.collection("users")
              .doc(email)
              .set(req.body)
              .then((data) => {
                res.json({
                  name: req.body.name,
                  email: req.body.email,
                  seller: req.body.seller,
                });
              });
          });
        });
      }
    });
});

// login route
app.get("/login", (req, res) => {
  res.sendFile(path.join(staticPath, "login.html"));
});

app.post("/login", (req, res) => {
  let { email, password } = req.body;

  if (!email.length || !password.length) {
    return res.json({ alert: "Fill All The Inputs" });
  }

  db.collection("users")
    .doc(email)
    .get()
    .then((user) => {
      if (!user.exists) {
        //if email does not exists
        return res.json({ alert: "Email Does Not Exists" });
      } else {
        bcrypt.compare(password, user.data().password, (err, result) => {
          if (result) {
            let data = user.data();
            return res.json({
              name: data.name,
              email: data.email,
              seller: data.seller,
            });
          } else {
            return res.json({ alert: "Password Incorrect" });
          }
        });
      }
    });
});

// seller route
app.get("/seller", (req, res) => {
  res.sendFile(path.join(staticPath, "seller.html"));
});

app.post("/seller", (req, res) => {
  let { name, about, address, number, tac, legit, email } = req.body;
  if (
    !name.length ||
    !address.length ||
    !about.length ||
    number.length < 11 ||
    !Number(number)
  ) {
    return res.json({ alert: "Some Inforamation(s) is/are Invalid" });
  } else if (!tac || !legit) {
    return res.json({ alert: "You Must Agree to Our Terms and Conditions" });
  } else {
    // update users seller status here.
    db.collection("sellers")
      .doc(email)
      .set(req.body)
      .then((data) => {
        db.collection("users")
          .doc(email)
          .update({
            seller: true,
          })
          .then((data) => {
            res.json(true);
          });
      });
  }
});

// add product route
app.get("/add-product", (req, res) => {
  res.sendFile(path.join(staticPath, "addProduct.html"));
});

// 404 route
app.get("/Error", (req, res) => {
  res.sendFile(path.join(staticPath, "error.html"));
});

app.use((req, res) => {
  res.redirect("/Error");
});

app.listen(3000, () => {
  console.log("listening on port 3000.......");
});
