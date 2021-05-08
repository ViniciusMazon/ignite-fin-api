const customers = require("../../fakeDB/customers");

class StatementController {
  show(request, response) {
    const { customer } = request;
    return response.status(200).json(customer.statement);
  }
}

module.exports = StatementController;
