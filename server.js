const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');

const PORT = process.env.PORT || 3000;
const db = require('./models');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(
  session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/dist/client'));
app.use(compression());

require('./routes/api-routes.js')(app);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/client/index.html'));
});

app.set('port', PORT);

const server = http.createServer(app);

db.sequelize.sync().then(function () {
  server.listen(PORT, function () {
    console.log(
      'Listening on port %s. Visit http://localhost:%s/ in your browser.',
      PORT,
      PORT
    );
  });
});
