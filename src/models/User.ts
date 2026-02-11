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
}

export default User