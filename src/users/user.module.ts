import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UserService } from '../users/user.service';
import { User } from './entityes/user.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([User,]),
    ],
    providers:[UserService],
    exports: [UserService],
})


export class UserModule {}
