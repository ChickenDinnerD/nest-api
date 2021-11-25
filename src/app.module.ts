import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './users/user.module';
import { PostgresConfigService } from './config/config-service';


@Module({
  imports: [
    AuthModule,
    UserModule,
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    })
  ],
  providers: [PostgresConfigService],
})

export class AppModule {}
