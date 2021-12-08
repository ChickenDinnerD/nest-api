import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entityes/user.entity';
import { UserService } from 'src/users/user.service';
import { UserModule } from '../users/users.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([User,])],
  providers: [UserService],
  controllers: [AuthController]

})
export class AuthModule {}
