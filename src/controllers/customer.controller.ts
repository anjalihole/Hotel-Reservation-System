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

  async findOne(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    try {
      const customer = await customerRepository.getById(id);

      if (customer) res.status(200).send(customer);
      else
        res.status(404).send({
          message: `Cannot find customer with id=${id}.`,
        });
    } catch (err) {
      res.status(500).send({
        message: `Error retrieving customer with id=${id}.`,
      });
    }
  }

  async findAll(req: Request, res: Response) {
    const FirstName =
      typeof req.query.FirstName === "string" ? req.query.FirstName : "";

    try {
      const customers = await customerRepository.getAllCustomer({ FirstName });

      res.status(200).send(customers);
    } catch (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving customers.",
      });
    }
  }
}
