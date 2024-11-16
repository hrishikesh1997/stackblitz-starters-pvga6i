const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/shout', (req,res)=>
{
  let name =req.query.name;
  let UpperCaseName = name.toUpperCase();
  res.send(UpperCaseName);
});

app.get('/fullname',(req,res)=>{
  let firstname =req.query.fname;
  let LastName=req.query.Lname;
  let FullName=firstname+"  "+LastName
  res.send(FullName);
})

app.get('/date' , (req,res)=>{
  let month=req.query.month;
  let year=req.query.year;
  let formatdate= month+", "+year;
  res.send(formatdate);
})

app.get('/greet',(req,res)=>{
  let name=req.query.name;
  let greetMessgae="Namstey ," +name;
  res.send(greetMessgae);
})

app.get('/address',(req,res)=>{
  let street=req.query.street;
  let city=req.query.city;
  let state=req.query.state;

  let fulladd=street+" , "+city+", "+state;
  res.send(fulladd);
})
///address?street=123+Main+CL&city=pune&state=MH

app.get("/email" ,(req,res)=>{
  let UserName=req.query.uname;
  let Domain=req.query.dname;

  let emailaddress= UserName+"@"+Domain;
  res.send(emailaddress);
})
///email?uname=JohnDoe&dname=gmail.com
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
 