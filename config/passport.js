const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const fs = require('fs');
const path = require('path');

const db = require('../models');

const pathToKey = path.join(__dirname, '..', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
  secretOrKey: PUB_KEY,
  algorithms: ['RS256'],
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, async function (jwtPayload, done) {
      try {
        const user = await db.User.findOne({
          where: { id: jwtPayload.id },
        });
        if (user) {
          return done(null, user);
        } else {
          console.log('else');
          return done(null, false);
        }
      } catch (err) {
        return done(err, false);
      }
    })
  );
};
