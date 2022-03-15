const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
// const cors = require("cors");
// app.use(cors());

//courses object
const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

//get all the courses
app.get("/", function (req, res) {
  res.send(courses);
});

//insert a data
app.post("/api/course" /*, express.json()*/, (req, res) => {
  if (!req.body.name)
    return res.status(400).send({ message: "Name of course is required" }); //Joi module can be used here and send error as response
  courses.push({ id: courses.length + 1, name: req.body.name });
  res.send("Data inserted");
});

//Update a particular course
app.put("/api/course/:name", (req, res) => {
  const course = courses.find((x) => x.name === req.params.name); //returns undefined if couldn't find the object(undefined in an if condition is considered false)
  if (!course) return res.send("Course to be updated is not found...");
  course.name = req.body.name;
  res.send("Course updated");
});

//Delete a particular course
app.delete("/api/course/:name", (req, res) => {
  const course = courses.find((x) => x.name === req.params.name); //returns undefined if couldn't find the object(undefined in an if condition is considered false)
  if (!course) return res.send("Course to be deleted is not found...");
  courses.splice(courses.indexOf(course), 1);
  res.send("Course deleted");
});

app.listen(PORT, () => {
  console.log(`Listening on port : ${PORT}`);
});
