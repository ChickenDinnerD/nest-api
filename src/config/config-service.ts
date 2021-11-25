import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory {
    constructor(private configService: ConfigService){}

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {            
            type: "postgres",
            host: "localhost", 
            port: +this.configService.get<String>('PORT'),
            username: this.configService.get<String>('DB_USER').toString(),
            password: this.configService.get<String>('PASSWORD').toString(),
            database: this.configService.get<String>('DATABASE').toString(),
            entities: ["dist/**/*.entity{.ts,.js}"]
    };
  }
};
