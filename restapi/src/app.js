const express = require("express");
require("./db/conn");
const port = process.env.PORT || 8000;

const Student = require('./models/students')
const app = express();


app.get("/", (req, res) => {
  res.send(" home page.");
});

app.use(express.json())

// app.post("/students", (req, res) => {
//     const user = new Student(req.body)
//     // console.log(user)
//     user.save().then(() => {
//         res.status(201).send(user)
//     }).catch((err) => {
  //         res.status(400).send(err)
  //     });
  // });


  
  // data add mongodb students detile   #################3
app.post('/students', async(req, res) => {
 try{
  const user = new Student(req.body)
  const createuser = await user.save()
  res.status(201).send(createuser)

 }catch(err) {
  res.status(400).send(err)
 }
})

// all students detile   #################3
app.get('/students', async(req, res) => {
  try{
    const studata = await Student.find()
    res.send(studata)
  }catch(err){
    res.status(400).send(err)
  }
})


// students detile   #################3
app.get('/students/:id', async(req, res) => {
  try{
    const _id = req.params.id;
    const studata = await Student.findById(_id)
    // Console.log(studata)
    if(!studata){
      return res.status(404).send()
    }else{
      res.send(studata)
    }
  }catch(err){
    res.status(400).send(err)
  }
})

// update patch data ####################

app.patch('/students/:id', async(req, res) => {
  try{
    const _id = req.params.id;
    const updatedata = await Student.findByIdAndUpdate(_id , req.body , {new :true})
    res.send(updatedata)
    
  }catch(err){
    res.status(404).send(err)
  }
})

// delete data ###################

app.delete('/students/:id', async(req, res) => {
 try{
  const _id = req.params.id;
  const delete_data = await Student.findByIdAndDelete(_id)

  if(!delete_data){
    return res.status(404).send()
  }
  else {
    res.send(delete_data)
  }
 }
 catch(err){
  res.status(500).send(err)
 }
})


app.listen(port, (req, res) => {
  console.log(`'connction on ready' ${port}`);
});
