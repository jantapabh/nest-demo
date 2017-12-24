import { Table, Column, Model, PrimaryKey, CreatedAt, UpdatedAt, HasMany } from 'sequelize-typescript';
import { Posts } from '../../posts/model/posts.model'

@Table
export class Users extends Model<Users> {

  @Column
  name: string;

  @Column
  email: string;

  @HasMany(() => Posts)
  posts: Posts[];

  @CreatedAt
  createdAt: string;

  @UpdatedAt
  updatedAt: string;
}