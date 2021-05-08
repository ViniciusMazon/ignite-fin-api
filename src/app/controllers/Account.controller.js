const { v4: uuidv4 } = require("uuid");

const customers = [];

class AccountController {
  store(request, response) {
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
}

module.exports = AccountController;
