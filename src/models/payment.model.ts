import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "payment",
})
export default class Payment extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "PaymentID",
  })
  PaymentID?: number;

  @Column({
    type: DataType.INTEGER,
    field: "ReservationID",
  })
  ReservationID?: number;

  @Column({
    type: DataType.INTEGER,
    field: "Amount",
  })
  Amount?: number;

  @Column({
    type: DataType.STRING(255),
    field: "PaymentDate",
  })
  PaymentDate?: string;

  @Column({
    type: DataType.STRING(255),
    field: "PaymentMethod",
  })
  PaymentMethod?: number;

  @Column({
    type: DataType.STRING(255),
    field: "PaymentConfirm",
  })
  PaymentConfirm?: string;
}
