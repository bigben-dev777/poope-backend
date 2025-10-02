import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { config } from "src/system";

const opts = {
  clientID: config.google.clientId,
  clientSecret: config.google.clientSecret,
  callbackURL: config.google.callbackURL,
};

export const getGoogleStrategy = () => {
  return new GoogleStrategy(
    opts,
    async (_accessToken, _refreshToken, profile, done) => {
      try {
        done(null, {
          uid: profile.id,
          email: profile.emails?.at(0)?.value || "",
          firstname: profile.name?.givenName || "",
          lastname: profile.name?.familyName || "",
          provider: "google",
          password: "",
        });
      } catch (err) {
        done(err, false);
      }
    }
  );
};
