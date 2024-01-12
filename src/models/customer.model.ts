import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "customers",
})
export default class Customer extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "CustomerID",
  })
  CustomerID?: number;

  @Column({
    type: DataType.STRING(255),
    field: "FirstName",
  })
  FirstName?: string;

  @Column({
    type: DataType.STRING(255),
    field: "LastName",
  })
  LastName?: string;

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

  @Column({
    type: DataType.STRING(255),
    field: "Address",
  })
  Address?: string;

  @Column({
    type: DataType.STRING(255),
    field: "Password",
  })
  Password?: string;
}
