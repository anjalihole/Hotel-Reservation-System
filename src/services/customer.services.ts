import Customer from "../models/customer.model";

interface ICustomerRepository {
  save(user: Customer): Promise<Customer>;
}

class CustomerRepository implements ICustomerRepository {
  async save(customer: Customer): Promise<Customer> {
    try {
      return await Customer.create({
        FirstName: customer.FirstName,
        LastName: customer.LastName,
        Email: customer.Email,
        Phone: customer.Phone,
        Address: customer.Address,
        Password: customer.Password,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    } catch (err) {
      throw new Error(`Error creating customer- ${err}`);
    }
  }
}

export default new CustomerRepository();
