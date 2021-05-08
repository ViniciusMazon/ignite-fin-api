const getBalance = require("../helpers/getBalance.helper");

class BalanceController {
  index(request, response) {
    const { customer } = request;
    const balance = getBalance(customer.statement);

    return response.status(200).json(balance);
  }
}

module.exports = BalanceController;
