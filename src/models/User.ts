import { AllowNull, Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: 'User'
})
class User extends Model {
  @AllowNull(false)
  @Column({
    type: DataType.STRING(60)
  })
  declare nombre: string;
  @Column({
    type: DataType.STRING(60)
  })
  declare apellido: string;
  @Column({
    type: DataType.STRING(15)
  })
  declare telefono: string;
  @Column({
    type: DataType.STRING(100)
  })
  declare correo: string;
}

export default User