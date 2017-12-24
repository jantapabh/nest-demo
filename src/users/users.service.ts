import { Component, Inject } from '@nestjs/common';
import { Model } from 'sequelize-typescript';
import { Users } from './model/user_sequelize.model';
import { Constant } from '../config/constant';

@Component()
export class UsersService {
  constructor(
    @Inject(Constant.userRepo) private readonly users: typeof Users) {}

  async findAll(): Promise<Users[]> {
    return await this.users.findAll<Users>();
  }

  async findOne(userId): Promise<Users> {
    return await this.users.findById<Users>(userId)
  }

  async create(user): Promise<Users> {
    return await this.users.create<Users>(user)
  }
}