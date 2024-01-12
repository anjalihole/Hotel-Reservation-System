import { Model, Table, Column, DataType } from "sequelize-typescript";

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

  @Column({
    type: DataType.INTEGER,
    field: "RoomID",
  })
  RoomID?: number;

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
