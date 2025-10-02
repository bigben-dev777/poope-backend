import passport from "passport";
import { getJwtStrategy } from "./jwt";
import { getGoogleStrategy } from "./google";

const strategies = [{ name: "jwt", strategyFcn: getJwtStrategy }, {name: 'google', strategyFcn: getGoogleStrategy}];

export const getPassport = () => {
  for (const { name, strategyFcn } of strategies) {
    passport.use(name, strategyFcn());
  }

  return passport;
};
