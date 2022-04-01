const express = require('express');
const router = express.Router();

const productsService = require('../services/products.service')//importamos nustro servicios
const service = new productsService(); //como es una clase podemos crear unsa instancia del servicio
//el routing solo  atiende el acceso y la fomra de como atenderemos nuestros parametros
//pero el servicio es el que se encargara de toda la logica de negocios
router.get('/', (req,res) => {
  const products = service.find();//llamada a los productos obtenida desde el servicio
  res.json(products);
});

router.get('/:id', (req,res) =>{
  const { id } = req.params;
  console.log(id)
  const product = service.findOne(id)
  res.json(product)
})

router.post('/', (req, res) => {
  const data = req.body;
  const newProduct = service.create(data);
  res.status(201).json(newProduct);
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const updateProduct = req.body;
  const product = service.update(id,updateProduct);
  res.json(product);
})

router.delete('/:id', (req,res) => {
  const { id } = req.params;
  const deletedProduct = service.delete(id);
  res.json(deletedProduct);
});

module.exports = router;