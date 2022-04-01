//instanciamos a express
const express = require('express');
//instanciamos el router de express 
const router = express.Router();
//ejemplo de lista de usarios
const users = 
[
  {
    name: 'franki',
    id: 1
  },
  {
    name: 'salomon',
    id: 2
  },
  {
    name: 'carlos',
    id: 3
  }
]

//llamamos el metodo get de express mediante la instancia del router
//y el path principal lo podemos manejar solo con "/" de aqui iremos generando los dmas paths
router.get('/', (req,res) => {
  res.json(users);
})

router.get('/:id', (req, res) => {
  const { id } = req.params

 const filter =  users.find((user) => user.id === parseInt(id))
  
  res.json(filter);
});

router.post('/', (req,res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json(users)
});

module.exports = router ;