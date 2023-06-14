import { Body, Controller, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Controller('/user')
export class UserController {
  // private userRepository = new UserRepository();
  constructor(private userRepository: UserRepository) {}

  @Post('')
  async createUser(@Body() data) {
    this.userRepository.save(data);
    return data + 'user created!';
  }
}
