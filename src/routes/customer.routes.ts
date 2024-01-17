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
  }
}

export default new CustomerRoutes().router;
