import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory {
    // eslint-disable-next-line no-unused-vars
    constructor(private configService: ConfigService){}

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {            
            type: "postgres",
            host: this.configService.get<string>('HOST').toString(), 
            port: +this.configService.get<string>('PORT'),
            username: this.configService.get<string>('DB_USER').toString(),
            password: this.configService.get<string>('PASSWORD').toString(),
            database: this.configService.get<string>('DATABASE').toString(),
            entities: ["dist/**/*.entity{.ts,.js}"]
        };
    }
}
