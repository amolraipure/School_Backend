const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const SignupModule = require("./Modules/SignupSchema");
const StudentModule = require("./Modules/StudentSchema");
const TeacherModule = require("./Modules/TeacherSchema");

const app = express();

app.use(express.json());

app.use(cors());

mongoose.connect(
  "mongodb+srv://amolraipure:amol1234@cluster0.teuaxv0.mongodb.net/"
);
// mongoose.connect("mongodb://127.0.0.1:27017/School");

app.post("/", async (req, res) => {
  //   SignupModule.create(req.body)
  //     .then((students) => res.json(students))
  //     .catch((err) => res.json(err));
  let data = new SignupModule(req.body);
  let result = await data.save();
  res.status(200).json({
    success: true,
    message: "Admin successfully created",
  });

  console.log(result);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  SignupModule.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("the password incorrect");
      }
    } else {
      res.json("no record existed");
    }
  });
});

app.post("/student", async (req, res) => {
  let data = new StudentModule(req.body);

  let result = await data.save();
  console.log(result);
});

app.post("/teacher", async (req, res) => {
  let data = new TeacherModule(req.body);

  let result = await data.save();
  console.log(result);
});

app.get("/student", async (req, res) => {
  let data = await StudentModule.find();
  res.json(data);
  //   StudentModule.find()
  //     .then((students) => res.json(students))
  //     .catch((err) => res.json(err));
});

app.get("/teacher", async (req, res) => {
  let data = await TeacherModule.find();
  res.json(data);
  //   StudentModule.find()
  //     .then((students) => res.json(students))
  //     .catch((err) => res.json(err));
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
