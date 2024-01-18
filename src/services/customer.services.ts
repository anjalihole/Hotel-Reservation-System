import { Op } from "sequelize";
import Customer from "../models/customer.model";

interface ICustomerRepository {
  save(user: Customer): Promise<Customer>;
}

interface SearchCondition {
  [key: string]: any;
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

  async getById(CustomerID: number): Promise<Customer | null> {
    try {
      return await Customer.findByPk(CustomerID);
    } catch (error) {
      throw new Error("Failed to retrieve Customer!");
    }
  }

  async getAllCustomer(searchParams: {
    FirstName?: string;
  }): Promise<Customer[]> {
    try {
      let condition: SearchCondition = {};

      if (searchParams?.FirstName)
        condition.FirstName = { [Op.like]: `%${searchParams.FirstName}%` };

      return await Customer.findAll({ where: condition });
    } catch (error) {
      throw new Error("Failed to retrieve Customer!");
    }
  }
}

export default new CustomerRepository();
