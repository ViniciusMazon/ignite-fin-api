const Router = require("express");
const accountIsValid = require("./app/middlewares/accountIsValid.middleware");
const AccountController = require("./app/controllers/Account.controller.js");
const StatementController = require("./app/controllers/Statement.controller.js");
const DepositController = require("./app/controllers/Deposit.controller");
const WithdrawController = require("./app/controllers/Withdraw.controller.js");

const routes = Router();
const account = new AccountController();
const statement = new StatementController();
const deposit = new DepositController();
const withdraw = new WithdrawController();

routes.post("/account", account.create);
routes.put("/account",  accountIsValid, account.update);
routes.get("/account",  accountIsValid, account.index);

routes.get("/statement", accountIsValid, statement.index);
routes.get("/statement/date", accountIsValid, statement.show);

routes.post("/deposit", accountIsValid, deposit.create);

routes.post("/withdraw", accountIsValid, withdraw.create);

module.exports = routes;
