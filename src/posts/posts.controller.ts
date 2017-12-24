import { Controller, Get, Body, Post, Res, HttpStatus, Param } from '@nestjs/common';
import { PostsService } from './posts.service'
import { UsersService } from '../users/users.service'


@Controller('posts')
export class PostsController {

  constructor(
    private readonly postsService: PostsService,
    private readonly usersService: UsersService
  ){}

  @Get()
  async getPosts() {
    return await this.postsService.findAll()
  }

  @Get('/:id')
  async getPost(@Param() param) {
    return await this.postsService.findPost(param.id)
  }

  @Post()
  async newPost(@Body() body, @Res() res) {
    if(!!body.userId) { // simple validation xD
      const { userId } = body
      const user = await this.usersService.findOne(userId)
      if(user) {
        return res.status(HttpStatus.OK).json(this.wrapData( HttpStatus.OK, await this.postsService.create(body)))
      }
      return res.status(HttpStatus.BAD_REQUEST).json(this.wrapData(HttpStatus.BAD_REQUEST, "User not found"))
    }
    return res.status(HttpStatus.BAD_REQUEST).json(this.wrapData(HttpStatus.BAD_REQUEST, "UserId id required"))
  }

  wrapData(status, data) {
    return {
      status,
      data
    }
  }
 
}