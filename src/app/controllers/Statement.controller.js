const customers = require("../../fakeDB/customers");

class StatementController {
  show(request, response) {
    const { cpf } = request.params;
    const customer = customers.find((customer) => customer.cpf === cpf);

    return response.json(customer.statement);
  }
}

module.exports = StatementController;
