const Router = require("express");
const accountIsValid = require("./app/middlewares/accountIsValid.middleware");
const AccountController = require("./app/controllers/Account.controller.js");
const StatementController = require("./app/controllers/Statement.controller.js");

const routes = Router();
const account = new AccountController();
const statement = new StatementController();

routes.post("/account", account.create);

routes.get("/statement", accountIsValid, statement.show);

module.exports = routes;
