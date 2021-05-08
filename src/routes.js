const Router = require("express");
const AccountController = require("./app/controllers/Account.controller.js")

const routes = Router();
const account = new AccountController();

routes.post("/account", account.store);

module.exports = routes;
