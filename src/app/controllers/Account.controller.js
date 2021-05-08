const { v4: uuidv4 } = require("uuid");

const customers = [];

class AccountController {
  store(request, response) {
    const { name, cpf } = request.body;
    const id = uuidv4();

    const account = {
      name,
      cpf,
      id,
      statement: [],
    };
    customers.push(account);

    return response.status(201).json({ account });
  }
}

module.exports = AccountController;
