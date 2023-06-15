import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserRepository } from './user.repository';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post('create')
  create(@Body() body: User): Observable<User> {
    const user = this.userRepository.store(body);
    return user;
  }

  @Get('list')
  find(): Observable<User[]> {
    const user = this.userRepository.index();
    return user;
  }

  @Get(':id')
  fingById(@Param(':id') id: string): Observable<User> {
    const user = this.userRepository.show(id);
    return user;
  }

  @Put(':id')
  update(@Param(':id') id: string, @Body() body: User): Observable<User> {
    const user = this.userRepository.update(id, body);
    return user;
  }
}
