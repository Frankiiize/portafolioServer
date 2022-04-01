const bodyParser = require('body-parser');

const productsRouter = require('./products.router');
const usersRouter = require('./users.router');



function routerApi(app) {
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());

  app.use('/products', productsRouter);
  app.use('/users', usersRouter);
}

module.exports = routerApi;