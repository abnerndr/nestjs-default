/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { User } from './user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  //   quando criar  ainterface da entity subistituir o any por ela
  store(body: User): Observable<User> {
    return from(this.userRepository.save(body));
  }

  index(): Observable<any> {
    return from(this.userRepository.find());
  }

  show(id: any): Observable<any> {
    return from(this.userRepository.findBy(id));
  }

  update(id: string, body: any): Observable<any> {
    return from(this.userRepository.update(id, body));
  }
}
