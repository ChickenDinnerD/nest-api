import { Inject, CACHE_MANAGER, HttpException, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';


@Injectable()
export class MathService{
    
    // eslint-disable-next-line no-unused-vars
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

    async getRandomExample(): Promise<any> {
            const numb = Math.floor(
              Math.random() * (1000 - 1) + 1
            )
            const example = numb * numb
            console.log(example);
    }

    async setDataToRedis(): Promise<string> {
        try {
            const example = "25 * 25";
            const result = (25*25);
            await  this.cacheManager.set("result", result, {ttl:60});
            return example;
        } catch (error) {
            throw new HttpException(error.response.message, error.status);
        }
    }

    async getDataFromRedis(data: number): Promise<string> {
        try {
            const cacheVar = await this.cacheManager.get("result");
            console.log(cacheVar);
            if (data == cacheVar) {
                return "answer true";
            }else {
                return "answer false";
            }
        } catch (error) {
            throw new HttpException(error.response.message, error.status);
        }
    }
}
