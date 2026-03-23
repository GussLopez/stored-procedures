import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import Hotel from "./Hotel";
import User from "./User";

@Table({
  tableName: "Booking",
})
class Booking extends Model {
  @Column({
    type: DataType.DATE(),
  })
  declare fechaReserva: Date;

  @Column({
    type: DataType.INTEGER,
  })
  declare noches: number;

  @Column({
    type: DataType.BOOLEAN,
  })
  declare status: boolean;

  @ForeignKey(() => Hotel)
  declare hotelId: number;

  @BelongsTo(() => Hotel)
  declare hotel: Hotel;

  @ForeignKey(() => User)
  declare userId: number;

  @BelongsTo(() => User)
  declare user: User;
}

export default Booking;
