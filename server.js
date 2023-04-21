const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;

app.set("view engine", "ejs");

const employees = [
    {
      employeeId: "1",
      name: "Ram",
      city: "Mumbai",
    },
    {
      employeeId: "2",
      name: "Priya",
      city: "Chennai",
    },
  ];

  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
// Greeting 
app.get('/', (req, res) => {
    // return res.send('Hello world!');
    res.render("home", {
        data: employees,
    })
});

// Register Employee
app.post('/employee', (req, res) => {
    return res.send();
});

// Get Employee details
app.get('/employee/:id', (req, res) => {
    return res.send();
});

// Get all Employee details
app.get('/employees/all', (req, res) => {
    return res.send();
});

// Update Employee
app.put('/update', (req, res) => {
    // return res.send();
  const requestedEmployeeId = req.body.employeeId;
  const inputEmployeeName = req.body.name;
  const inputEmployeeCity = req.body.city;
  
  var j = 0;
  employees.forEach((employee) => {
    j = j + 1;
    if (employee.employeeId == requestedEmployeeId) {
        (employee.employeeName = inputEmployeeName),
          (employee.employeeCity = inputEmployeeCity);
      };
  });
  res.render("home", {
    data: employees,
  });
});

// Delete Employee
app.delete('/employee/:id', (req, res)=>{
    return res.send();
});

app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});

