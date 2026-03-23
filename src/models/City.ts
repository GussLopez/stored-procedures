import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "Ciudad",
})
class City extends Model {
  @Column({
    type: DataType.STRING(50),
  })
  declare nombre: string;

  @Column({
    type: DataType.STRING(40),
  })
  declare estado: string;
}

export default City