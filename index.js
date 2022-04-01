const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3200;

app.listen(port, () =>{
  console.log('server ON en puerto' + port);
})


routerApi(app);

app.get('/', (req,res) => {
  res.send('main')
});

