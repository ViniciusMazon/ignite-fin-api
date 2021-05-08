const getBalance = require("../helpers/getBalance.helper.js");

class Withdraw {
  create(request, response) {
    const { amount } = request.body;
    const { customer } = request;

    const balance = getBalance(customer.statement);
    if (balance < amount) {
      return response.status(400).json({ error: "Insufficient funds" });
    }

    const statementOperation = {
      amount,
      created_at: new Date(),
      type: "debit",
    };

    customer.statement.push(statementOperation);

    return response.status(201).send();
  }
}

module.exports = Withdraw;
