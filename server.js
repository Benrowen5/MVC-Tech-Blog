const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers/');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');
const hbs = exphbs.create({helpers});

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: true,
  saveUninitialized: true,
  store: new SequelizeStore({
      db: sequelize
  })
};


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on port ' + PORT));
});