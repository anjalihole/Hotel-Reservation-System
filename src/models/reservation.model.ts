import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import Customer from "./customer.model";
import Room from "./room.model";

@Table({
  tableName: "reservation",
})
export default class Reservation extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "ReservationID",
  })
  ReservationID?: number;

  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
    field: "CustomerID",
  })
  CustomerID?: number;

  @BelongsTo(() => Customer)
  customer?: Customer;

  @ForeignKey(() => Room)
  @Column({
    type: DataType.INTEGER,
    field: "RoomID",
  })
  RoomID?: number;

  @BelongsTo(() => Room)
  room?: Room;

  @Column({
    type: DataType.STRING(255),
    field: "CheckInDate",
  })
  CheckInDate?: string;

  @Column({
    type: DataType.STRING(255),
    field: "CheckOutDate",
  })
  CheckOutDate?: string;

  @Column({
    type: DataType.INTEGER,
    field: "TotalCost",
  })
  TotalCost?: number;

  @Column({
    type: DataType.STRING(255),
    field: "Status",
  })
  Status?: string;
}

// Define the foreign key relationship
// Customer.belongsTo(Reservation, { foreignKey: "CustomerID" });
// Reservation.hasMany(Customer, { foreignKey: "CustomerID" });
