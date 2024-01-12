import { Model, Table, Column, DataType } from "sequelize-typescript";

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

  @Column({
    type: DataType.INTEGER,
    field: "RoomID",
  })
  RoomID?: number;

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
