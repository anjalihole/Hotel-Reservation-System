import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import Room from "./room.model";

@Table({
  tableName: "roomfacilities",
})
export default class Roomfacility extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "RoomFacilityID",
  })
  RoomFacilityID?: number;

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
    field: "FacilityName",
  })
  FacilityName?: string;

  @Column({
    type: DataType.STRING,
    field: "Description",
  })
  Description?: string;
}
