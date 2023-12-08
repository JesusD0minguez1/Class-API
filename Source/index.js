const express = require("express");
const bp = require("body-parser");
const { json } = require("body-parser");
const app = express();

const jsonParser = bp.json();
const Students = [
    {StudentName:"Jesus", GPA: "3.6", IsAttractive:True},
    {StudentName:"Eric", GPA: "3.1", IsAttractive:false},
    {StudentName:"N", GPA: "2.8", IsAttractive:false},
    {StudentName:"Moises", GPA: "3.0", IsAttractive:True},

];

app.post("/NewStudent", jsonParser ,(req,res) =>{
    let studentName = req.body.Idname;
    let GPA = req.body.author;
    let IsAttractive = req.body.Yes;
    Ideas.push({StudentName:studentName, GPA:GPA, IsAttractive: IsAttractive});
    res.send(Students);
});

app.get("/Students", (req,res)=>{
    res.send(Students);
});

app.get("/Student/:StudentID", (req,res) =>{
    let StudentID = req.params.StudentID;
    res.send(Students[StudentID]);
});


app.listen(3000, () => {
    console.log("Iistening on port 3000");
});

