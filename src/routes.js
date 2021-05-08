const Router = require("express");
const accountIsValid = require("./app/middlewares/accountIsValid.middleware");
const AccountController = require("./app/controllers/Account.controller.js");
const StatementController = require("./app/controllers/Statement.controller.js");
const DepositController = require("./app/controllers/Deposit.controller");

const routes = Router();
const account = new AccountController();
const statement = new StatementController();
const deposit = new DepositController();

routes.post("/account", account.create);

routes.get("/statement", accountIsValid, statement.show);

routes.post("/deposit", accountIsValid, deposit.create);

module.exports = routes;
