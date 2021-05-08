const { v4: uuidv4 } = require("uuid");
const customers = require("../../fakeDB/customers");

class AccountController {
  create(request, response) {
    const { name, cpf } = request.body;

    const customerAlreadyExists = customers.some(
      (customer) => customer.cpf === cpf
    );

    if (customerAlreadyExists) {
      return response.status(400).json({ error: "Customer already exists" });
    }

    const account = {
      name,
      cpf,
      id: uuidv4(),
      statement: [],
    };
    customers.push(account);

    return response.status(201).json({ account });
  }

  update(request, response) {
    const { name } = request.body;
    const { customer } = request;

    customer.name = name;
    return response.status(201).send();
  }

  index(request, response) {
    const { customer } = request;
    return response.status(200).json(customer);
  }

  delete(request, response) {
    const { customer } = request;

    customers.splice(customer, 1);
    return response.status(204).send();
  }
}

module.exports = AccountController;
