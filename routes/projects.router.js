//instanciamos a express
const express = require('express');
//instanciamos el router de express 
const router = express.Router();
//ejemplo de lista de usarios

//llamamos el metodo get de express mediante la instancia del router
//y el path principal lo podemos manejar solo con "/" de aqui iremos generando los dmas paths
const  db  = require('../config/firebase.config')


const getAllProjects = async() => {
  const snapshot = await db.collection('projects').get();
  const tecSnapShot = await db.collection('tecnologies').get();
  let projects = [];
  let tecnologies = [];
  snapshot.forEach((doc) => {
    const data = doc.data();
    data.id = doc.id
    projects.push(data)
  })
  tecSnapShot.forEach((doc) => {
    const data = doc.data();
    data.docRef = doc.id
    tecnologies.push(data)
  })
  Promise.resolve([projects, tecnologies])
  .then((item) => {
    const projectos = item[0];
    const tecnologias = item[1];
    projectos.map((project) => {
      const currentProjectTecs = project.tec
      const tecsToAdd = tecnologias.filter((tec) => {
        if(currentProjectTecs.includes(tec.id) ){
          return tec
        }
      })
      project.tecnologies = tecsToAdd
    })
  })
  return projects
}
    


router.get('/', (req,res) => {
  try{
    const get =  getAllProjects();
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