import config from "config";

module.exports = (): void => {
  if (!config.get("authSecret"))
    throw new Error("FATAL ERROR: auth secret is not defined.");
  if (!config.get("databaseConn"))
    throw new Error("FATAL ERROR: database connection is not defined.");
  if (!config.get("mailerUser"))
    throw new Error("FATAL ERROR: mailer user is not defined.");
  if (!config.get("mailerPass"))
    throw new Error("FATAL ERROR: mailer password is not defined.");
};
