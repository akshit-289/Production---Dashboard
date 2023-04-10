const express = require('express')
const app = express()
const port = 5000
const mongoDb = require('./db');
const router = require('./Routes/Crud');
const path = require('path');

mongoDb();
app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "https://dashboard-frontend-s2x7.onrender.com");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//middleware
app.use(express.json());
app.use('/api', router);

app.use(express.static(path.join(__dirname, '../build')));

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.listen(port, () => {
  // console.log(`Example app listening on port ${port}`)
})