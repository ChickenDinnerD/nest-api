import { Controller, Get, Post, Body } from '@nestjs/common';
import { MathAnswerDto } from './dto/math-answer.dto';
import { MathService } from './math.service';
 
@Controller()
export class MathController {
    // eslint-disable-next-line no-unused-vars
    constructor(private readonly mathService: MathService) {}

    @Get("redis-set")
    async getExample() {
        const example = this.mathService.setDataToRedis();
        return example;
    }
    
    @Post("redis-get")
    async getAnswer(@Body() data: MathAnswerDto): Promise<string> {
        const valueAnswer = data.answer
        const answer = this.mathService.getDataFromRedis(valueAnswer);
        const answ = 'Sonic'
        return answ;
    }
}
