import { Controller, Get, HttpCode, HttpStatus, Post, Body, UseFilters } from '@nestjs/common';
import { UserRegistrationDto } from './dto/user-registration.dto';
import { User } from '../users/entityes/user.entity';
import { UserService } from 'src/users/user.service';
import { HttpExceptionFilter } from 'src/middlewares/http-exception.filter';


@Controller('auth')
export class AuthController {
    // eslint-disable-next-line no-unused-vars
    constructor(private readonly userService: UserService) {
    }

    @Get()
    getAll(): string {
        return 'getAll'
    }

    @Post("registration")
    @HttpCode(HttpStatus.CREATED)
    async regestration(@Body() data: UserRegistrationDto): Promise<User>  {
        return this.userService.registration(data);
        
    }
    
    @Post("login")
    async login(@Body() data: UserRegistrationDto): Promise<string> {
        const token = this.userService.login(data);
        return token;
    }
}
