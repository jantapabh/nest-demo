import {Table, Column, Model, HasMany, CreatedAt, UpdatedAt, BelongsTo, ForeignKey} from 'sequelize-typescript';
import { Users } from '../../users/model/user_sequelize.model'

@Table
export class Posts extends Model<Posts> {

  @Column
  title: string;

  @Column
  text: string;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @ForeignKey(() => Users)
  @Column
  userId: number;

  @BelongsTo(() => Users)
  users: Users[];
}