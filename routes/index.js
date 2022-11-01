const bodyParser = require('body-parser');
const cors = require('cors');

const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const projectsRouter = require('./projects.router');
const tecsRouter = require('./tecnologies.router');


function routerApi(app) {
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  app.use(cors({ origin: '*' }))
  app.use('/projects', projectsRouter)
  app.use('/tecnologies', tecsRouter)
  app.use('/products', productsRouter);
  app.use('/users', usersRouter);
}

module.exports = routerApi;