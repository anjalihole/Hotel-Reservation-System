import { Sequelize } from "sequelize-typescript";
import { config, dialect } from "../config/db.config";
import Tutorial from "../models/tutorial.model";
import Customer from "../models/customer.model";
import Hotel from "../models/hotel.model";
import Payment from "../models/payment.model";
import Reservation from "../models/reservation.model";
import Room from "../models/room.model";
import Roomfacility from "../models/roomfacilities.model";

class Database {
  public sequelize: Sequelize | undefined;

  constructor() {
    this.connectToDatabase();
  }

  private async connectToDatabase() {
    this.sequelize = new Sequelize({
      database: config.DB,
      username: config.USER,
      password: config.PASSWORD,
      host: config.HOST,
      dialect: dialect,
      pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle,
      },
      models: [
        Tutorial,
        Customer,
        Hotel,
        Payment,
        Reservation,
        Room,
        Roomfacility,
      ],
    });
    // database connection
    await this.sequelize
      .authenticate()
      .then(() => {
        console.log("Connection has been established successfully.");
      })
      .catch((err) => {
        console.error("Unable to connect to the Database:", err);
      });
  }
}

export default Database;
