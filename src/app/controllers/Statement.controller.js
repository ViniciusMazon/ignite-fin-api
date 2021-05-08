class StatementController {
  index(request, response) {
    const { customer } = request;
    return response.status(200).json(customer.statement);
  }

  show(request, response) {
    const { customer } = request;
    const { date } = request.query;

    const dateFormat = new Date(date + " 00:00");

    const statement = customer.statement.filter(
      (statement) =>
        statement.created_at.toDateString() ===
        new Date(dateFormat).toDateString()
    );

    console.log(statement);

    return response.status(200).json(statement);
  }
}

module.exports = StatementController;
