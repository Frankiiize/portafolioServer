//instanciamos a express
const express = require('express');
//instanciamos el router de express 
const router = express.Router();
//ejemplo de lista de usarios

//llamamos el metodo get de express mediante la instancia del router
//y el path principal lo podemos manejar solo con "/" de aqui iremos generando los dmas paths
const  db  = require('../config/firebase.config');
const getAllTecnologies = async() => {
  const tecSnapShot = await db.collection('tecnologies').get();
  let tecnologies = [];
  
  tecSnapShot.forEach((doc) => {
    const data = doc.data();
    data.docRef = doc.id
    tecnologies.push(data)
  })
  console.log(tecnologies)

  return tecnologies
}


router.get('/', (req,res) => {
  try{
    const get =  getAllTecnologies();
    get.then((data) => {
      res.json({
        data
      });
    })
  }catch(error){
    res.send('error')
    console.log(error)
  }
})
router.get('/', (req,res) => {
  try{
    const get =  getAllTecnologies();
    get.then((data) => {
      res.json({
        data
      });
    })
  }catch(error){
    res.send('error')
    console.log(error)
  }
})



module.exports = router ;