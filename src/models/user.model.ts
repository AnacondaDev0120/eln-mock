import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;
}