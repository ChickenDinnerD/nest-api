import { IsNotEmpty } from 'class-validator';

export class MathAnswerDto{
    @IsNotEmpty()
    answer: number
}
