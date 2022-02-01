import { CacheModule, Module } from '@nestjs/common';
import { MathController } from './math.controller';
import { MathService } from './math.service';

@Module({
    imports: [CacheModule.register()],
    providers: [MathService],
    controllers: [MathController]
})
export class MathModule {}
