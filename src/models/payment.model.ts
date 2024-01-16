import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import Reservation from "./reservation.model";

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

  @ForeignKey(() => Reservation)
  @Column({
    type: DataType.INTEGER,
    field: "ReservationID",
  })
  ReservationID?: number;

  @BelongsTo(() => Reservation)
  reservation?: Reservation;

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
