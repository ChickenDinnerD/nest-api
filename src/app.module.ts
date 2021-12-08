import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './users/users.module';
import { PostgresConfigService } from './config/config-service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    })
  ],
  providers: [PostgresConfigService],
})

export class AppModule {}
