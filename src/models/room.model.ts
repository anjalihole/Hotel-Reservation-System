import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import Hotel from "./hotel.model";

@Table({
  tableName: "room",
})
export default class Room extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "RoomID",
  })
  RoomID?: number;

  @ForeignKey(() => Hotel)
  @Column({
    type: DataType.INTEGER,
    field: "HotelID",
  })
  HotelID?: number;

  @BelongsTo(() => Hotel)
  hotel?: Hotel;

  @Column({
    type: DataType.STRING(255),
    field: "RoomType",
  })
  RoomType?: string;

  @Column({
    type: DataType.STRING(255),
    field: "BedType",
  })
  BedType?: string;

  @Column({
    type: DataType.STRING(255),
    field: "RoomImage",
  })
  RoomImage?: string;

  @Column({
    type: DataType.INTEGER,
    field: "Price",
  })
  Price?: number;

  @Column({
    type: DataType.INTEGER,
    field: "Tax",
  })
  Tax?: number;

  @Column({
    type: DataType.STRING(255),
    field: "Description",
  })
  Description?: string;

  @Column({
    type: DataType.STRING(255),
    field: "BlockRoom",
  })
  BlockRoom?: string;

  @Column({
    type: DataType.STRING(255),
    field: "RoomPerPerson",
  })
  RoomPerPerson?: string;

  @Column({
    type: DataType.INTEGER,
    field: "CostPerDay",
  })
  CostPerDay?: number;

  @Column({
    type: DataType.STRING(255),
    field: "Inventory",
  })
  Inventory?: string;
}
