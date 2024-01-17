import { Application } from "express";
import tutorialRoutes from "./tutorial.routes";
import homeRoutes from "./home.routes";
import customerRoutes from "./customer.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api", homeRoutes);
    app.use("/api/tutorials", tutorialRoutes);
    app.use("/api/customer", customerRoutes);
  }
}
