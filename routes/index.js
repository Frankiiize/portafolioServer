const bodyParser = require('body-parser');
const cors = require('cors');

const main = require('./main.router');
const usersRouter = require('./users.router');
const projectsRouter = require('./projects.router');
const tecsRouter = require('./tecnologies.router');
const contact = require('./contact.router');


function routerApi(app) {
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  app.use(cors({ origin: '*' }))
  app.use('/', main)
  app.use('/projects', projectsRouter)
  app.use('/tecnologies', tecsRouter)
  app.use('/contact', contact)
  app.use('/users', usersRouter);
}

module.exports = routerApi;