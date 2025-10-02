import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { getUserById } from "src/module";
import { config } from "src/system";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwt.secret,
};

export const getJwtStrategy = () => {
  return new JwtStrategy(opts, async (payload, done) => {
    try {
      const user = await getUserById(payload.id);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (e) {
      return done(e, false);
    }
  });
};
