
const express = require ('express')
const bodyParser=require('body-parser')
const mongoose=require("mongoose")
const userRoute=require('./backend/routes/user')
const cors=require('cors');
const path=require('path')
const app=express();

// start the server
app.listen(3000, () => {
  console.log(`server running : http://localhost:3000`);
  });
