const customers = require("../../fakeDB/customers");

class StatementController {
  show(request, response) {
    const { cpf } = request.header;
    const customer = customers.find((customer) => customer.cpf === cpf);

    if (!customer) {
      return response.status(400).json({ error: "Customer not found" });
    }

    return response.status(200).json(customer.statement);
  }
}

module.exports = StatementController;
