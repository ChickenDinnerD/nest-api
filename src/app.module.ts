import { Module, CacheModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PostgresConfigService } from './config/config-service';
import { AuthModule } from './auth/auth.module';
import * as redisStore from 'cache-manager-redis-store';
import { MathModule } from './math/math.module';



@Module({
  imports: [
    CacheModule.register({
      store:redisStore,
      host: 'localhost',
      port: 6379
    }),
    MathModule,
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
