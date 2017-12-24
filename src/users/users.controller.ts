import { Controller, Get, Body, Post, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {

  constructor(private readonly userService: UsersService){}

  @Get()
  async getUsers() {
    return await this.userService.findAll()
  }

  @Post() 
  async newUser(@Body() req){
    // TODO: validate data
    return await this.userService.create(req)
  }
 
}