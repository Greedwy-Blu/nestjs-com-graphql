import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.enitity';

@Injectable()
export class UserService {
constructor(
    @InjectRepository(User)
    private userRepositor: Repository<User>
){}


}
