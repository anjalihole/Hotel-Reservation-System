import { Request, Response } from "express";
import Customer from "../models/customer.model";
import customerRepository from "../services/customer.services";

export default class CustomerController {
  async create(req: Request, res: Response) {
    if (!req.body.Email) {
      res.status(400).send({
        message: "Email can not be empty!",
      });
      return;
    }

    try {
      const customer: Customer = req.body;

      const savedCustomer = await customerRepository.save(customer);

      res.status(201).send(savedCustomer);
    } catch (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving customer.",
      });
    }
  }
}
