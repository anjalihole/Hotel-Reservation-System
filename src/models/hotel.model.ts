import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "hotel",
})
export default class Hotel extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "HotelID",
  })
  HotelID?: number;

  @Column({
    type: DataType.STRING(255),
    field: "Name",
  })
  Name?: string;

  @Column({
    type: DataType.STRING(255),
    field: "Address",
  })
  Address?: string;

  @Column({
    type: DataType.STRING(255),
    field: "Email",
  })
  Email?: string;

  @Column({
    type: DataType.INTEGER,
    field: "Phone",
  })
  Phone?: number;
}
