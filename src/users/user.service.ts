import { HttpException, NotFoundException, Injectable, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRegistrationDto } from '../auth/dto/user-registration.dto';
import { User } from './entityes/user.entity';
import * as bcrypt from 'bcrypt';
import { generateAsccessToken } from './utils/generate-jwt-token';

@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(User)
        // eslint-disable-next-line no-unused-vars
        private usersRepository: Repository<User>
    ) {}

    async registration(user: UserRegistrationDto): Promise<User> {
        try {
            const candidate = await this.usersRepository.find({where: {username: user.username}})
            if (candidate[0]) {
                throw new ForbiddenException('This name is already exist');
            }else {
                const hashPass = await bcrypt.hash(user.password, 5);
                user.password = hashPass
                const createdUser = this.usersRepository.create(user);
                return this.usersRepository.save(createdUser);
            }
        } catch (error) {
            throw new HttpException(error.response.message, error.status)
        }  
    }

    async login(user: UserRegistrationDto): Promise<string> {
        try {
            const validUser = await this.usersRepository.find({where: {username: user.username}});
            if (!validUser[0]) {
                throw new NotFoundException('Invalid username');
            }else {
                const validPass = bcrypt.compareSync(user.password, validUser[0].password);
                if (!validPass) {
                    throw new NotFoundException('Invalid password');
                }
                const token = generateAsccessToken(validUser[0].id, validUser[0].currentRole);
                return token;   
            }
        } catch (error) {
            throw new HttpException(error.response.message, error.status);
        }        
    }
}
