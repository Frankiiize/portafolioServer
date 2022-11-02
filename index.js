const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = process.env.PORT || 3600;



app.listen(port, () =>{
  console.log('server ON en puerto ' + port);
})





routerApi(app);

/* app.get('/', (req,res) => {
  res.send('main')
});
 */
