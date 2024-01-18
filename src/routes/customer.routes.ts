import { Router } from "express";
import CustomerController from "../controllers/customer.controller";

class CustomerRoutes {
  router = Router();
  controller = new CustomerController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // Create a new customer
    this.router.post("/", this.controller.create);

    // Retrieve a single customer by id
    this.router.get("/:id", this.controller.findOne);

    // Retrieve all customers
    this.router.get("/", this.controller.findAll);
  }
}

export default new CustomerRoutes().router;
