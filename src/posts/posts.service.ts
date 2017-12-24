import { Component, Inject } from '@nestjs/common';
import { Model } from 'sequelize-typescript';
import { Posts } from './model/posts.model';
import { Users } from '../users/model/user_sequelize.model'
import { Constant } from '../config/constant';

@Component()
export class PostsService {
  constructor(
    @Inject(Constant.postRepo) private readonly post: typeof Posts) {}


  async findAll(): Promise<Posts[]> {
    return await this.post.findAll<Posts>({include: [{
        model: Users
      }]
    });
  }

  async findPost(id): Promise<Posts> {
    return await this.post.findById(id, {include: [{
        model: Users
      }]
    })
  }

  async create(post): Promise<Posts> {
    return await this.post.create<Posts>(post)
  }
}