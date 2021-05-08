class DepositController {
  create(request, response) {
    const { description, amount } = request.body;
    const { customer } = request;

    const statementOperation = {
      description,
      amount,
      created_at: new Date(),
      type: "credit",
    };

    customer.statement.push(statementOperation);
    return response.status(201).send();
  }
}

module.exports = DepositController;
