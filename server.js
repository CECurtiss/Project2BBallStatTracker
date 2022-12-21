const path = require('path');
const express = require('express');
const exphbs  = require('express-handlebars');
const session = require('express-session');
const routes  = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const port = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sessionConfig));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => console.log(`Now listening on http://localhost:${port}`));
});
