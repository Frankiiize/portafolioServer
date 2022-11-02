//instanciamos a express
const express = require('express');
//instanciamos el router de express 
const router = express.Router();

router.get('/', (req, res) => {
  res.send('main')
 
})

module.exports = router