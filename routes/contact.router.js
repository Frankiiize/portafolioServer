//instanciamos a express
const express = require('express');
const contactService = require('../services/contact.service');
const service = new contactService(); 
//instanciamos el router de express 
const router = express.Router();

router.post('/', (req, res) => {
  const data = req.body;
  const msj = service.emailTemplate(data);
  service.sendMail(msj)
  .then((response) => {
    res.status(201).json(response);
  })
  .catch((error) => {
    console.error(error)
    res.status(error.code).send(error)
  })
 

})

module.exports = router
