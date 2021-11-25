import { Controller, Get, HttpCode, HttpStatus, Post, Body } from '@nestjs/common';
import { UserRegistrationDto } from './dto/user-registration.dto';
import { User } from '../users/entityes/user.entity';
import { UserService } from '../users/user.service';


@Controller('auth')
export class AuthController {
    constructor(private readonly userService: UserService) {
    }

    @Get()
    getAll(): string {
        return 'getAll'
    };

    @Post("/registration")
    @HttpCode(HttpStatus.CREATED)
    async regestration(@Body() data: UserRegistrationDto): Promise<User>  {
        return this.userService.registration(data);
        
    };
    
    @Post()
    async login(@Body() data: UserRegistrationDto): Promise<string> {
        const token = this.userService.login(data);
        return token;
    };
};
