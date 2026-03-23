import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import City from "./City";

@Table({
  tableName: "Hotel",
})
class Hotel extends Model {
  @Column({
    type: DataType.STRING(40),
  })
  declare nombre: string;

  @Column({
    type: DataType.STRING(40),
  })
  declare descripcion: string;

  @Column({
    type: DataType.INTEGER,
  })
  declare precio: number;

  @ForeignKey(() => City)
  declare cityId: number;

  @BelongsTo(() => City)
  declare city: City;
}

export default Hotel;
